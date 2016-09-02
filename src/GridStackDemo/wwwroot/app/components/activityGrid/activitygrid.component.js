"use strict";
/// <reference path="../../../../typings/index.d.ts" />
var ActivityGridComponentController = (function () {
    function ActivityGridComponentController($http) {
        this.$http = $http;
    }
    ActivityGridComponentController.prototype.$onInit = function () {
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
    };
    return ActivityGridComponentController;
}());
var ActivityGridComponent = (function () {
    function ActivityGridComponent() {
        this.templateUrl = "/app/components/activitygrid/activitygrid.component.html";
        this.controllerAs = "Vm";
        this.controller = ["$http", ActivityGridComponentController];
        this.bindings = {
            key: "@",
        };
    }
    return ActivityGridComponent;
}());
exports.ActivityGridComponent = ActivityGridComponent;
