"use strict";
/// <reference path="../../../../typings/index.d.ts" />
var ClaimProgressComponentController = (function () {
    function ClaimProgressComponentController($http) {
        this.$http = $http;
        this.value = "0%";
    }
    ClaimProgressComponentController.prototype.$onInit = function () {
        var _this = this;
        this.$http.get("app/components/claimsprogress/fakeprogress.json").success(function (response) {
            _this.value = response.ClaimsProgress;
        });
        this.intervalId = setInterval(function () {
            _this.$http.get("app/components/claimsprogress/fakeprogress.json").success(function (response) {
                _this.value = response.ClaimsProgress;
                _this.IsTracking();
            });
        }, 3000);
    };
    ClaimProgressComponentController.prototype.IsTracking = function () {
        if (this.value === "100%") {
            clearInterval(this.intervalId);
        }
    };
    return ClaimProgressComponentController;
}());
var ClaimProgressComponent = (function () {
    function ClaimProgressComponent() {
        this.templateUrl = "/app/components/claimsprogress/claimprogress.component.html";
        this.controllerAs = "Vm";
        this.controller = ["$http", ClaimProgressComponentController];
        //No configurations needed so far. 
        this.bindings = {};
    }
    return ClaimProgressComponent;
}());
exports.ClaimProgressComponent = ClaimProgressComponent;
