/// <reference path="../../../../typings/index.d.ts" />

interface IFnolWizardComponentController {
   disabled: Boolean;
   onChange: Function;
   savePrioritySearch: Function;
   saveInformation: Function;
}

export class FnolWizardComponentController implements IFnolWizardComponentController {
    disabled: Boolean;


    constructor() {

    }

    $onInit() {

    }

    public onChange(disabled) {
        this.disabled = disabled;
    }

    public savePrioritySearch(form) {
        console.log("Father"," savePrioritySearch");
    }

    public saveInformation(form) {
        console.log("Father" ,"saveInformation");

    }

    public saveClaimDetails(form) {
        console.log("Father", "saveClaimDetails");
    }

    public submit(form) {
        console.log("Father", "submit");
    }

    public saveServices(form) {
        console.log("Father", "saveServices");
    }
}

export class FnolWizardComponent implements ng.IComponentOptions {
    templateUrl = "/app/components/fnolwizard/fnolwizard.component.html";
    controllerAs = "Vm";
    controller = [FnolWizardComponentController];
}