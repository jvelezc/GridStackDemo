/// <reference path="../../../../typings/index.d.ts" />
export class FnolWizardComponentController {
    constructor() {
    }
    $onInit() {
    }
    onChange(disabled) {
        this.disabled = disabled;
    }
}
export class FnolWizardComponent {
    constructor() {
        this.templateUrl = "/app/components/fnolwizard/fnolwizard.component.html";
        this.controllerAs = "Vm";
        this.controller = [FnolWizardComponentController];
    }
}
