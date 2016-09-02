"use strict";
/// <reference path="../../../../typings/index.d.ts" />
var KendoLineChartComponentController = (function () {
    function KendoLineChartComponentController(scope, $http) {
        this.scope = scope;
        this.$http = $http;
        this.$ = angular.element;
    }
    KendoLineChartComponentController.prototype.$onInit = function () {
        var _this = this;
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
        this.scope.$on("kendoRendered", function () {
            _this.MyDashBoardClaimsChartInstance.setOptions({
                tooltip: {
                    visible: true,
                    format: "{0}%",
                    template: "#= series.name #: #= value #"
                }
            });
        });
    };
    return KendoLineChartComponentController;
}());
var KendoLineChartComponentComponent = (function () {
    function KendoLineChartComponentComponent() {
        this.templateUrl = "/app/components/kendolinechart/kendolinechart.component.html";
        this.controllerAs = "Vm";
        this.controller = ["$scope", "$http", KendoLineChartComponentController];
        this.bindings = {
            key: "@",
        };
    }
    return KendoLineChartComponentComponent;
}());
exports.KendoLineChartComponentComponent = KendoLineChartComponentComponent;
