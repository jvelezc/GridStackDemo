/// <reference path="../../../../typings/index.d.ts" />
export class FnolClaimDetailComponentController {
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
    onChangeEvent() {
        console.log("Event");
        console.log(this.onChange);
        this.onChange({ disabled: this.disabled });
    }
}
export class FnolClaimDetailsComponent {
    constructor() {
        this.templateUrl = "/app/components/fnolclaimdetails/fnolclaimdetails.component.html";
        this.controllerAs = "Vm";
        this.controller = [FnolClaimDetailComponentController];
        this.bindings = {
            onChange: "&",
        };
    }
}
