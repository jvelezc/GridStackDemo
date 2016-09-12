/// <reference path="../../../../typings/index.d.ts" />

export class FnolComponentController {
    constructor() {

    }

    $onInit() {

    }
}

export class FnolComponent implements ng.IComponentOptions {
    templateUrl = "/app/components/fnol/fnol.component.html";
    controllerAs = "Vm";
    controller = [FnolComponentController];
}