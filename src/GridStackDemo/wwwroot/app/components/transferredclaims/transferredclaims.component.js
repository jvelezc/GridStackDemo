System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var OpenedClaimsComponentController, TransferredClaimsComponent;
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
            class TransferredClaimsComponent {
                constructor() {
                    this.templateUrl = "/app/components/transferredclaims/transferredclaims.component.html";
                    this.controllerAs = "Vm";
                    this.controller = ["$http", OpenedClaimsComponentController];
                    this.bindings = {
                        key: "@"
                    };
                }
            }
            exports_1("TransferredClaimsComponent", TransferredClaimsComponent);
        }
    }
});
