/// <reference path="../../../../typings/index.d.ts" />
export class FnolServicesComponentController {
    constructor() {
    }
    $onInit() {
    }
    save() {
        this.saveTab();
    }
}
export class FnolServicesComponent {
    constructor() {
        this.templateUrl = "/app/components/fnolservices/fnolservices.component.html";
        this.controllerAs = "Vm";
        this.controller = [FnolServicesComponentController];
        this.bindings = {
            saveTab: "&",
        };
    }
}
