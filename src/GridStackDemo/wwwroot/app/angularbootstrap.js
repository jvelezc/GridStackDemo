/// <reference path="../../typings/index.d.ts" />
"use strict";
const angular = require("angular");
const angular_global_1 = require("./angular.global");
require("./modules/slate.controller.module");
require("./modules/slate.directive.module");
require("./modules/slate.service.module");
require("./modules/third.party.module");
require("./modules/slate.component");
var app = angular.module(angular_global_1.names.Modules.slate, [
    angular_global_1.names.Modules.slateServices,
    angular_global_1.names.Modules.slateDirectives,
    angular_global_1.names.Modules.slateControllers,
    angular_global_1.names.Modules.thirdPartyModules,
    angular_global_1.names.Modules.components
]);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = app;
angular.element(document).ready(() => {
    angular.bootstrap(document, ["slate"]);
});
