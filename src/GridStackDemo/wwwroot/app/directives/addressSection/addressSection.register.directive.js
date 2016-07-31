import { AddressSectionController } from "./addressSection.directive";
import { names } from "../../angular.global";
var app;
(function (app) {
    var directives;
    (function (directives) {
        class AddressSectionDirective {
            constructor() {
                this.restrict = 'EA';
                this.replace = true;
                this.recuire = "ngModel";
                this.controller = AddressSectionController;
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
            .module(names.Modules.slateDirectives)
            .directive(names.Directives.addressSection, AddressSectionDirective.instance);
    })(directives = app.directives || (app.directives = {}));
})(app || (app = {}));
;
