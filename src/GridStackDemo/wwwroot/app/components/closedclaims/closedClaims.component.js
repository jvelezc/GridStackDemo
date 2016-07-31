System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ClosedClaimsComponentController, ClosedClaimsComponent;
    return {
        setters:[],
        execute: function() {
            /// <reference path="../../../../typings/index.d.ts" />
            class ClosedClaimsComponentController {
                constructor($http) {
                    this.$http = $http;
                }
                $onInit() {
                }
            }
            class ClosedClaimsComponent {
                constructor() {
                    this.templateUrl = "/app/components/closedclaims/closedClaims.component.html";
                    this.controllerAs = "Vm";
                    this.controller = ["$http", ClosedClaimsComponentController];
                }
            }
            exports_1("ClosedClaimsComponent", ClosedClaimsComponent);
        }
    }
});
