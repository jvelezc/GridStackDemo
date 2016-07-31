/// <reference path="../../../../typings/index.d.ts" />
interface IActivityGridComponentController {
}

class ActivityGridComponentController implements IActivityGridComponentController {
    constructor(private $http) {
    }
    $onInit() {
        this.ActivityGridOptions = {
            dataSource: {
                transport: {
                    read: "/app/components/activityGrid/activityGridFakeData.json",
                    dataType: "json"
                },
                schema: {
                    model: {
                        fields: {
                            ClaimNumber: { type: "string" },
                            Subject: { type: "string" },
                            Priority: { type: "string" },
                            Due: { type: "date" },
                        }
                    }
                },
                pagesize: 20
            },
            sortable: true,
            columns: [
                { field: "ClaimNumber" },
                { field: "Subject" },
                { field: "Priority" },
                { field: "Due", format: "{0:MM-dd-yyyy}" },
            ]
        }
    }
    public ActivityGridInstance: kendo.ui.Grid;
    public ActivityGridOptions: kendo.ui.GridOptions;


}


export class ActivityGridComponent implements ng.IComponentOptions {
    templateUrl = "/app/components/activitygrid/activitygrid.component.html";
    controllerAs = "Vm";
    bindings;
    constructor() {
        this.bindings = {
            key: "@",
        };
    }
    controller = ["$http", ActivityGridComponentController];
}