"use strict";
const addressSection_directive_1 = require("./addressSection.directive");
const angular_global_1 = require("../../angular.global");
var app;
(function (app) {
    var directives;
    (function (directives) {
        class AddressSectionDirective {
            constructor() {
                this.restrict = 'EA';
                this.replace = true;
                this.recuire = "ngModel";
                this.controller = addressSection_directive_1.AddressSectionController;
                this.controllerAs = "vm";
                this.bindToController = true;
                this.templateUrl = "/app/directives/addressSection/addressSection.template.html";
                this.scope = {
                    addresses: "=",
                    addressTypeDataSource: "=",
                    stateDataSource: "=",
                    countyDataSource: "=",
                    countryDataSource: "=",
                    cityDataSource: "="
                };
            }
            static instance() {
                return new AddressSectionDirective;
            }
        }
        ;
        angular
            .module(angular_global_1.names.Modules.slateDirectives)
            .directive(angular_global_1.names.Directives.addressSection, AddressSectionDirective.instance);
    })(directives = app.directives || (app.directives = {}));
})(app || (app = {}));
;
