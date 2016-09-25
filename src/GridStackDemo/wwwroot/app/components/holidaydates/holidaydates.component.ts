/// <reference path="../../../../typings/index.d.ts" />
import {GeneralDataSource} from "../common/GeneralDataSource";

interface IHolidayDatesComponentController {
}


export class HolidayDatesComponentController implements IHolidayDatesComponentController {

    public onChange: Function;
    public source: GeneralDataSource;
    public ownerid: number;

    constructor(private $http: ng.IHttpService) {
    }

    public setHolidayDatesGridOptions() {

        // because this kendo grid has batch editing, APIs will need to support batch editing as well
        // DELETE, POST and UPDATE have to be capable of editing multiple entities in 1 request.

        /*
         - this.source.data.url contains the url that will be used to retrieve the data, it can be hardcoded or passed from a
            parent component through the source binding.
         - This component supports data refresh. When the source changes, this component refreshes with the new urls.
        */

        this.HolidayDatesGridOptions = {
            dataSource: {
                dataType: "json",
                transport: {
                    read: {
                        url: this.source.data.url,
                        dataType: "json"
                    },
                    update: {
                        url: this.source.update.url,
                        type: "POST",
                        contentType: "application/json",
                        dataType: "json"
                    },
                    destroy: {
                        url: this.source.delete.url,
                        type: "DELETE",
                        contentType: "application/json",
                        dataType: "json"
                    },
                    create: {
                        url: this.source.post.url,
                        type: "POST",
                        contentType: "application/json",
                        dataType: "json"
                    },
                    parameterMap: function (options, operation) {
                        //specify all operations besides read to send a request body
                        if (operation !== "read" && options.models) {
                            return JSON.stringify(options.models);
                        }
                    }
                },
                schema: {
                    model: {
                        id: "Id",
                        fields: {
                            Id: { editable: false, nullable: true },
                            HolidayDate: { type: "date" },
                            Description: { type: "string" }
                        }
                    }
                },
                pagesize: 10,
                batch: true
            },
            sortable: true,
            navigatable: true,
            pageable: true,
            toolbar: [{ name: "create", text: "Add Date" }, "save", "cancel"],
            columns: [
                { field: "HolidayDate", format: "{0:MM/dd/yyyy}", title: "Date" },
                { field: "Description" },
                { command: [{ name: "destroy", text: "Remove" }], title: " " }
            ],
            editable: true
        };

    }

    $onInit() {
        this.setHolidayDatesGridOptions();
    }

    $doCheck() {
    }

    $onChanges(changesObj) {
        if (changesObj.source !== undefined) {
            var sourceCurrentValue = changesObj.source.currentValue;
            var sourcePreviousValue = changesObj.source.previousValue;

            if (sourceCurrentValue !== sourcePreviousValue) {

                if (this.HolidayDatesGridOptions !== undefined) {
                    this.HolidayDatesGridOptions.dataSource.transport.read = sourceCurrentValue.data.url;
                    this.HolidayDatesGridInstance.setOptions(this.HolidayDatesGridOptions);
                }

            }
        }
    }

    public HolidayDatesGridInstance: kendo.ui.Grid;
    public HolidayDatesGridOptions: kendo.ui.GridOptions;

}

export class HolidayDatesComponent implements ng.IComponentOptions {
    templateUrl = "/app/components/holidaydates/holidaydates.component.html";
    controllerAs = "Vm";
    bindings: any;
    constructor() {
        this.bindings = {
            source: "<",
            ownerid: "<"
        };

    }
    controller = ["$http", HolidayDatesComponentController];
}