"use strict";
/// <reference path="../../../../typings/index.d.ts" />
var Postage = (function () {
    function Postage() {
    }
    return Postage;
}());
var PostageComponentController = (function () {
    function PostageComponentController($http) {
        this.$http = $http;
    }
    PostageComponentController.prototype.$onInit = function () {
        var _this = this;
        this.generalFeeOptions = {
            format: "c3",
            decimals: 3
        };
        //call API to retrieve the data as well...
        this.$http.get("app/components/postage/postageFakeData.json").success(function (response) {
            if (response !== undefined) {
                _this.postage = new Postage();
                _this.postage.domesticFee = response.domestic;
                _this.postage.internationalFee = response.international;
                _this.postage.fee = response.fee;
                //set the previous values
                _this.previousPostageValues = new Postage();
                _this.previousPostageValues = angular.copy(_this.postage);
            }
            else {
            }
        });
    };
    PostageComponentController.prototype.$doCheck = function () {
        if (this.postageForm !== undefined && this.postageForm.$dirty) {
            //send the object back to the parent
            this.onChange({
                postageForm: this.postage
            });
        }
    };
    PostageComponentController.prototype.cancel = function () {
        //reset the fields, use angular.copy
        this.postage = angular.copy(this.previousPostageValues);
    };
    return PostageComponentController;
}());
exports.PostageComponentController = PostageComponentController;
var PostageComponent = (function () {
    function PostageComponent() {
        this.templateUrl = "/app/components/postage/postage.component.html";
        this.controllerAs = "Vm";
        this.controller = ["$http", PostageComponentController];
        this.bindings = {
            onChange: "&",
        };
    }
    return PostageComponent;
}());
exports.PostageComponent = PostageComponent;
