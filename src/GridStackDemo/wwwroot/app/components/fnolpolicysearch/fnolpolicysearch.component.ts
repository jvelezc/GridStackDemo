/// <reference path="../../../../typings/index.d.ts" />

interface IFnolPolicySearchComponentController {
    nextTab(): Function;
    next(): Function;

}

export class FnolPolicySearchComponentController {
    public nextTab: Function;

    constructor() {

    }

    $onInit() {

    }

    public next() {
        console.log("Child submit");
        this.nextTab();
    }
}

export class FnolPolicySearchComponent implements ng.IComponentOptions {
    templateUrl = "/app/components/fnolpolicysearch/fnolpolicysearch.component.html";
    controllerAs = "Vm";
    controller = [FnolPolicySearchComponentController];
    bindings: any;
    constructor() {
        this.bindings = {
            nextTab: "&",
        };
    }
}