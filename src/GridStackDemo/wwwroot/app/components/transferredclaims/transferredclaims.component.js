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
var TransferredClaimsComponent = (function () {
    function TransferredClaimsComponent() {
        this.templateUrl = "/app/components/transferredclaims/transferredclaims.component.html";
        this.controllerAs = "Vm";
        this.controller = ["$http", OpenedClaimsComponentController];
        this.bindings = {
            key: "@"
        };
    }
    return TransferredClaimsComponent;
}());
exports.TransferredClaimsComponent = TransferredClaimsComponent;
