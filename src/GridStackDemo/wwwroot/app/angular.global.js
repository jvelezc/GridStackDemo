"use strict";
var names;
(function (names) {
    class AngularGlobal {
    }
    AngularGlobal.$SCOPE = "$scope";
    AngularGlobal.$COOKIE_STORE = "$cookieStore";
    AngularGlobal.$ROUTE_PROVIDER = "$routeProvider";
    AngularGlobal.$STATE_PROVIDER = "$stateProvider";
    AngularGlobal.$URL_ROUTER_PROVIDER = "$urlRouterProvider";
    AngularGlobal.$LOCATION_PROVIDER = "$locationProvider";
    AngularGlobal.$LOCATION = "$location";
    AngularGlobal.$HTTP = "$http";
    names.AngularGlobal = AngularGlobal;
    ;
    class NG_GLOBAL {
    }
    NG_GLOBAL.NG_COOKIES = "ngCookies";
    NG_GLOBAL.NG_ROUTE = "ngRoute";
    NG_GLOBAL.NG_UI_ROUTE = "ui.router";
    NG_GLOBAL.NG_SANITIZE = "ngSanitize";
    NG_GLOBAL.NG_ANIMATE = "ngAnimate";
    NG_GLOBAL.NG_MESSAGES = "ngMessages";
    names.NG_GLOBAL = NG_GLOBAL;
    ;
    class ModulesExternal {
    }
    ModulesExternal.UI_BOOTSTRAP = "ui.bootstrap";
    ModulesExternal.KENDO_DIRECTIVES = "kendo.directives";
    ModulesExternal.ANGULAR_LADDA = "angular-ladda";
    ModulesExternal.TOASTR = "toastr";
    ModulesExternal.GRISTACKANGULAR = "gridstack-angular";
    names.ModulesExternal = ModulesExternal;
    ;
    class ServicesExternal {
    }
    ServicesExternal.uib_Modal = "$uibModal";
    names.ServicesExternal = ServicesExternal;
    ;
    class Modules {
    }
    Modules.slate = "slate";
    //I wonder if we need app.directive and slate.directive i think they serve the same purpose not sure...
    Modules.slateDirectives = "slate.directives";
    Modules.slateServices = "slate.service";
    Modules.slateControllers = "slate.controller";
    Modules.slateThirdPartyModules = "slate.thirdPartyModules";
    Modules.thirdPartyModules = "third.party.modules";
    Modules.components = "slate.components";
    names.Modules = Modules;
    ;
    class Components {
    }
    //<opened-Claims-Panel></open-Claims-Panel>
    Components.reOpenedClaimsPanel = "reOpenedClaimsPanel";
    Components.openClaimsPanel = "openedClaimsPanel";
    Components.closedClaimsPanel = "closedClaimsPanel";
    names.Components = Components;
    class Controllers {
    }
    Controllers.contactController = "slate.contact.controller";
    Controllers.helpfulLinksController = "HelpfulLinksController";
    Controllers.leftNavController = "LeftNavController";
    Controllers.modalInstanceController = "ModalInstanceController";
    Controllers.dashBoardAngular = "dashBoardAngular";
    names.Controllers = Controllers;
    ;
    class Services {
    }
    Services.DropDownItemsService = "slateDropDownItemsService";
    Services.ContactService = "slateContactService";
    names.Services = Services;
    ;
    class Directives {
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
    names.Directives = Directives;
    ;
    class Values {
    }
    Values.CurrentUser = "currentUser";
    names.Values = Values;
    ;
})(names = exports.names || (exports.names = {}));
;
