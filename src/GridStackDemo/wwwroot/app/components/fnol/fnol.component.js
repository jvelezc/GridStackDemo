/// <reference path="../../../../typings/index.d.ts" />
export class FnolComponentController {
    constructor() {
    }
    $onInit() {
    }
}
export class FnolComponent {
    constructor() {
        this.templateUrl = "/app/components/fnol/fnol.component.html";
        this.controllerAs = "Vm";
        this.controller = [FnolComponentController];
    }
}
