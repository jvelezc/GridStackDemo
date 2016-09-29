/// <reference path="../../../../typings/index.d.ts" />

export class FnolServicesComponentController {
    constructor() {

    }

    $onInit() {

    }
}


export class FnolServicesComponent implements ng.IComponentOptions {
    templateUrl = "/app/components/fnolservices/fnolservices.component.html";
    controllerAs = "Vm";
    controller = [FnolServicesComponentController];
}