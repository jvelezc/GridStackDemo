/// <reference path="../../../../typings/index.d.ts" />

export class SystemInfoComponentController {

    //operation tab
    public operationHoursForm: any;
    public postageForm: any;
    public ropSettingsForm: any;

    //claims department tab
    public claimSettingsForm: any;

    constructor() {
    }

    $onInit() {

    }

    public getOperationHoursFormData(operationHoursForm) {
        this.operationHoursForm = operationHoursForm;
    }

    public getPostageForm(postageForm) {
        this.postageForm = postageForm;
    }

    public getRopSettingsForm(ropSettingsForm) {
        this.ropSettingsForm = ropSettingsForm;
    }

    public getClaimSettingsForm(claimSettingsForm) {
        this.claimSettingsForm = claimSettingsForm;
    }
}

export class SystemInfoComponent implements ng.IComponentOptions {
    templateUrl = "/app/components/systeminfo/systeminfo.component.html";
    controllerAs = "Vm";
    controller = [SystemInfoComponentController];
}