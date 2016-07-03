"use strict";
var names;
(function (names) {
    var AngularGlobal = (function () {
        function AngularGlobal() {
        }
        AngularGlobal.$SCOPE = "$scope";
        AngularGlobal.$COOKIE_STORE = "$cookieStore";
        AngularGlobal.$ROUTE_PROVIDER = "$routeProvider";
        AngularGlobal.$STATE_PROVIDER = "$stateProvider";
        AngularGlobal.$URL_ROUTER_PROVIDER = "$urlRouterProvider";
        AngularGlobal.$LOCATION_PROVIDER = "$locationProvider";
        AngularGlobal.$LOCATION = "$location";
        AngularGlobal.$HTTP = "$http";
        return AngularGlobal;
    }());
    names.AngularGlobal = AngularGlobal;
    ;
    var NG_GLOBAL = (function () {
        function NG_GLOBAL() {
        }
        NG_GLOBAL.NG_COOKIES = "ngCookies";
        NG_GLOBAL.NG_ROUTE = "ngRoute";
        NG_GLOBAL.NG_UI_ROUTE = "ui.router";
        NG_GLOBAL.NG_SANITIZE = "ngSanitize";
        NG_GLOBAL.NG_ANIMATE = "ngAnimate";
        NG_GLOBAL.NG_MESSAGES = "ngMessages";
        return NG_GLOBAL;
    }());
    names.NG_GLOBAL = NG_GLOBAL;
    ;
    var ModulesExternal = (function () {
        function ModulesExternal() {
        }
        ModulesExternal.UI_BOOTSTRAP = "ui.bootstrap";
        ModulesExternal.KENDO_DIRECTIVES = "kendo.directives";
        ModulesExternal.ANGULAR_LADDA = "angular-ladda";
        ModulesExternal.TOASTR = "toastr";
        return ModulesExternal;
    }());
    names.ModulesExternal = ModulesExternal;
    ;
    var ServicesExternal = (function () {
        function ServicesExternal() {
        }
        ServicesExternal.uib_Modal = "$uibModal";
        return ServicesExternal;
    }());
    names.ServicesExternal = ServicesExternal;
    ;
    var Modules = (function () {
        function Modules() {
        }
        Modules.slate = "slate";
        //I wonder if we need app.directive and slate.directive i think they serve the same purpose not sure...
        Modules.slateDirectives = "slate.directives";
        Modules.slateServices = "slate.service";
        Modules.slateControllers = "slate.controller";
        Modules.slateThirdPartyModules = "slate.thirdPartyModules";
        return Modules;
    }());
    names.Modules = Modules;
    ;
    var Controllers = (function () {
        function Controllers() {
        }
        Controllers.contactController = "slate.contact.controller";
        Controllers.helpfulLinksController = "HelpfulLinksController";
        Controllers.leftNavController = "LeftNavController";
        Controllers.modalInstanceController = "ModalInstanceController";
        Controllers.dashBoardAngular = "dashBoardAngular";
        return Controllers;
    }());
    names.Controllers = Controllers;
    ;
    var Services = (function () {
        function Services() {
        }
        Services.DropDownItemsService = "slateDropDownItemsService";
        Services.ContactService = "slateContactService";
        return Services;
    }());
    names.Services = Services;
    ;
    var Directives = (function () {
        function Directives() {
        }
        Directives.grid = "slateGrid";
        Directives.dropDown = "slateDropDown";
        Directives.multiselect = "slateMultiselectDropDown";
        Directives.autocomplete = "slateAutocomplete";
        Directives.contactInformationSection = "slateContactInformationSection";
        Directives.contactTypeSection = "slateContactTypeSection";
        //public static grid = "slateGrid";
        Directives.passwordComplexity = "passwordComplexity";
        Directives.passwordRequirement = "passwordRequirement";
        Directives.checkBox = "checkBox";
        Directives.addressSection = "slateAddressSection";
        Directives.phoneSection = "slatePhoneSection";
        Directives.emailSection = "slateEmailSection";
        Directives.serviceSection = "slateServiceSection";
        return Directives;
    }());
    names.Directives = Directives;
    ;
    var Values = (function () {
        function Values() {
        }
        Values.CurrentUser = "currentUser";
        return Values;
    }());
    names.Values = Values;
    ;
})(names = exports.names || (exports.names = {}));
;
