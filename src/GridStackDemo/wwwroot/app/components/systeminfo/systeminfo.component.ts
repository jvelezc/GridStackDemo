/// <reference path="../../../../typings/index.d.ts" />


export class SystemInfoComponentController   {


    constructor() {
    }

    $onInit() {

    }
    public GetFormData(OperationHoursForm)
    {
        console.log(" I am the parent");
        console.log(OperationHoursForm);
 
    }

}

export class SystemInfoComponent implements ng.IComponentOptions {
    templateUrl = "/app/components/systeminfo/systeminfo.component.html";
    controllerAs = "Vm";

    controller = [SystemInfoComponentController];
}