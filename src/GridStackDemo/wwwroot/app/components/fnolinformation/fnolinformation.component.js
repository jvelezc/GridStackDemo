/// <reference path="../../../../typings/index.d.ts" />
export class FnolInformationComponentController {
    constructor() {
    }
    $onInit() {
    }
    save() {
        this.saveTab();
    }
}
export class FnolInformationComponent {
    constructor() {
        this.templateUrl = "/app/components/fnolinformation/fnolinformation.component.html";
        this.controllerAs = "Vm";
        this.controller = [FnolInformationComponentController];
        this.bindings = {
            saveTab: "&",
        };
    }
}
