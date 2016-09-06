/// <reference path="../../../../typings/index.d.ts" />
interface IHolidayDatesComponentController {
}

export class HolidayDatesComponentController implements IHolidayDatesComponentController {

    public onChange: Function;
    private sweetAlert: any;

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
                    read: "/app/components/holidaydates/holidayDatesFakeData.json",
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
                pagesize: 20,
                batch: true
            },
            sortable: true,
            navigatable: true,
            pageable: true,
            toolbar: [{ name: "create", text: "Add Date" }, "save", "cancel"],
            columns: [
                { field: "Date", format: "{0:MM/dd/yyyy}" },
                { field: "Description" },
                //{ command: [{ name: "destroy", text: "Remove", click: this.showDeleteAlert }], title: " " }
                { command: { text: "Remove", click: this.showDeleteAlert }, title: " " }
            ],
            editable: true
        };
    }

    $doCheck() {
        console.log(this.HolidayDatesGridInstance);

    }

    public HolidayDatesGridInstance: kendo.ui.Grid;
    public HolidayDatesGridOptions: kendo.ui.GridOptions;

}

export class HolidayDatesComponent implements ng.IComponentOptions {
    templateUrl = "/app/components/holidaydates/holidaydates.component.html";
    controllerAs = "Vm";
    controller = ["$http", "SweetAlert",  HolidayDatesComponentController];
}