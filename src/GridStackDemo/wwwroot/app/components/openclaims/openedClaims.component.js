"use strict";
/// <reference path="../../../../typings/index.d.ts" />
var OpenedClaimsComponentController = (function () {
    function OpenedClaimsComponentController($http) {
        this.$http = $http;
    }
    OpenedClaimsComponentController.prototype.$onInit = function () {
    };
    return OpenedClaimsComponentController;
}());
var OpenedClaimsComponent = (function () {
    function OpenedClaimsComponent() {
        this.templateUrl = "/app/components/openclaims/openedClaims.component.html";
        this.controllerAs = "Vm";
        this.controller = ["$http", OpenedClaimsComponentController];
        this.bindings = {
            key: "@",
        };
    }
    return OpenedClaimsComponent;
}());
exports.OpenedClaimsComponent = OpenedClaimsComponent;
