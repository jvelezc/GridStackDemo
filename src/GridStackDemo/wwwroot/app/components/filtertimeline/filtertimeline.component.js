"use strict";
/// <reference path="../../../../typings/index.d.ts" />
var FilterTimelineComponentController = (function () {
    function FilterTimelineComponentController($http) {
        this.$http = $http;
    }
    FilterTimelineComponentController.prototype.$onInit = function () {
    };
    return FilterTimelineComponentController;
}());
var FilterTimelineComponent = (function () {
    function FilterTimelineComponent() {
        this.templateUrl = "/app/components/filtertimeline/filtertimeline.component.html";
        this.controllerAs = "Vm";
        this.controller = ["$http", FilterTimelineComponent];
        this.bindings = {
            key: "@",
        };
    }
    return FilterTimelineComponent;
}());
exports.FilterTimelineComponent = FilterTimelineComponent;
