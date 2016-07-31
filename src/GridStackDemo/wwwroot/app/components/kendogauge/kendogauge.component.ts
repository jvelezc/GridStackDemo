interface IKendoGaugeComponent extends ng.IComponentController {
}

class KendoGaugeController implements IKendoGaugeComponent {
    public RadialGaugeSelectedNumber: number;
    public RadialGaugeInstance: kendo.dataviz.ui.RadialGauge;
    
    $onInit() {
        this.RadialGaugeSelectedNumber = 10; 
    }
}
export class KendoGaugeComponent implements ng.IComponentOptions
{
    templateUrl = "/app/components/kendogauge/kendogauge.component.html";
    controllerAs = "Vm";
    bindings: any;
    constructor() {
        this.bindings = {
            id: "@",
        };
    }
    controller = ["$http", KendoGaugeController];
}