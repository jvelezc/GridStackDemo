"use strict";
var ROPSettings = (function () {
    function ROPSettings() {
    }
    return ROPSettings;
}());
var ROPSettingsComponentController = (function () {
    function ROPSettingsComponentController($http) {
        this.$http = $http;
    }
    ROPSettingsComponentController.prototype.$onInit = function () {
        var _this = this;
        this.ropSettingsOptions = {
            format: "#",
            max: 50,
            min: 0,
            decimals: 0
        };
        //call API to retrieve the data as well...
        this.$http.get("app/components/ropsettings/ropSettingsFakeData.json").success(function (response) {
            if (response !== undefined) {
                _this.ropSettings = new ROPSettings();
                _this.ropSettings.daysOfHistoryShown = response.daysOfHistoryShown;
                //save previous value
                _this.previousRopSettings = new ROPSettings();
                _this.previousRopSettings = angular.copy(_this.ropSettings);
            }
            else {
            }
        });
    };
    ROPSettingsComponentController.prototype.$doCheck = function () {
        if (this.ropSettingsForm !== undefined && this.ropSettingsForm.$dirty) {
            //send the object back to the parent
            this.onChange({
                ropSettingsForm: this.ropSettings
            });
        }
    };
    ROPSettingsComponentController.prototype.cancel = function () {
        //reset the fields, use angular.copy
        this.ropSettings = angular.copy(this.previousRopSettings);
    };
    return ROPSettingsComponentController;
}());
exports.ROPSettingsComponentController = ROPSettingsComponentController;
var ROPSettingsComponent = (function () {
    function ROPSettingsComponent() {
        this.templateUrl = "/app/components/ropsettings/ropsettings.component.html";
        this.controllerAs = "Vm";
        this.controller = ["$http", ROPSettingsComponentController];
        this.bindings = {
            onChange: "&",
            source: "<",
        };
    }
    return ROPSettingsComponent;
}());
exports.ROPSettingsComponent = ROPSettingsComponent;
