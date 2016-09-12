"use strict";
var HolidayDatesComponentController = (function () {
    function HolidayDatesComponentController($http, SweetAlert) {
        this.$http = $http;
        this.SweetAlert = SweetAlert;
    }
    HolidayDatesComponentController.prototype.showDeleteAlert = function (e) {
        this.SweetAlert.swal({
            title: "Hey",
            text: "Deleting something?",
            type: "warning",
            showCancelButton: false,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Ok",
            closeOnConfirm: true
        });
    };
    HolidayDatesComponentController.prototype.$onInit = function () {
        this.HolidayDatesGridOptions = {
            dataSource: {
                transport: {
                    read: this.source.data.url,
                    dataType: "json"
                },
                schema: {
                    model: {
                        id: "Id",
                        fields: {
                            Id: { editable: false, nullable: true },
                            Date: { type: "date" },
                            Description: { type: "string" }
                        }
                    }
                },
                pagesize: 10,
                batch: true
            },
            sortable: true,
            navigatable: true,
            pageable: true,
            toolbar: [{ name: "create", text: "Add Date" }, "save", "cancel"],
            columns: [
                { field: "Date", format: "{0:MM/dd/yyyy}" },
                { field: "Description" },
                { command: [{ name: "destroy", text: "Remove" }], title: " " }
            ],
            editable: true
        };
    };
    HolidayDatesComponentController.prototype.$doCheck = function () {
    };
    return HolidayDatesComponentController;
}());
exports.HolidayDatesComponentController = HolidayDatesComponentController;
var HolidayDatesComponent = (function () {
    function HolidayDatesComponent() {
        this.templateUrl = "/app/components/holidaydates/holidaydates.component.html";
        this.controllerAs = "Vm";
        this.controller = ["$http", "SweetAlert", HolidayDatesComponentController];
        this.bindings = {
            source: "<",
        };
    }
    return HolidayDatesComponent;
}());
exports.HolidayDatesComponent = HolidayDatesComponent;
