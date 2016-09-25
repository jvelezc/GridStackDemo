﻿/// <reference path="../../../../typings/index.d.ts" />
import {GeneralDataSource} from "../common/GeneralDataSource";

class OperationHoursConstants {
    public static get ONE_MINUTE(): number { return 60000; }

    //equivalent of HH:MM a
    public static get ANGULAR_SHORT_TIME_FORMAT(): string { return "shortTime"; }

    public static get WEEKDAYS(): Array<string> { return ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]; }
}

interface IOperationHoursComponentController {

}

class OperationHoursComponentController implements IOperationHoursComponentController {
    public Type: string;


    public hoursOfOperationForm: any;
    public previousOperationHoursForm: any;

    public WeekDaysHoursOfOperationForm: any;

    public onChange: Function;
    public source: GeneralDataSource;

    constructor(private $http: ng.IHttpService, private $filter: ng.IFilterService, private SweetAlert: any) {
    }

    $onInit() {
        this.$http.get(this.source.data.url).success((response: any) => {
            this.transformResponseData(response);

            //this is going to be used when the user cancels saving the form, it will revert to its previous values
            this.previousOperationHoursForm = angular.copy(this.WeekDaysHoursOfOperationForm);
        });
    }

    cancel() {
        // unimplemented
        this.WeekDaysHoursOfOperationForm = angular.copy(this.previousOperationHoursForm);;
    }

    $doCheck() {
        if (this.Type == "0") {
            //blank out the fields...
            this.WeekDaysHoursOfOperationForm = undefined;
        }

        if (this.hoursOfOperationForm !== undefined && this.hoursOfOperationForm.$dirty) {
            var operationHoursObj = this.getOperationHoursForm();

            this.onChange({
                operationHoursForm: operationHoursObj
            });
        }
    }

    public setDayToClosed(day: string): void {
        if (this.WeekDaysHoursOfOperationForm !== undefined && day !== undefined && this.WeekDaysHoursOfOperationForm[day].IsClosed) {
            this.WeekDaysHoursOfOperationForm[day].StartTime = undefined;
            this.WeekDaysHoursOfOperationForm[day].EndTime = undefined;

            this.WeekDaysHoursOfOperationForm[day].AfterHourStartTime = undefined;
            this.WeekDaysHoursOfOperationForm[day].AfterHourEndTime = undefined;

            this.WeekDaysHoursOfOperationForm[day].StartTimeObj = undefined;
            this.WeekDaysHoursOfOperationForm[day].EndTimeObj = undefined;
        }
    }

    //utlity function created to convert a short date '12:00:00' to Date
    public formatShortDateTime(shortDateString: string): Date {
        var today = new Date();

        if (shortDateString !== undefined && shortDateString.trim() !== "") {
            var hourMinutes = shortDateString.split(":");
            var hoursStr = hourMinutes[0];

            var minutesStr = hourMinutes[1];

            var hours = parseInt(hoursStr);
            var minutes = parseInt(minutesStr);
            var formatedDate = new Date(today.getFullYear(), today.getMonth(), today.getDate(), hours, minutes);

            return formatedDate;
        } else {
            return today;
        }
    }

    public transformResponseData(responseData): any {
        if (responseData !== undefined) {
            if (responseData.Type !== undefined) {
                this.Type = responseData.Type;
            } else {
                this.Type = "0";
            }

            if (responseData.WeekDaysHoursOfOperation !== undefined && this.Type == "1") {
                this.WeekDaysHoursOfOperationForm = {};

                angular.forEach(responseData.WeekDaysHoursOfOperation, (operationDay: any) => {
                    var day = operationDay.Weekday.toLowerCase();

                    //format the date related Objects
                    var StartTimeObj = this.formatShortDateTime(operationDay.StartTime);
                    var StartTime = this.$filter('date')(StartTimeObj.getTime(), OperationHoursConstants.ANGULAR_SHORT_TIME_FORMAT);

                    var AfterHourStartTimeObj = this.formatShortDateTime(operationDay.AfterHourStartTime);
                    var AfterHourStartTime = this.$filter('date')(AfterHourStartTimeObj.getTime(),
                        OperationHoursConstants.ANGULAR_SHORT_TIME_FORMAT);


                    var EndTimeObj = this.formatShortDateTime(operationDay.EndTime);
                    var EndTime = this.$filter('date')(EndTimeObj.getTime(), OperationHoursConstants.ANGULAR_SHORT_TIME_FORMAT);

                    var AfterHourEndTimeObj = this.formatShortDateTime(operationDay.AfterHourEndTime);
                    var AfterHourEndTime = this.$filter('date')(AfterHourEndTimeObj.getTime(),
                        OperationHoursConstants.ANGULAR_SHORT_TIME_FORMAT);

                    this.WeekDaysHoursOfOperationForm[day] = {
                        StartTime: StartTime,
                        EndTime: EndTime,
                        AfterHourStartTime: AfterHourStartTime,
                        StartTimeObj: StartTimeObj,
                        AfterHourEndTime: AfterHourEndTime,
                        EndTimeObj: EndTimeObj,
                        IsClosed: operationDay.IsClosed
                    }

                    //if it's marked as closed, make sure and close it.
                    if (operationDay.IsClosed) {
                        this.setDayToClosed(day);
                    }
                });
            }
        }
    }
    public getOperationHoursForm(): any {

        //let's transform the form to an object more consistent with the data
        var operationHoursObj = {
            Type: this.Type,
            WeekDaysHoursOfOperation: []
        };

        if (this.WeekDaysHoursOfOperationForm !== undefined) {

            var operationHoursList = [];

            for (let i = 0; i < OperationHoursConstants.WEEKDAYS.length; i++) {
                var day = OperationHoursConstants.WEEKDAYS[i];

                if (this.WeekDaysHoursOfOperationForm[day] !== undefined) {
                    operationHoursList.push({
                        Weekday: day,
                        StartTime: this.WeekDaysHoursOfOperationForm[day].StartTime,
                        EndTime: this.WeekDaysHoursOfOperationForm[day].EndTime,
                        AfterHourStartTime: this.WeekDaysHoursOfOperationForm[day].AfterHourStartTime,
                        AfterHourEndTime: this.WeekDaysHoursOfOperationForm[day].AfterHourEndTime,
                        IsClosed: this.WeekDaysHoursOfOperationForm[day].IsClosed
                    });
                } else {
                    operationHoursList.push({
                        Weekday: day,
                        StartTime: null,
                        EndTime: null,
                        AfterHourStartTime: null,
                        AfterHourEndTime: null,
                        IsClosed: false
                    });
                }
            }

            operationHoursObj.WeekDaysHoursOfOperation = operationHoursList;
        } 

        return operationHoursObj;
    }

    public isClosed(day: string): boolean {
        var isClosed: boolean = false;

        if (this.WeekDaysHoursOfOperationForm !== undefined && day !== undefined) {
            isClosed = (this.WeekDaysHoursOfOperationForm[day].IsClosed);
        }
        return isClosed;
    }

    public areBusinessHoursDefined(day:string): boolean {
        var isDefined = false;

        if (this.Type == "1") {
            isDefined = true;
        }

        return isDefined;
    }

    public isBusinessHoursValid(operationDay: any, day: string): boolean {
        var isValid = false;

        if (operationDay === null || this.WeekDaysHoursOfOperationForm[day].StartTimeObj === undefined || this.WeekDaysHoursOfOperationForm[day].EndTimeObj === undefined) {
            return true;
        }

        if (operationDay !== null && this.WeekDaysHoursOfOperationForm[day].StartTimeObj.getTime() < this.WeekDaysHoursOfOperationForm[day].EndTimeObj.getTime()) {
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
        if (this.WeekDaysHoursOfOperationForm !== undefined && day !== undefined) {
            this.WeekDaysHoursOfOperationForm[day].StartTime = "";
            this.WeekDaysHoursOfOperationForm[day].EndTime = "";
        }
    }

    public clearAfterHours(day: string): void {
        if (this.WeekDaysHoursOfOperationForm !== undefined && day !== undefined) {
            this.WeekDaysHoursOfOperationForm[day].AfterHourStartTime = "";
            this.WeekDaysHoursOfOperationForm[day].AfterHourEndTime = "";
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
                this.WeekDaysHoursOfOperationForm[day].AfterHourStartTime = this.$filter('date')(operationDay.getTime() + OperationHoursConstants.ONE_MINUTE,
                    OperationHoursConstants.ANGULAR_SHORT_TIME_FORMAT);
            } else {
                this.WeekDaysHoursOfOperationForm[day].AfterHourEndTime = this.$filter('date')(operationDay.getTime() - OperationHoursConstants.ONE_MINUTE,
                    OperationHoursConstants.ANGULAR_SHORT_TIME_FORMAT);
            }
        } else {

            //Alert the user that it has chosen an invalid time
            var title = "System Alert";
            var text = "The Start Time cannot be after the End Time. ";
            this.showAlert(title, text);

            //reset the hours of that day, and it's after hours as well
            if (isEndTime) {
                if (this.WeekDaysHoursOfOperationForm[day].StartTimeObj !== undefined) {
                    this.WeekDaysHoursOfOperationForm[day].EndTimeObj = new Date(this.WeekDaysHoursOfOperationForm[day].StartTimeObj.getTime() + OperationHoursConstants.ONE_MINUTE);

                    this.WeekDaysHoursOfOperationForm[day].AfterHourStartTime = this.$filter('date')(this.WeekDaysHoursOfOperationForm[day].EndTimeObj.getTime()
                        + OperationHoursConstants.ONE_MINUTE,
                        OperationHoursConstants.ANGULAR_SHORT_TIME_FORMAT);
                } else {
                    this.WeekDaysHoursOfOperationForm[day].EndTime = undefined;
                }
            } else {
                if (this.WeekDaysHoursOfOperationForm[day].EndTimeObj !== undefined) {
                    this.WeekDaysHoursOfOperationForm[day].StartTimeObj = new Date(this.WeekDaysHoursOfOperationForm[day].EndTimeObj.getTime() - OperationHoursConstants.ONE_MINUTE);

                    this.WeekDaysHoursOfOperationForm[day].AfterHourEndTime = this.$filter('date')(this.WeekDaysHoursOfOperationForm[day].StartTimeObj.getTime()
                        - OperationHoursConstants.ONE_MINUTE,
                        OperationHoursConstants.ANGULAR_SHORT_TIME_FORMAT);
                } else {
                    this.WeekDaysHoursOfOperationForm[day].StartTimeObj = undefined;
                }
            }

            console.log(this.WeekDaysHoursOfOperationForm[day].StartTimeObj.getTime());
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
            source: '<'
        };

    }
    controller = ["$http", "$filter", "SweetAlert", OperationHoursComponentController];


}