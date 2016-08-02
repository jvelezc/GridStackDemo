/// <reference path="../../typings/index.d.ts" />
System.register(["angular", "./angular.global", "./modules/slate.controller.module", "./modules/slate.directive.module", "./modules/slate.service.module", "./modules/third.party.module", "./modules/slate.component"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var angular, angular_global_1;
    var app;
    return {
        setters:[
            function (angular_1) {
                angular = angular_1;
            },
            function (angular_global_1_1) {
                angular_global_1 = angular_global_1_1;
            },
            function (_1) {},
            function (_2) {},
            function (_3) {},
            function (_4) {},
            function (_5) {}],
        execute: function() {
            app = angular.module(angular_global_1.names.Modules.slate, [
                angular_global_1.names.Modules.slateServices,
                angular_global_1.names.Modules.slateDirectives,
                angular_global_1.names.Modules.slateControllers,
                angular_global_1.names.Modules.thirdPartyModules,
                angular_global_1.names.Modules.components
            ]);
            exports_1("default",app);
            angular.element(document).ready(() => {
                angular.bootstrap(document, ["slate"]);
            });
        }
    }
});
