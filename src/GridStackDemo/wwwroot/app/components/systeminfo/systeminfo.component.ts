/// <reference path="../../../../typings/index.d.ts" />

export class SystemInfoComponentController   {
    public operationHoursForm: any;
    public postageForm: any;
    public ropSettingsForm: any;

    constructor() {
    }

    $onInit() {

    }
    public getOperationHoursFormData(operationHoursForm) {
        //console.log(" I am the parent");
        this.operationHoursForm = operationHoursForm;
    }

    public getPostageForm(postageForm) {
        this.postageForm = postageForm;
    }

    public getRopSettingsForm(ropSettingsForm) {
        this.ropSettingsForm = ropSettingsForm;
        console.log(ropSettingsForm);
    }
}

export class SystemInfoComponent implements ng.IComponentOptions {
    templateUrl = "/app/components/systeminfo/systeminfo.component.html";
    controllerAs = "Vm";
    controller = [SystemInfoComponentController];
}