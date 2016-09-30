/// <reference path="../../../../typings/index.d.ts" />
export class FnolAsignSubmitComponentController {
    constructor() {
    }
    $onInit() {
    }
    submit() {
        this.submitForm();
    }
}
export class FnolAsignSubmitComponent {
    constructor() {
        this.templateUrl = "/app/components/fnolasignsubmit/fnolasignsubmit.component.html";
        this.controllerAs = "Vm";
        this.controller = [FnolAsignSubmitComponentController];
        this.bindings = {
            submitForm: "&",
        };
    }
}
