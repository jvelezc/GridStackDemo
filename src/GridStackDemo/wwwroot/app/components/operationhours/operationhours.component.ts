/// <reference path="../../../../typings/index.d.ts" />
import _ from "lodash";
interface IHours {
    weekNum: Number;
    weekDay: string;
    startDate: Date;
    endDate: Date;
}
interface IOperationHoursComponentController {
    type: string;
    businessHours: Array<IHours>;
    afterhours: Array<IHours>;

}

class OperationHoursForm {

}
class OperationHoursComponentController implements IOperationHoursComponentController {
    public type: string;
    public businessHours: Array<IHours>;
    public afterhours: Array<IHours>;
    public OperationHoursForm: any;
    public onSelected: Function;
    public MondayEndTime: any;
    private CopyOfOperationHoursForm: any;
    constructor(private $http: ng.IHttpService) {
    }

    $onInit() {
        this.$http.get("app/components/operationhours/operationHoursFakeData.json").success((response:any) => {
            this.type = response.type;
            this.businessHours = response.businessHours;
        });
    }
    Cancel() {

    }
    $doCheck() {
            this.onSelected({
                OperationHoursForm: this.OperationHoursForm
            });
    }

    public ProvitionalSave()
    {
        //console.log("I am the child");
        //this.OperationHoursForm = { name: "jose" };
        //console.log(this.OperationHoursForm);
        //this.onSelected({
        //    OperationHoursForm: this.OperationHoursForm
        //});
    }

}

export class OperationHoursComponent implements ng.IComponentOptions {
    templateUrl = "/app/components/operationhours/operationhours.component.html";
    controllerAs = "Vm";
    bindings: any;
    constructor()
    {
        this.bindings = {
            onSelected: '&',
        };

    }
   // require?: string | string[] | { [controller: string]: string };
    controller = ["$http", OperationHoursComponentController];


}