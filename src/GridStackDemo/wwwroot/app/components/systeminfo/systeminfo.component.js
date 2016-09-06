/// <reference path="../../../../typings/index.d.ts" />
"use strict";
var SystemInfoComponentController = (function () {
    function SystemInfoComponentController() {
    }
    SystemInfoComponentController.prototype.$onInit = function () {
    };
    SystemInfoComponentController.prototype.getOperationHoursFormData = function (operationHoursForm) {
        //console.log(" I am the parent");
        this.operationHoursForm = operationHoursForm;
        console.log(this.operationHoursForm);
    };
    SystemInfoComponentController.prototype.getPostageForm = function (postageForm) {
        console.log("I'm the parent");
        this.postageForm = postageForm;
        console.log(postageForm);
    };
    return SystemInfoComponentController;
}());
exports.SystemInfoComponentController = SystemInfoComponentController;
var SystemInfoComponent = (function () {
    function SystemInfoComponent() {
        this.templateUrl = "/app/components/systeminfo/systeminfo.component.html";
        this.controllerAs = "Vm";
        this.controller = [SystemInfoComponentController];
    }
    return SystemInfoComponent;
}());
exports.SystemInfoComponent = SystemInfoComponent;
