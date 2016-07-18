"use strict";
const angular = require("angular");
const angular_global_1 = require("../angular.global");
angular.module("third.party.modules", [
    angular_global_1.names.ModulesExternal.GRISTACKANGULAR,
    angular_global_1.names.ModulesExternal.KENDO_DIRECTIVES]);
