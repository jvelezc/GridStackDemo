/// <reference path="../../../../typings/index.d.ts" />

interface IFnolAsignSubmitComponentController {
    submitForm: Function;
    submit: Function;
}


export class FnolAsignSubmitComponentController implements IFnolAsignSubmitComponentController {

    public submitForm: Function;

    constructor() {

    }

    $onInit() {

    }

    public submit() {
        this.submitForm();
    }
}

export class FnolAsignSubmitComponent implements ng.IComponentOptions {
    templateUrl = "/app/components/fnolasignsubmit/fnolasignsubmit.component.html";
    controllerAs = "Vm";
    controller = [FnolAsignSubmitComponentController];
    bindings: any;
    constructor() {
        this.bindings = {          
            submitForm: "&",
        };
    }
}