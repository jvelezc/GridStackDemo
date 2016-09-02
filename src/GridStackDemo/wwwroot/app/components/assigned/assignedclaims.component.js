"use strict";
/// <reference path="../../../../typings/index.d.ts" />
var AssignedClaimsComponentController = (function () {
    function AssignedClaimsComponentController($http) {
        this.$http = $http;
    }
    AssignedClaimsComponentController.prototype.$onInit = function () {
    };
    AssignedClaimsComponentController.prototype.$onChanges = function (changeObj) {
        console.log(changeObj);
    };
    AssignedClaimsComponentController.prototype.OnChange = function (time) {
        console.log("time changed");
        console.log(time);
    };
    return AssignedClaimsComponentController;
}());
var AssignedClaimsComponent = (function () {
    function AssignedClaimsComponent() {
        this.templateUrl = "/app/components/assigned/assignedclaims.component.html";
        this.controllerAs = "Vm";
        this.controller = ["$http", AssignedClaimsComponentController];
        this.bindings = {
            key: "@",
            time: "="
        };
    }
    return AssignedClaimsComponent;
}());
exports.AssignedClaimsComponent = AssignedClaimsComponent;
