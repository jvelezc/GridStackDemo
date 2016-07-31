System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var FlaggedClaimsComponentController, FlaggedClaimsComponent;
    return {
        setters:[],
        execute: function() {
            /// <reference path="../../../../typings/index.d.ts" />
            class FlaggedClaimsComponentController {
                constructor($http) {
                    this.$http = $http;
                }
                $onInit() {
                }
            }
            class FlaggedClaimsComponent {
                constructor() {
                    this.templateUrl = "/app/components/flaggedclaims/flaggedClaims.component.html";
                    this.controllerAs = "Vm";
                    this.controller = ["$http", FlaggedClaimsComponentController];
                    this.bindings = {
                        id: "@",
                    };
                }
            }
            exports_1("FlaggedClaimsComponent", FlaggedClaimsComponent);
        }
    }
});
