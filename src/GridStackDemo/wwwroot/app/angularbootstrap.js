/// <reference path="modules/slate.controller.module.ts" />
'use strict';
require('angular');
var angular_global_1 = require('./angular.global');
require('./modules/slate.controller.module');
require('./modules/slate.directive.module');
require('./modules/slate.service.module');
'use strict';
var app = angular.module(angular_global_1.names.Modules.slate, [
    angular_global_1.names.Modules.slateServices,
    angular_global_1.names.Modules.slateDirectives,
    angular_global_1.names.Modules.slateControllers,
]);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = app;
