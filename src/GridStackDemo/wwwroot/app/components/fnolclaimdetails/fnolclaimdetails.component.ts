/// <reference path="../../../../typings/index.d.ts" />

interface IFnolClaimDetailComponentController{
    disabled: Boolean;
    onChange: Function;
}

export class FnolClaimDetailComponentController {
	public disabled:Boolean;
    public onChange: Function;


    constructor() {

    }

    $onInit() {

    }

    //$doCheck() {
    //    if (this.disabled) {
    //        this.onChange({
    //            disabled: this.disabled
    //        });
    //    }
    //}

    public onChangeEvent(){
        console.log("Event");
        console.log(this.onChange);
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
            onChange: "&",
        };
    }
}