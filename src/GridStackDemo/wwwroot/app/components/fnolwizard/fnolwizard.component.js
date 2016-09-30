/// <reference path="../../../../typings/index.d.ts" />
export class FnolWizardComponentController {
    constructor() {
    }
    $onInit() {
    }
    onChange(disabled) {
        this.disabled = disabled;
    }
    prioritySearch(form) {
        console.log("Father");
        console.log(form);
    }
}
export class FnolWizardComponent {
    constructor() {
        this.templateUrl = "/app/components/fnolwizard/fnolwizard.component.html";
        this.controllerAs = "Vm";
        this.controller = [FnolWizardComponentController];
    }
}
