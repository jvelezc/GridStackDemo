/// <reference path="../../../../typings/index.d.ts" />

interface IHours {
    weekNum: Number;
    weekDay: string;
    startDate: Date;
    endDate: Date;
}
interface IOperationHoursComponentController {
    type: string;
    businessHours: Array<IHours>;
    afterhours: Array<IHours>;

}

class OperationHoursComponentController implements IOperationHoursComponentController {
    public type: string;
    public businessHours: Array<IHours>;
    public afterhours: Array<IHours>;

    constructor(private $http) {
    }

    $onInit() {
        this.$http.get("app/components/operationhours/operationHoursFakeData.json").success((response) => {
            this.type = response.type;
            this.businessHours = response.businessHours;
        });
    }
}

export class OperationHoursComponent implements ng.IComponentOptions {
    templateUrl = "/app/components/operationhours/operationhours.component.html";
    controllerAs = "Vm";

   // require?: string | string[] | { [controller: string]: string };
    controller = ["$http", OperationHoursComponentController];
}