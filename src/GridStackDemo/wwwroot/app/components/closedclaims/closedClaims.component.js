"use strict";
/// <reference path="../../../../typings/index.d.ts" />
var ClosedClaimsComponentController = (function () {
    function ClosedClaimsComponentController($http) {
        this.$http = $http;
    }
    ClosedClaimsComponentController.prototype.$onInit = function () {
    };
    return ClosedClaimsComponentController;
}());
var ClosedClaimsComponent = (function () {
    function ClosedClaimsComponent() {
        this.templateUrl = "/app/components/closedclaims/closedClaims.component.html";
        this.controllerAs = "Vm";
        this.controller = ["$http", ClosedClaimsComponentController];
        this.bindings = {
            key: "@",
        };
    }
    return ClosedClaimsComponent;
}());
exports.ClosedClaimsComponent = ClosedClaimsComponent;
