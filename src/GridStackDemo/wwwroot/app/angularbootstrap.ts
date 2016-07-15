/// <reference path="../../typings/index.d.ts" />

/*
That is,
paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*",
    "angular":"/lib/angular/angular.js" //This one
  },
*/
// the rest of the imports are easy to figure out by just following the relatives paths. 
// the paths with import actually refer to physical paths and not angular module names
import {names} from "./angular.global";
import "./modules/slate.controller.module";
import "./modules/slate.directive.module";
import "./modules/slate.service.module";
import "./modules/third.party.module";
var app: ng.IModule = angular.module(names.Modules.slate,
        [
            names.Modules.slateServices,
            names.Modules.slateDirectives,
            names.Modules.slateControllers,
            names.Modules.thirdPartyModules
     
        ]);

export default app;


angular.element(document).ready(() => {
    angular.bootstrap(document, ["slate"]);
});