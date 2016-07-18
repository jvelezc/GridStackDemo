/// <reference path="../../typings/index.d.ts" />

import * as angular from "angular";
import {names} from "./angular.global";
import "./modules/slate.controller.module";
import "./modules/slate.directive.module";
import "./modules/slate.service.module";
import "./modules/third.party.module";
import "./modules/slate.component";
var app: ng.IModule = angular.module(names.Modules.slate,
        [
            names.Modules.slateServices,
            names.Modules.slateDirectives,
            names.Modules.slateControllers,
            names.Modules.thirdPartyModules,
            names.Modules.components
     
        ]);

export default app;


angular.element(document).ready(() => {
    angular.bootstrap(document, ["slate"]);
});