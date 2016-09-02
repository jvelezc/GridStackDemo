"use strict";
var ServerViewModel = (function () {
    function ServerViewModel() {
    }
    return ServerViewModel;
}());
var ServerStatusComponentController = (function () {
    function ServerStatusComponentController($http) {
        this.$http = $http;
    }
    ServerStatusComponentController.prototype.$onInit = function () {
        var _this = this;
        this.$http.get("app/components/serverstatus/fakeserverstatus.json")
            .success(function (response) {
            _this.DaysAgo = response.DaysAgo;
            _this.StatusType = response.StatusType;
        });
        this.IntervalId = setInterval(function () {
            _this.somefunction();
        }, 3000);
    };
    ServerStatusComponentController.prototype.somefunction = function () {
        var _this = this;
        this.$http.get("app/components/serverstatus/fakeserverstatus.json").success(function (response) {
            _this.DaysAgo = response.DaysAgo;
            _this.StatusType = response.StatusType;
        });
    };
    return ServerStatusComponentController;
}());
var ServerStatusComponent = (function () {
    function ServerStatusComponent() {
        this.templateUrl = "/app/components/serverstatus/serverstatus.component.html";
        this.controllerAs = "Vm";
        this.controller = ["$http", ServerStatusComponentController];
        this.bindings = {};
    }
    return ServerStatusComponent;
}());
exports.ServerStatusComponent = ServerStatusComponent;
