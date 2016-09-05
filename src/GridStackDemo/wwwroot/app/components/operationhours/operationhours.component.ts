/// <reference path="../../../../typings/index.d.ts" />

class OperationHoursConstants {
    public static get ONE_MINUTE(): number { return 60000; }

    //equivalent of HH:MM a
    public static get ANGULAR_SHORT_TIME_FORMAT(): string { return "shortTime"; }

    public static get WEEKDAYS(): Array<string> { return ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]; }
}

interface IOperationHoursComponentController {

}

class OperationHoursComponentController implements IOperationHoursComponentController {
    public type: string;

    public operationHoursForm: any;
    public previousOperationHoursForm: any;
    public onChange: Function;

    constructor(private $http: ng.IHttpService, private $filter: ng.IFilterService, private SweetAlert: any) {
    }

    $onInit() {
        this.$http.get("app/components/operationhours/operationHoursFakeData.json").success((response: any) => {
            this.transformResponseData(response);

            //this is going to be used when the user cancels saving the form, it will revert to its previous values
            this.previousOperationHoursForm = this.previousOperationHoursForm;
        });
    }

    cancel() {

    }

    $doCheck() {
        if (!this.areBusinessHoursDefined()) {
            //blank out the fields...
            this.operationHoursForm = null;
        }

        var operationHoursObj = this.getOperationHoursForm();

        this.onChange({
            operationHoursForm: operationHoursObj
        });
    }

    public transformResponseData(responseData): any {
        if (responseData !== undefined) {
            if (responseData.type !== undefined) {
                this.type = responseData.type;
            } else {
                this.type = "0";
            }

            if (responseData.operationHours !== undefined && this.type == "1") {
                this.operationHoursForm = {};

                angular.forEach(responseData.operationHours, (operationDay: any) => {
                    var day = operationDay.weekday;

                    this.operationHoursForm[day] = {
                        startTime: operationDay.startTime,
                        endTime: operationDay.endTime,
                        afterHourStartTime: operationDay.afterHourStartTime,
                        afterHourEndTime: operationDay.afterHouEndTime
                    }
                });
            }
        }
    }
    public getOperationHoursForm(): any {

        //let's transform the form to an object more consistent with the data
        if (this.operationHoursForm !== null) {
            var operationHoursObj = {
                type: this.type,
                operationHours: []
            };

            var operationHoursList = [];

            for (let i = 0; i < OperationHoursConstants.WEEKDAYS.length; i++) {
                var day = OperationHoursConstants.WEEKDAYS[i];

                if (this.operationHoursForm[day] !== undefined) {
                    operationHoursList.push({
                        weekday: day,
                        startTime: this.operationHoursForm[day].startTime,
                        endTime: this.operationHoursForm[day].endTime,
                        afterHourStartTime: this.operationHoursForm[day].afterHourStartTime,
                        afterHourEndTime: this.operationHoursForm[day].afterHourEndTime
                    });
                } else {
                    operationHoursList.push({
                        weekday: day,
                        startTime: null,
                        endTime: null,
                        afterHourStartTime: null,
                        afterHourEndTime: null
                    });
                }
            }

            operationHoursObj.operationHours = operationHoursList;

            return operationHoursObj;
        } else {
            return null;
        }
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

    public showAlert(title: string , text: string): void {

        this.SweetAlert.swal({
            title: title,
            text: text,
            type: "warning",
            showCancelButton: false,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Ok",
            closeOnConfirm: true
        });

    }

    public updateAfterHours(operationDay: any, day: string, action: string): void {
        day = day.toLowerCase();

        var isEndTime = false;

        if (action === "end") {
            isEndTime = true;
        }

        if (operationDay == null) {
            //set them to blank
            this.operationHoursForm[day].afterHourStartTime = "";
            this.operationHoursForm[day].afterHourEndTime = "";
        }

        //first, validate the dates of the day.
        else if (this.isBusinessHoursValid(operationDay, day)) {

            if (isEndTime) {
                this.operationHoursForm[day].afterHourStartTime = this.$filter('date')(operationDay.getTime() + OperationHoursConstants.ONE_MINUTE,
                    OperationHoursConstants.ANGULAR_SHORT_TIME_FORMAT);
            } else {
                this.operationHoursForm[day].afterHourEndTime = this.$filter('date')(operationDay.getTime() - OperationHoursConstants.ONE_MINUTE,
                    OperationHoursConstants.ANGULAR_SHORT_TIME_FORMAT);
            }
        } else {

            //Alert the user that it has chosen an invalid time
            var title = "System Alert";
            var text = "The Start Time cannot be after the End Time. ";
            this.showAlert(title, text);

            //reset the hours of that day
            if (isEndTime) {
                this.operationHoursForm[day].endTime = "";
            } else {
                this.operationHoursForm[day].startTime = "";
            }
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
    controller = ["$http", "$filter", "SweetAlert", OperationHoursComponentController];


}