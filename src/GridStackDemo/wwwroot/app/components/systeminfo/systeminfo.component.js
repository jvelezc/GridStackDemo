/// <reference path="../../../../typings/index.d.ts" />
"use strict";
var SystemInfoComponentController = (function () {
    function SystemInfoComponentController() {
    }
    SystemInfoComponentController.prototype.$onInit = function () {
    };
    SystemInfoComponentController.prototype.getOperationHoursFormData = function (operationHoursForm) {
        this.operationHoursForm = operationHoursForm;
    };
    SystemInfoComponentController.prototype.getPostageForm = function (postageForm) {
        this.postageForm = postageForm;
    };
    SystemInfoComponentController.prototype.getRopSettingsForm = function (ropSettingsForm) {
        this.ropSettingsForm = ropSettingsForm;
    };
    SystemInfoComponentController.prototype.getClaimSettingsForm = function (claimSettingsForm) {
        this.claimSettingsForm = claimSettingsForm;
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
