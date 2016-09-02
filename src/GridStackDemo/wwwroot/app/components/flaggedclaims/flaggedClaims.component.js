"use strict";
/// <reference path="../../../../typings/index.d.ts" />
var FlaggedClaimsComponentController = (function () {
    function FlaggedClaimsComponentController($http) {
        this.$http = $http;
    }
    FlaggedClaimsComponentController.prototype.$onInit = function () {
    };
    FlaggedClaimsComponentController.prototype.$onChanges = function (changeObj) {
        console.log(changeObj);
        console.log("any changes");
    };
    return FlaggedClaimsComponentController;
}());
var FlaggedClaimsComponent = (function () {
    function FlaggedClaimsComponent() {
        this.templateUrl = "/app/components/flaggedclaims/flaggedClaims.component.html";
        this.controllerAs = "Vm";
        this.controller = ["$http", FlaggedClaimsComponentController];
        this.bindings = {
            key: "@",
        };
    }
    return FlaggedClaimsComponent;
}());
exports.FlaggedClaimsComponent = FlaggedClaimsComponent;
