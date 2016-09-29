/// <reference path="../../../../typings/index.d.ts" />

interface IFnolWizardComponentController {
   disabled: Boolean;
   onChange: Function;
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
}

export class FnolWizardComponent implements ng.IComponentOptions {
    templateUrl = "/app/components/fnolwizard/fnolwizard.component.html";
    controllerAs = "Vm";
    controller = [FnolWizardComponentController];
}