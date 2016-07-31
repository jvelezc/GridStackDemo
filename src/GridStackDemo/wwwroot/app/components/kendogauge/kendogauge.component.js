System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var KendoGaugeController, KendoGaugeComponent;
    return {
        setters:[],
        execute: function() {
            class KendoGaugeController {
                $onInit() {
                    this.RadialGaugeSelectedNumber = 10;
                }
            }
            class KendoGaugeComponent {
                constructor() {
                    this.templateUrl = "/app/components/kendogauge/kendogauge.component.html";
                    this.controllerAs = "Vm";
                    this.controller = ["$http", KendoGaugeController];
                    this.bindings = {
                        id: "@",
                    };
                }
            }
            exports_1("KendoGaugeComponent", KendoGaugeComponent);
        }
    }
});
