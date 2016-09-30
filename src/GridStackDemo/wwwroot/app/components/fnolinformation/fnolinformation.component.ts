/// <reference path="../../../../typings/index.d.ts" />

interface IFnolInformationComponentController {
    saveTab: Function;
    save: Function;

}

export class FnolInformationComponentController implements IFnolInformationComponentController {
    public saveTab: Function;

    constructor() {

    }

    $onInit() {

    }

    public save() {
        this.saveTab();
    }
}

export class FnolInformationComponent implements ng.IComponentOptions {
    templateUrl = "/app/components/fnolinformation/fnolinformation.component.html";
    controllerAs = "Vm";
    controller = [FnolInformationComponentController];
    bindings: any;
    constructor() {
        this.bindings = {
            saveTab: "&",
        };
    }
}