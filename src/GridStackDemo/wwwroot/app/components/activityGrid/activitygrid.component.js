/// <reference path="../../../../typings/index.d.ts" />
class ActivityGridComponentController {
    constructor($http) {
        this.$http = $http;
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
        };
    }
}
export class ActivityGridComponent {
    constructor() {
        this.templateUrl = "/app/components/activitygrid/activitygrid.component.html";
        this.controllerAs = "Vm";
        this.controller = ["$http", ActivityGridComponentController];
        this.bindings = {
            key: "@",
        };
    }
}
