class KendoGaugeController {
    $onInit() {
        this.RadialGaugeSelectedNumber = 10;
    }
}
export class KendoGaugeComponent {
    constructor() {
        this.templateUrl = "/app/components/kendogauge/kendogauge.component.html";
        this.controllerAs = "Vm";
        this.controller = ["$http", KendoGaugeController];
        this.bindings = {
            key: "@",
        };
    }
}
