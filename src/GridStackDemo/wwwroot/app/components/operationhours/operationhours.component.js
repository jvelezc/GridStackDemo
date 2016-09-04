"use strict";
var OperationHoursConstants = (function () {
    function OperationHoursConstants() {
    }
    Object.defineProperty(OperationHoursConstants, "ONE_MINUTE", {
        get: function () { return 60000; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OperationHoursConstants, "ANGULAR_SHORT_TIME_FORMAT", {
        //equivalent of HH:MM a
        get: function () { return "shortTime"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OperationHoursConstants, "WEEKDAYS", {
        get: function () { return ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]; },
        enumerable: true,
        configurable: true
    });
    return OperationHoursConstants;
}());
var OperationHoursComponentController = (function () {
    function OperationHoursComponentController($http, $filter) {
        this.$http = $http;
        this.$filter = $filter;
        this.businessHours = [];
        this.afterhours = [];
        this.operationHoursForm = {};
    }
    OperationHoursComponentController.prototype.$onInit = function () {
        var _this = this;
        this.$http.get("app/components/operationhours/operationHoursFakeData.json").success(function (response) {
            _this.type = response.type;
            _this.businessHours = response.operationHours;
        });
    };
    OperationHoursComponentController.prototype.cancel = function () {
    };
    OperationHoursComponentController.prototype.$doCheck = function () {
        if (!this.areBusinessHoursDefined()) {
            //blank out the fields...
            this.operationHoursForm = null;
        }
        this.onChange({
            operationHoursForm: this.operationHoursForm
        });
    };
    OperationHoursComponentController.prototype.areBusinessHoursDefined = function () {
        return this.type == "1";
    };
    OperationHoursComponentController.prototype.isBusinessHoursValid = function (operationDay, day) {
        var isValid = false;
        if (operationDay === null || this.operationHoursForm[day].startTimeObj === undefined || this.operationHoursForm[day].endTimeObj === undefined) {
            return true;
        }
        if (operationDay !== null && this.operationHoursForm[day].startTimeObj.getTime() < this.operationHoursForm[day].endTimeObj.getTime()) {
            isValid = true;
        }
        return isValid;
    };
    OperationHoursComponentController.prototype.updateAfterHours = function (operationDay, day, action) {
        day = day.toLowerCase();
        if (operationDay == null) {
            //set them to blank
            this.operationHoursForm[day].afterHourStartTime = "";
            this.operationHoursForm[day].afterHourEndTime = "";
        }
        else if (this.isBusinessHoursValid(operationDay, day)) {
            if (action == 'end') {
                this.operationHoursForm[day].afterHourStartTime = this.$filter('date')(operationDay.getTime() + OperationHoursConstants.ONE_MINUTE, OperationHoursConstants.ANGULAR_SHORT_TIME_FORMAT);
            }
            else {
                this.operationHoursForm[day].afterHourEndTime = this.$filter('date')(operationDay.getTime() - OperationHoursConstants.ONE_MINUTE, OperationHoursConstants.ANGULAR_SHORT_TIME_FORMAT);
            }
        }
        else {
            console.log("Start Time cannot be after End Time");
        }
    };
    return OperationHoursComponentController;
}());
var OperationHoursComponent = (function () {
    function OperationHoursComponent() {
        this.templateUrl = "/app/components/operationhours/operationhours.component.html";
        this.controllerAs = "Vm";
        this.controller = ["$http", "$filter", OperationHoursComponentController];
        this.bindings = {
            onChange: '&',
        };
    }
    return OperationHoursComponent;
}());
exports.OperationHoursComponent = OperationHoursComponent;
