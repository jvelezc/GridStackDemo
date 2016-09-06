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
    };
    SystemInfoComponentController.prototype.getPostageForm = function (postageForm) {
        this.postageForm = postageForm;
    };
    SystemInfoComponentController.prototype.getRopSettingsForm = function (ropSettingsForm) {
        this.ropSettingsForm = ropSettingsForm;
        console.log(ropSettingsForm);
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
