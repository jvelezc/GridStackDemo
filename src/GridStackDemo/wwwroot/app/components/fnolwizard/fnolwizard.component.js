/// <reference path="../../../../typings/index.d.ts" />
export class FnolWizardComponentController {
    constructor() {
    }
    $onInit() {
    }
    onChange(disabled) {
        this.disabled = disabled;
    }
    savePrioritySearch(form) {
        console.log("Father", " savePrioritySearch");
    }
    saveInformation(form) {
        console.log("Father", "saveInformation");
    }
    saveClaimDetails(form) {
        console.log("Father", "saveClaimDetails");
    }
    submit(form) {
        console.log("Father", "submit");
    }
    saveServices(form) {
        console.log("Father", "saveServices");
    }
}
export class FnolWizardComponent {
    constructor() {
        this.templateUrl = "/app/components/fnolwizard/fnolwizard.component.html";
        this.controllerAs = "Vm";
        this.controller = [FnolWizardComponentController];
    }
}
