'use strict'
//import  'angular' //import angular comes from the config.js located wwwroot config.js from the paths variable
/*
That is,
paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*",
    "angular":"/lib/angular/angular.js" //This one
  },
*/
//The rest of the imports are easy to figure out by just following the relatives paths. 
//the paths with import actually refer to physical paths and not angular module names
import {names} from './angular.global';
import './modules/slate.controller.module'
import './modules/slate.directive.module'
import './modules/slate.service.module'
   var app =  angular.module(names.Modules.slate,
        [
            names.Modules.slateServices,
            names.Modules.slateDirectives,
            names.Modules.slateControllers,
       
            names.ModulesExternal.GRISTACKANGULAR,
            "kendo.directives",
           // names.Modules.slateThirdPartyModules,
          //  "gridstack-angular"
        ]);

   export default app;