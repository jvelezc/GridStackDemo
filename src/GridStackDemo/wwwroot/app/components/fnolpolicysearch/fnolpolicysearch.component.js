/// <reference path="../../../../typings/index.d.ts" />
export class FnolPolicySearchComponentController {
    constructor() {
    }
    $onInit() {
    }
    save() {
        this.saveTab();
    }
}
export class FnolPolicySearchComponent {
    constructor() {
        this.templateUrl = "/app/components/fnolpolicysearch/fnolpolicysearch.component.html";
        this.controllerAs = "Vm";
        this.controller = [FnolPolicySearchComponentController];
        this.bindings = {
            saveTab: "&",
        };
    }
}
