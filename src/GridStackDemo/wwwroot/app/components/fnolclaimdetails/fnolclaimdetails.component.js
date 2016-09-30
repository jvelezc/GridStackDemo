/// <reference path="../../../../typings/index.d.ts" />
export class FnolClaimDetailComponentController {
    constructor() {
    }
    $onInit() {
    }
    save() {
        this.saveTab();
    }
    submit() {
        this.submitForm();
    }
    onChangeEvent() {
        this.onChange({ disabled: this.disabled });
    }
}
export class FnolClaimDetailsComponent {
    constructor() {
        this.templateUrl = "/app/components/fnolclaimdetails/fnolclaimdetails.component.html";
        this.controllerAs = "Vm";
        this.controller = [FnolClaimDetailComponentController];
        this.bindings = {
            saveTab: "&",
            submitForm: "&",
            onChange: "&"
        };
    }
}
