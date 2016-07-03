/// <reference path="modules/slate.controller.module.ts" />
'use strict';
require('angular'); //import angular comes from the config.js located wwwroot config.js from the paths variable
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
var angular_global_1 = require('./angular.global');
require('./modules/slate.controller.module');
require('./modules/slate.directive.module');
require('./modules/slate.service.module');
require('./modules/slate.thirdpary.module');
var app = angular.module(angular_global_1.names.Modules.slate, [
    angular_global_1.names.Modules.slateServices,
    angular_global_1.names.Modules.slateDirectives,
    angular_global_1.names.Modules.slateControllers,
    angular_global_1.names.Modules.slateThirdPartyModules
]);
exports.__esModule = true;
exports["default"] = app;
