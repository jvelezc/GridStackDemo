System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var KendoLineChartComponentController, KendoLineChartComponentComponent;
    return {
        setters:[],
        execute: function() {
            /// <reference path="../../../../typings/index.d.ts" />
            class KendoLineChartComponentController {
                constructor($http) {
                    this.$http = $http;
                }
                $onInit() {
                    this.ClaimsData = new kendo.data.DataSource({
                        transport: {
                            read: {
                                url: "/app/components/kendolinechart/GraphFakeData.json",
                                dataType: "json"
                            }
                        },
                        sort: {
                            field: "year",
                            dir: "asc"
                        }
                    });
                }
            }
            class KendoLineChartComponentComponent {
                constructor() {
                    this.templateUrl = "/app/components/kendolinechart/kendolinechart.component.html";
                    this.controllerAs = "Vm";
                    this.controller = ["$http", KendoLineChartComponentController];
                    this.bindings = {
                        key: "@",
                    };
                }
            }
            exports_1("KendoLineChartComponentComponent", KendoLineChartComponentComponent);
        }
    }
});
