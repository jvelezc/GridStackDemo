/// <reference path="../../../../typings/index.d.ts" />
"use strict";
var OperationHoursComponentController = (function () {
    function OperationHoursComponentController($http) {
        this.$http = $http;
    }
    OperationHoursComponentController.prototype.$onInit = function () {
        var _this = this;
        this.$http.get("app/components/operationhours/operationHoursFakeData.json").success(function (response) {
            _this.type = response.type;
            _this.businessHours = response.businessHours;
        });
    };
    return OperationHoursComponentController;
}());
var OperationHoursComponent = (function () {
    function OperationHoursComponent() {
        this.templateUrl = "/app/components/operationhours/operationhours.component.html";
        this.controllerAs = "Vm";
        this.controller = ["$http", OperationHoursComponentController];
    }
    return OperationHoursComponent;
}());
exports.OperationHoursComponent = OperationHoursComponent;
