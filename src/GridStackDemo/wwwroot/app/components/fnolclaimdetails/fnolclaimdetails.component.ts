/// <reference path="../../../../typings/index.d.ts" />

interface IFnolClaimDetailComponentController{
    disabled: Boolean;
    onChange: Function;
    saveTab: Function;
    save: Function;
    submitForm: Function;
    submit: Function;
}

export class FnolClaimDetailComponentController {
	public disabled:Boolean;
    public onChange: Function;
    public saveTab: Function;
    public submitForm: Function;

    constructor() {

    }

    $onInit() {

    }

    public save() {
        this.saveTab();
    }

    public submit() {
        this.submitForm();
    }

    public onChangeEvent(){
        this.onChange({ disabled: this.disabled });
    }
}

export class FnolClaimDetailsComponent implements ng.IComponentOptions {
    templateUrl = "/app/components/fnolclaimdetails/fnolclaimdetails.component.html";
    controllerAs = "Vm";
    controller = [FnolClaimDetailComponentController];
    bindings: any;
    constructor() {
        this.bindings = {
            saveTab: "&",
            submitForm: "&",
            onChange:"&"
        };
    }
}