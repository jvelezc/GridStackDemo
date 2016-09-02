"use strict";
/// <reference path="../../../../typings/index.d.ts" />
var OpenClaimsGridComponentController = (function () {
    function OpenClaimsGridComponentController($http) {
        this.$http = $http;
    }
    OpenClaimsGridComponentController.prototype.$onInit = function () {
        this.ClaimsGridOptions = {
            dataSource: {
                transport: {
                    read: "/app/components/openclaimsgrid/openClaimsGridFakeData.json",
                    dataType: "json"
                },
                schema: {
                    model: {
                        fields: {
                            Claim: { type: "string" },
                            Subject: { type: "string" },
                            Insured: { type: "string" },
                            DateOpened: { type: "date" },
                        }
                    }
                },
                pagesize: 20
            },
            sortable: true,
            columns: [
                { field: "Claim" },
                { field: "Subject" },
                { field: "Insured" },
                { field: "DateOpened", format: "{0:MM-dd-yyyy}" },
            ]
        };
    };
    return OpenClaimsGridComponentController;
}());
var OpenClaimsGridComponent = (function () {
    function OpenClaimsGridComponent() {
        this.templateUrl = "/app/components/openclaimsgrid/openclaimsgrid.component.html";
        this.controllerAs = "Vm";
        this.controller = ["$http", OpenClaimsGridComponentController];
        this.bindings = {
            key: "@",
        };
    }
    return OpenClaimsGridComponent;
}());
exports.OpenClaimsGridComponent = OpenClaimsGridComponent;
