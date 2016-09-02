"use strict";
/// <reference path="../../../../typings/index.d.ts" />
var ReOpenedClaimsComponentController = (function () {
    function ReOpenedClaimsComponentController($http) {
        this.$http = $http;
    }
    ReOpenedClaimsComponentController.prototype.$onInit = function () {
    };
    return ReOpenedClaimsComponentController;
}());
var ReOpenedClaimsComponent = (function () {
    function ReOpenedClaimsComponent() {
        this.templateUrl = '/app/components/reopenedclaims/reopenedClaims.component.html';
        this.controllerAs = 'Vm';
        this.controller = ['$http', ReOpenedClaimsComponentController];
        this.bindings = {
            key: "@"
        };
    }
    return ReOpenedClaimsComponent;
}());
exports.ReOpenedClaimsComponent = ReOpenedClaimsComponent;
