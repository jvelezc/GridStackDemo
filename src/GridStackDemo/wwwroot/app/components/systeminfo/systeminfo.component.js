"use strict";
var SystemInfoComponentController = (function () {
    function SystemInfoComponentController() {
    }
    SystemInfoComponentController.prototype.$onInit = function () {
        // defining data sources for it's child components
        this.operationHourDataSource = {
            data: {
                url: "app/components/operationhours/operationHoursFakeData.json"
            }
        };
        this.holidayDatesDataSource = {
            data: {
                url: "/app/components/holidaydates/holidayDatesFakeData.json"
            }
        };
        this.postageDataSource = {
            data: {
                url: "app/components/postage/postageFakeData.json"
            }
        };
        this.ropSetingsDataSource = {
            data: {
                url: "app/components/ropsettings/ropSettingsFakeData.json"
            }
        };
        this.claimSettingsHourDataSource = {
            data: {
                url: "app/components/claimsDepartmentSettings/claimsDepartmentSettingsFakeData.json"
            }
        };
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
