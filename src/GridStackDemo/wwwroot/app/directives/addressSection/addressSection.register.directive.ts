
import {AddressSectionController} from "./addressSection.directive";
import {names} from "../../angular.global";
module app.directives {

    class AddressSectionDirective implements ng.IDirective {
        static instance(): ng.IDirective {
            return new AddressSectionDirective;
        }

        public restrict: string = 'EA';
        public replace: boolean = true;
        public recuire: string = "ngModel";
        public controller: any = AddressSectionController;
        public controllerAs: string = "vm";
        public bindToController: boolean = true;
        public templateUrl: string = "/app/directives/addressSection/addressSection.template.html";
        public scope: any = {
            addresses: "=",
            addressTypeDataSource: "=",
            stateDataSource: "=",
            countyDataSource: "=",
            countryDataSource: "=",
            cityDataSource: "="
        };
    };

    angular
        .module(names.Modules.slateDirectives)
        .directive(names.Directives.addressSection, AddressSectionDirective.instance);
};