/// <reference path="../../../../typings/index.d.ts" />
import {GeneralDataSource} from "../common/GeneralDataSource";

interface IHolidayDatesComponentController {
}

export class HolidayDatesComponentController implements IHolidayDatesComponentController {

    public onChange: Function;
    public source: GeneralDataSource;

    constructor(private $http: ng.IHttpService, public SweetAlert: any) {
    }

    public showDeleteAlert(e):void {
        this.SweetAlert.swal({
            title: "Hey",
            text: "Deleting something?",
            type: "warning",
            showCancelButton: false,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Ok",
            closeOnConfirm: true
        });

    }

    $onInit() {
        this.HolidayDatesGridOptions = {
            dataSource: {
                transport: {
                    read: this.source.data.url,
                    dataType: "json"
                },
                schema: {
                    model: {
                        id: "Id",
                        fields: {
                            Id: { editable: false, nullable: true },
                            Date: { type: "date" },
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
                { field: "Date", format: "{0:MM/dd/yyyy}" },
                { field: "Description" },
                { command: [{ name: "destroy", text: "Remove"}], title: " " }
            ],
            editable: true
        };
    }

    $doCheck() {
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
        };

    }
    controller = ["$http", "SweetAlert",  HolidayDatesComponentController];
}