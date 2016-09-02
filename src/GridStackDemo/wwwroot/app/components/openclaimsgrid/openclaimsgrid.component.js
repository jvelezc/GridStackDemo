System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var OpenClaimsGridComponentController, OpenClaimsGridComponent;
    return {
        setters:[],
        execute: function() {
            /// <reference path="../../../../typings/index.d.ts" />
            class OpenClaimsGridComponentController {
                constructor($http) {
                    this.$http = $http;
                }
                $onInit() {
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
                }
            }
            class OpenClaimsGridComponent {
                constructor() {
                    this.templateUrl = "/app/components/openclaimsgrid/openclaimsgrid.component.html";
                    this.controllerAs = "Vm";
                    this.controller = ["$http", OpenClaimsGridComponentController];
                    this.bindings = {
                        key: "@",
                    };
                }
            }
            exports_1("OpenClaimsGridComponent", OpenClaimsGridComponent);
        }
    }
});
