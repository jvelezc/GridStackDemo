/// <reference path="../../../typings/index.d.ts" />
import { names } from "../angular.global";
angular.module("third.party.modules", [
    names.ModulesExternal.GRISTACKANGULAR,
    names.ModulesExternal.KENDO_DIRECTIVES,
    names.ModulesExternal.SWEETALERT,
    names.ModulesExternal.ANGULAR_WIZARD
]);
