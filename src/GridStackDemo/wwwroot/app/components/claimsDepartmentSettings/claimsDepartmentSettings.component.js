"use strict";
/// <reference path="../../../../typings/index.d.ts" />
var ClaimSettingsConstants = (function () {
    function ClaimSettingsConstants() {
    }
    Object.defineProperty(ClaimSettingsConstants, "DEFAULT_DAYS_OF_PRIOR_CLAIM_SHOWN", {
        get: function () { return 180; },
        enumerable: true,
        configurable: true
    });
    return ClaimSettingsConstants;
}());
var ClaimsSettings = (function () {
    function ClaimsSettings() {
    }
    return ClaimsSettings;
}());
var ClaimsDepartmentSettingsComponentController = (function () {
    function ClaimsDepartmentSettingsComponentController($http) {
        this.$http = $http;
    }
    ClaimsDepartmentSettingsComponentController.prototype.$onInit = function () {
        var _this = this;
        this.claimSettingsOptions = {
            format: "#",
            decimals: 0,
            min: 0
        };
        this.claimSettings = new ClaimsSettings();
        this.previousClaimSettings = new ClaimsSettings();
        //call the Api
        this.$http.get("app/components/claimsDepartmentSettings/claimsDepartmentSettingsFakeData.json").success(function (response) {
            if (response !== undefined) {
                _this.claimSettings.eMessaging = response.eMessaging;
                _this.claimSettings.daysOfPriorClaimShown = (response.daysOfPriorClaimShown) ? response.daysOfPriorClaimShown : ClaimSettingsConstants.DEFAULT_DAYS_OF_PRIOR_CLAIM_SHOWN;
                //set the previous values
                _this.previousClaimSettings = angular.copy(_this.claimSettings);
            }
            else {
            }
        });
    };
    ClaimsDepartmentSettingsComponentController.prototype.$doCheck = function () {
        if (this.claimSettingsForm !== undefined && this.claimSettingsForm.$dirty) {
            //send the object back to the parent
            this.onChange({
                claimSettingsForm: this.claimSettings
            });
        }
    };
    ClaimsDepartmentSettingsComponentController.prototype.cancel = function () {
        //reset the fields, use angular.copy
        this.claimSettings = angular.copy(this.previousClaimSettings);
    };
    return ClaimsDepartmentSettingsComponentController;
}());
exports.ClaimsDepartmentSettingsComponentController = ClaimsDepartmentSettingsComponentController;
var ClaimsDepartmentSettingsComponent = (function () {
    function ClaimsDepartmentSettingsComponent() {
        this.templateUrl = "/app/components/claimsDepartmentSettings/claimsDepartmentSettings.component.html";
        this.controllerAs = "Vm";
        this.controller = ["$http", ClaimsDepartmentSettingsComponentController];
        this.bindings = {
            onChange: "&",
        };
    }
    return ClaimsDepartmentSettingsComponent;
}());
exports.ClaimsDepartmentSettingsComponent = ClaimsDepartmentSettingsComponent;
