/// <reference path="../../../../typings/index.d.ts" />

export class SystemInfoComponentController   {
    public operationHoursForm: any;
    public postageForm: any;

    constructor() {
    }

    $onInit() {

    }
    public getOperationHoursFormData(operationHoursForm) {
        //console.log(" I am the parent");
        this.operationHoursForm = operationHoursForm;

        console.log(this.operationHoursForm);
    }

    public getPostageForm(postageForm) {
        console.log("I'm the parent");
        this.postageForm = postageForm;

        console.log(postageForm);
    }
}

export class SystemInfoComponent implements ng.IComponentOptions {
    templateUrl = "/app/components/systeminfo/systeminfo.component.html";
    controllerAs = "Vm";
    controller = [SystemInfoComponentController];
}