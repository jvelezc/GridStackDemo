/// <reference path="../../../../typings/index.d.ts" />
System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var OperationHoursComponentController, OperationHoursComponent;
    return {
        setters:[],
        execute: function() {
            class OperationHoursComponentController {
                constructor($http) {
                    this.$http = $http;
                }
                $onInit() {
                    this.$http.get("app/components/operationhours/operationHoursFakeData.json").success((response) => {
                        this.type = response.type;
                        this.businessHours = response.businessHours;
                    });
                }
            }
            class OperationHoursComponent {
                constructor() {
                    this.templateUrl = "/app/components/operationhours/operationhours.component.html";
                    this.controllerAs = "Vm";
                    // require?: string | string[] | { [controller: string]: string };
                    this.controller = ["$http", OperationHoursComponentController];
                }
            }
            exports_1("OperationHoursComponent", OperationHoursComponent);
        }
    }
});
