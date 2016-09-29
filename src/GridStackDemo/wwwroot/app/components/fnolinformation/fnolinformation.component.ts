/// <reference path="../../../../typings/index.d.ts" />

export class FnolInformationComponentController {
    constructor() {

    }

    $onInit() {

    }
}

export class FnolInformationComponent implements ng.IComponentOptions {
    templateUrl = "/app/components/fnolinformation/fnolinformation.component.html";
    controllerAs = "Vm";
    controller = [FnolInformationComponentController];
}