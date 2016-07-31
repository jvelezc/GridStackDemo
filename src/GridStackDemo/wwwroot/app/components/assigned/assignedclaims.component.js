System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var AssignedClaimsComponentController, AssignedClaimsComponent;
    return {
        setters:[],
        execute: function() {
            /// <reference path="../../../../typings/index.d.ts" />
            class AssignedClaimsComponentController {
                constructor($http) {
                    this.$http = $http;
                }
                $onInit() {
                }
            }
            class AssignedClaimsComponent {
                constructor() {
                    this.templateUrl = "/app/components/assigned/assignedclaims.component.html";
                    this.controllerAs = "Vm";
                    this.controller = ["$http", AssignedClaimsComponentController];
                    this.bindings = {
                        key: "@",
                    };
                }
            }
            exports_1("AssignedClaimsComponent", AssignedClaimsComponent);
        }
    }
});
