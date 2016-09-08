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
            this.previousOperationHoursForm = angular.copy(this.operationHoursForm);
        });
    }

    cancel() {
        // unimplemented
        this.operationHoursForm = angular.copy(this.previousOperationHoursForm);;
    }

    $doCheck() {
        if (this.type == "0") {
            //blank out the fields...
            this.operationHoursForm = null;
        }

        var operationHoursObj = this.getOperationHoursForm();

        this.onChange({
            operationHoursForm: operationHoursObj
        });
    }

    public setDayToClosed(day: string): void {
        if (this.operationHoursForm !== undefined && day !== undefined && this.operationHoursForm[day].closed) {
            this.operationHoursForm[day].startTime = undefined;
            this.operationHoursForm[day].endTime = undefined;

            this.operationHoursForm[day].afterHourStartTime = undefined;
            this.operationHoursForm[day].afterHourEndTime = undefined;

            this.operationHoursForm[day].startTimeObj = undefined;
            this.operationHoursForm[day].endTimeObj = undefined;
        }
    }

    //utlity function created to convert a short date '12:00 AM' to 24 hour format
    public formatShortDateTime(shortDateString: string): Date {
        var today = new Date();

        if (shortDateString !== undefined && shortDateString.trim() !== "") {
            var hourMinutes = shortDateString.split(":");
            var hoursStr = hourMinutes[0];

            var minutesAmPm = hourMinutes[1].split(" ");

            var minutesStr = minutesAmPm[0];

            var amPmStr = minutesAmPm[1].toLowerCase();
            var amPm = (amPmStr === "pm") ? 12 : 0;

            var hours = parseInt(hoursStr);
            var minutes = parseInt(minutesStr);
            var formatedDate = new Date(today.getFullYear(), today.getMonth(), today.getDate(), hours + amPm, minutes);

            return formatedDate;
        } else {
            return today;
        }
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
                                
                    var startTimeObj = this.formatShortDateTime(operationDay.startTime);
                    var endTimeObj = this.formatShortDateTime(operationDay.endTime);

                    var closed = (operationDay.closed) ? operationDay.closed : false;

                    this.operationHoursForm[day] = {
                        startTime: operationDay.startTime,
                        endTime: operationDay.endTime,
                        afterHourStartTime: operationDay.afterHourStartTime,
                        startTimeObj: startTimeObj,
                        afterHourEndTime: operationDay.afterHourEndTime,
                        endTimeObj: endTimeObj,
                        closed: closed
                    }

                    //if it's marked as closed, make sure and close it.
                    if (closed) {
                        this.setDayToClosed(day);
                    }
                });
            }
        }
    }
    public getOperationHoursForm(): any {

        //let's transform the form to an object more consistent with the data
        var operationHoursObj = {
            type: this.type,
            operationHours: []
        };

        if (this.operationHoursForm !== undefined) {

            var operationHoursList = [];

            for (let i = 0; i < OperationHoursConstants.WEEKDAYS.length; i++) {
                var day = OperationHoursConstants.WEEKDAYS[i];

                if (this.operationHoursForm[day] !== undefined) {
                    operationHoursList.push({
                        weekday: day,
                        startTime: this.operationHoursForm[day].startTime,
                        endTime: this.operationHoursForm[day].endTime,
                        afterHourStartTime: this.operationHoursForm[day].afterHourStartTime,
                        afterHourEndTime: this.operationHoursForm[day].afterHourEndTime,
                        closed: this.operationHoursForm[day].closed
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
        } 

        return operationHoursObj;
    }

    public isClosed(day: string): boolean {
        var isClosed: boolean = false;

        if (this.operationHoursForm !== undefined && day !== undefined) {
            isClosed = (this.operationHoursForm[day].closed);
        }
        return isClosed;
    }

    public areBusinessHoursDefined(day:string): boolean {
        var isDefined = false;

        if (this.type == "1") {
            isDefined = true;
        }

        return isDefined;
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

    public clearOperationHours(day: string): void {
        if (this.operationHoursForm !== undefined && day !== undefined) {
            this.operationHoursForm[day].startTime = "";
            this.operationHoursForm[day].endTime = "";
        }
    }

    public clearAfterHours(day: string): void {
        if (this.operationHoursForm !== undefined && day !== undefined) {
            this.operationHoursForm[day].afterHourStartTime = "";
            this.operationHoursForm[day].afterHourEndTime = "";
        }
    }

    public updateAfterHours(operationDay: any, day: string, action: string): void {
        day = day.toLowerCase();

        var isEndTime = false;

        if (action === "end") {
            isEndTime = true;
        }

        if (operationDay == null) {
            //set them to blank
            this.clearAfterHours(day);
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