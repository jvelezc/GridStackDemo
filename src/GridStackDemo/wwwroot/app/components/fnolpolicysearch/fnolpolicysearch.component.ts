/// <reference path="../../../../typings/index.d.ts" />

interface IFnolPolicySearchComponentController {
    saveTab: Function;
    save: Function;

}

export class FnolPolicySearchComponentController {
    public saveTab: Function;

    constructor() {

    }

    $onInit() {

    }

    public save() {
        this.saveTab();
    }
}

export class FnolPolicySearchComponent implements ng.IComponentOptions {
    templateUrl = "/app/components/fnolpolicysearch/fnolpolicysearch.component.html";
    controllerAs = "Vm";
    controller = [FnolPolicySearchComponentController];
    bindings: any;
    constructor() {
        this.bindings = {
            saveTab: "&",
        };
    }
}