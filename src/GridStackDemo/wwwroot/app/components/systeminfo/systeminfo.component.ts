/// <reference path="../../../../typings/index.d.ts" />


export class SystemInfoComponentController   {


    constructor() {
    }

    $onInit() {

    }
}

export class SystemInfoComponent implements ng.IComponentOptions {
    templateUrl = "/app/components/systeminfo/systeminfo.component.html";
    controllerAs = "Vm";

    controller = [SystemInfoComponentController];
}