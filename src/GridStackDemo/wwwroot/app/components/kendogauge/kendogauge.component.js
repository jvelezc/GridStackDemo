"use strict";
var KendoGaugeController = (function () {
    function KendoGaugeController() {
    }
    KendoGaugeController.prototype.$onInit = function () {
        this.RadialGaugeSelectedNumber = 10;
    };
    return KendoGaugeController;
}());
var KendoGaugeComponent = (function () {
    function KendoGaugeComponent() {
        this.templateUrl = "/app/components/kendogauge/kendogauge.component.html";
        this.controllerAs = "Vm";
        this.controller = ["$http", KendoGaugeController];
        this.bindings = {
            key: "@",
        };
    }
    return KendoGaugeComponent;
}());
exports.KendoGaugeComponent = KendoGaugeComponent;
