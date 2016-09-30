/// <reference path="../../../../typings/index.d.ts" />

interface IFnolWizardComponentController {
   disabled: Boolean;
   onChange: Function;
   prioritySearch: Function;
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

    public prioritySearch(form) {
        console.log("Father");
        console.log(form);
    }
}

export class FnolWizardComponent implements ng.IComponentOptions {
    templateUrl = "/app/components/fnolwizard/fnolwizard.component.html";
    controllerAs = "Vm";
    controller = [FnolWizardComponentController];
}