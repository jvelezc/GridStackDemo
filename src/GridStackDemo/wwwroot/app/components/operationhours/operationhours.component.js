/// <reference path="../../../../typings/index.d.ts" />
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
        get: function () { return ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]; },
        enumerable: true,
        configurable: true
    });
    return OperationHoursConstants;
}());
var OperationHoursComponentController = (function () {
    function OperationHoursComponentController($http, $filter, SweetAlert) {
        this.$http = $http;
        this.$filter = $filter;
        this.SweetAlert = SweetAlert;
    }
    OperationHoursComponentController.prototype.$onInit = function () {
        var _this = this;
        this.$http.get("app/components/operationhours/operationHoursFakeData.json").success(function (response) {
            _this.transformResponseData(response);
            //this is going to be used when the user cancels saving the form, it will revert to its previous values
            _this.previousOperationHoursForm = _this.previousOperationHoursForm;
        });
    };
    OperationHoursComponentController.prototype.cancel = function () {
        // unimplemented
    };
    OperationHoursComponentController.prototype.$doCheck = function () {
        if (!this.areBusinessHoursDefined()) {
            //blank out the fields...
            this.operationHoursForm = null;
        }
        var operationHoursObj = this.getOperationHoursForm();
        this.onChange({
            operationHoursForm: operationHoursObj
        });
    };
    OperationHoursComponentController.prototype.transformResponseData = function (responseData) {
        var _this = this;
        if (responseData !== undefined) {
            if (responseData.type !== undefined) {
                this.type = responseData.type;
            }
            else {
                this.type = "0";
            }
            if (responseData.operationHours !== undefined && this.type == "1") {
                this.operationHoursForm = {};
                angular.forEach(responseData.operationHours, function (operationDay) {
                    var day = operationDay.weekday;
                    _this.operationHoursForm[day] = {
                        startTime: operationDay.startTime,
                        endTime: operationDay.endTime,
                        afterHourStartTime: operationDay.afterHourStartTime,
                        afterHourEndTime: operationDay.afterHouEndTime
                    };
                });
            }
        }
    };
    OperationHoursComponentController.prototype.getOperationHoursForm = function () {
        //let's transform the form to an object more consistent with the data
        if (this.operationHoursForm !== null) {
            var operationHoursObj = {
                type: this.type,
                operationHours: []
            };
            var operationHoursList = [];
            for (var i = 0; i < OperationHoursConstants.WEEKDAYS.length; i++) {
                var day = OperationHoursConstants.WEEKDAYS[i];
                if (this.operationHoursForm[day] !== undefined) {
                    operationHoursList.push({
                        weekday: day,
                        startTime: this.operationHoursForm[day].startTime,
                        endTime: this.operationHoursForm[day].endTime,
                        afterHourStartTime: this.operationHoursForm[day].afterHourStartTime,
                        afterHourEndTime: this.operationHoursForm[day].afterHourEndTime
                    });
                }
                else {
                    operationHoursList.push({
                        weekday: day,
                        startTime: null,
                        endTime: null,
                        afterHourStartTime: null,
                        afterHourEndTime: null
                    });
                }
            }
            operationHoursObj.operationHours = operationHoursList;
            return operationHoursObj;
        }
        else {
            return null;
        }
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
    OperationHoursComponentController.prototype.showAlert = function (title, text) {
        this.SweetAlert.swal({
            title: title,
            text: text,
            type: "warning",
            showCancelButton: false,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Ok",
            closeOnConfirm: true
        });
    };
    OperationHoursComponentController.prototype.updateAfterHours = function (operationDay, day, action) {
        day = day.toLowerCase();
        var isEndTime = false;
        if (action === "end") {
            isEndTime = true;
        }
        if (operationDay == null) {
            //set them to blank
            this.operationHoursForm[day].afterHourStartTime = "";
            this.operationHoursForm[day].afterHourEndTime = "";
        }
        else if (this.isBusinessHoursValid(operationDay, day)) {
            if (isEndTime) {
                this.operationHoursForm[day].afterHourStartTime = this.$filter('date')(operationDay.getTime() + OperationHoursConstants.ONE_MINUTE, OperationHoursConstants.ANGULAR_SHORT_TIME_FORMAT);
            }
            else {
                this.operationHoursForm[day].afterHourEndTime = this.$filter('date')(operationDay.getTime() - OperationHoursConstants.ONE_MINUTE, OperationHoursConstants.ANGULAR_SHORT_TIME_FORMAT);
            }
        }
        else {
            //Alert the user that it has chosen an invalid time
            var title = "System Alert";
            var text = "The Start Time cannot be after the End Time. ";
            this.showAlert(title, text);
            //reset the hours of that day
            if (isEndTime) {
                this.operationHoursForm[day].endTime = "";
            }
            else {
                this.operationHoursForm[day].startTime = "";
            }
        }
    };
    return OperationHoursComponentController;
}());
var OperationHoursComponent = (function () {
    function OperationHoursComponent() {
        this.templateUrl = "/app/components/operationhours/operationhours.component.html";
        this.controllerAs = "Vm";
        this.controller = ["$http", "$filter", "SweetAlert", OperationHoursComponentController];
        this.bindings = {
            onChange: '&',
        };
    }
    return OperationHoursComponent;
}());
exports.OperationHoursComponent = OperationHoursComponent;
