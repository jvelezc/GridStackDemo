/// <reference path="../../../../typings/index.d.ts" />
import _ from "lodash";

class OperationHoursConstants {
    public static get ONE_MINUTE(): number { return 60000; }

    //equivalent of HH:MM a
    public static get ANGULAR_SHORT_TIME_FORMAT(): string { return "shortTime"; }

    public static get WEEKDAYS(): Array<string> { return ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]; }
}

interface IOperationHoursComponentController {

}

class OperationHoursComponentController implements IOperationHoursComponentController {
    public type: string;
    public businessHours = [];
    public afterhours = [];

    public operationHoursForm: any = {};
    public onChange: Function;

    constructor(private $http: ng.IHttpService, private $filter: ng.IFilterService) {
    }

    $onInit() {
        this.$http.get("app/components/operationhours/operationHoursFakeData.json").success((response: any) => {
            this.type = response.type;
            this.businessHours = response.operationHours;
        });
    }

    cancel() {

    }

    $doCheck() {
        if (!this.areBusinessHoursDefined()) {
            //blank out the fields...
            this.operationHoursForm = null;
        }


        this.onChange({
            operationHoursForm: this.operationHoursForm
        });
    }

    public areBusinessHoursDefined(): boolean {
        return this.type == "1";
    }

    public isBusinessHoursValid(operationDay: any, day: string): boolean {
        var isValid = false;

        if (operationDay === null || this.operationHoursForm[day].startTimeObj === undefined || this.operationHoursForm[day].endTimeObj === undefined) {
            return true;
        }

        if (operationDay !== null && this.operationHoursForm[day].startTimeObj.getTime() < this.operationHoursForm[day].endTimeObj.getTime()) {
            isValid = true;
        }

        return isValid;
    }

    public updateAfterHours(operationDay: any, day: string, action: string): void {
        day = day.toLowerCase();

        if (operationDay == null) {
            //set them to blank
            this.operationHoursForm[day].afterHourStartTime = "";
            this.operationHoursForm[day].afterHourEndTime = "";
        }

        //first, validate the dates of the day.
        else if (this.isBusinessHoursValid(operationDay, day)) {

            if (action == 'end') {
                this.operationHoursForm[day].afterHourStartTime = this.$filter('date')(operationDay.getTime() + OperationHoursConstants.ONE_MINUTE,
                    OperationHoursConstants.ANGULAR_SHORT_TIME_FORMAT);
            } else {
                this.operationHoursForm[day].afterHourEndTime = this.$filter('date')(operationDay.getTime() - OperationHoursConstants.ONE_MINUTE,
                    OperationHoursConstants.ANGULAR_SHORT_TIME_FORMAT);
            }
        } else {
            console.log("Start Time cannot be after End Time");
        }
    }

}

export class OperationHoursComponent implements ng.IComponentOptions {
    templateUrl = "/app/components/operationhours/operationhours.component.html";
    controllerAs = "Vm";
    bindings: any;
    constructor() {
        this.bindings = {
            onChange: '&',
        };

    }
    controller = ["$http", "$filter", OperationHoursComponentController];


}