System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var KendoLineChartComponentController, KendoLineChartComponentComponent;
    return {
        setters:[],
        execute: function() {
            /// <reference path="../../../../typings/index.d.ts" />
            class KendoLineChartComponentController {
                constructor(scope, $http) {
                    this.scope = scope;
                    this.$http = $http;
                    this.$ = angular.element;
                }
                $onInit() {
                    //There are 4 caveats in this code.
                    // 1.) 
                    this.Series = [
                        { field: 'reopenedclaims', name: 'assigned claims' },
                        { field: 'transferred', name: 'assigned claims' },
                        { field: 'assignedclaims', name: 'assigned claims' },
                        { field: 'flaggedclaims', name: 'flagged claims' },
                        { field: 'closedclaims', name: 'closed claims' },
                        { field: 'openclaims', name: 'open claims' }
                    ];
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
                    this.scope.$on("kendoRendered", () => {
                        this.MyDashBoardClaimsChartInstance.setOptions({
                            tooltip: {
                                visible: true,
                                format: "{0}%",
                                template: "#= series.name #: #= value #"
                            }
                        });
                    });
                }
            }
            class KendoLineChartComponentComponent {
                constructor() {
                    this.templateUrl = "/app/components/kendolinechart/kendolinechart.component.html";
                    this.controllerAs = "Vm";
                    this.controller = ["$scope", "$http", KendoLineChartComponentController];
                    this.bindings = {
                        key: "@",
                    };
                }
            }
            exports_1("KendoLineChartComponentComponent", KendoLineChartComponentComponent);
        }
    }
});
