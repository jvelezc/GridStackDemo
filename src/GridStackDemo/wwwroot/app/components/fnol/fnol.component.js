/// <reference path="../../../../typings/index.d.ts" />
"use strict";
var FnolComponentController = (function () {
    function FnolComponentController() {
    }
    FnolComponentController.prototype.$onInit = function () {
    };
    return FnolComponentController;
}());
exports.FnolComponentController = FnolComponentController;
var FnolComponent = (function () {
    function FnolComponent() {
        this.templateUrl = "/app/components/fnol/fnol.component.html";
        this.controllerAs = "Vm";
        this.controller = [FnolComponentController];
    }
    return FnolComponent;
}());
exports.FnolComponent = FnolComponent;
