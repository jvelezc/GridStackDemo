/// <reference path="../../../../typings/index.d.ts" />

interface IFnolServicesComponentController {
    saveTab: Function;
    save: Function;
}

export class FnolServicesComponentController implements IFnolServicesComponentController{
    public saveTab: Function;

    constructor() {

    }

    $onInit() {

    }

    public save() {
        this.saveTab();
    }
}


export class FnolServicesComponent implements ng.IComponentOptions {
    templateUrl = "/app/components/fnolservices/fnolservices.component.html";
    controllerAs = "Vm";
    controller = [FnolServicesComponentController];
    bindings: any;
    constructor() {
        this.bindings = {
            saveTab: "&",
        };
    }
}