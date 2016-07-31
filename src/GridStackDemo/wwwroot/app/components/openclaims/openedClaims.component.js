System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var OpenedClaimsComponentController, OpenedClaimsComponent;
    return {
        setters:[],
        execute: function() {
            /// <reference path="../../../../typings/index.d.ts" />
            class OpenedClaimsComponentController {
                constructor($http) {
                    this.$http = $http;
                }
                $onInit() {
                }
            }
            class OpenedClaimsComponent {
                constructor() {
                    this.templateUrl = "/app/components/openclaims/openedClaims.component.html";
                    this.controllerAs = "Vm";
                    this.controller = ["$http", OpenedClaimsComponentController];
                    this.bindings = {
                        id: "@",
                        openClaims: "<",
                        openClaimsPercentage: "<",
                    };
                }
            }
            exports_1("OpenedClaimsComponent", OpenedClaimsComponent);
        }
    }
});
