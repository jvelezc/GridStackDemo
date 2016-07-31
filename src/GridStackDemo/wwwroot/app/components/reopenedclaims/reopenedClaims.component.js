System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ReOpenedClaimsComponentController, ReOpenedClaimsComponent;
    return {
        setters:[],
        execute: function() {
            /// <reference path="../../../../typings/index.d.ts" />
            class ReOpenedClaimsComponentController {
                constructor($http) {
                    this.$http = $http;
                }
                $onInit() {
                }
            }
            class ReOpenedClaimsComponent {
                constructor() {
                    this.templateUrl = '/app/components/reopenedclaims/reopenedClaims.component.html';
                    this.controllerAs = 'Vm';
                    this.controller = ['$http', ReOpenedClaimsComponentController];
                    this.bindings = {
                        key: "@"
                    };
                }
            }
            exports_1("ReOpenedClaimsComponent", ReOpenedClaimsComponent);
        }
    }
});
