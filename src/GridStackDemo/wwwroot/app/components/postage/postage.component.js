System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Postage, PostageComponentController, PostageComponent;
    return {
        setters:[],
        execute: function() {
            class Postage {
            }
            class PostageComponentController {
                constructor($http) {
                    this.$http = $http;
                }
                $onInit() {
                    this.generalFeeOptions = {
                        format: "c3",
                        decimals: 3
                    };
                    //call API to retrieve the data as well...
                    this.$http.get(this.source.data.url).success((response) => {
                        if (response !== undefined) {
                            this.postage = new Postage();
                            this.postage.domesticFee = response.domestic;
                            this.postage.internationalFee = response.international;
                            this.postage.fee = response.fee;
                            //set the previous values
                            this.previousPostageValues = new Postage();
                            this.previousPostageValues = angular.copy(this.postage);
                        }
                        else {
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
            }
            exports_1("PostageComponentController", PostageComponentController);
            class PostageComponent {
                constructor() {
                    this.templateUrl = "/app/components/postage/postage.component.html";
                    this.controllerAs = "Vm";
                    this.controller = ["$http", PostageComponentController];
                    this.bindings = {
                        onChange: "&",
                        source: "<",
                    };
                }
            }
            exports_1("PostageComponent", PostageComponent);
        }
    }
});
