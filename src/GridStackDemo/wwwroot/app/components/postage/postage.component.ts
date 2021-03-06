﻿/// <reference path="../../../../typings/index.d.ts" />
import {GeneralDataSource} from "../common/GeneralDataSource";

class Postage {
    public domesticFee: number;
    public internationalFee: number;
    public fee: number;
}

interface IPostageComponentControllerInterface {
    postage: Postage;
}

export class PostageComponentController implements IPostageComponentControllerInterface {
    public postageForm: any;

    public previousPostageValues: Postage;
    public postage: Postage;

    public onChange: Function;
    public source: GeneralDataSource;

    constructor(private $http) {
    }

    $onInit() {
        this.generalFeeOptions = {
            format: "c3",
            decimals: 3
        };

        //call API to retrieve the data as well...
        this.$http.get(this.source.data.url).success((response: any) => {
            if (response !== undefined) {
                this.postage = new Postage();

                this.postage.domesticFee = response.domestic;
                this.postage.internationalFee = response.international;
                this.postage.fee = response.fee;

                //set the previous values
                this.previousPostageValues = new Postage();

                this.previousPostageValues = angular.copy(this.postage);
            } else {
                //nothing?
            }
        });
    }

    $doCheck() {
        if (this.postageForm !== undefined && this.postageForm.$dirty) {

            //send the object back to the parent
            this.onChange({
                postageForm: this.postage
            });
        }
    }

    cancel() {
        //reset the fields, use angular.copy
        this.postage = angular.copy(this.previousPostageValues);
    }

    public generalFeeOptions: kendo.ui.NumericTextBoxOptions;
}

export class PostageComponent implements ng.IComponentOptions {
    templateUrl = "/app/components/postage/postage.component.html";
    controllerAs = "Vm";
    bindings: any;
    constructor() {
        this.bindings = {
            onChange: "&",
            source: "<",
        };

    }
    controller = ["$http", PostageComponentController];
}