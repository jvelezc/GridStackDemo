/// <reference path="../../../../typings/index.d.ts" />

export class SystemInfoComponentController   {
    public operationHoursForm: any;
    constructor() {
    }

    $onInit() {

    }
    public getOperationHoursFormData(operationHoursForm)
    {
        console.log(" I am the parent");
        this.operationHoursForm = operationHoursForm;

        console.log(this.operationHoursForm);
    }
}

export class SystemInfoComponent implements ng.IComponentOptions {
    templateUrl = "/app/components/systeminfo/systeminfo.component.html";
    controllerAs = "Vm";
    controller = [SystemInfoComponentController];
}