System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ClaimSettingsConstants, ClaimsSettings, ClaimsDepartmentSettingsComponentController, ClaimsDepartmentSettingsComponent;
    return {
        setters:[],
        execute: function() {
            class ClaimSettingsConstants {
                static get DEFAULT_DAYS_OF_PRIOR_CLAIM_SHOWN() { return 180; }
            }
            class ClaimsSettings {
            }
            class ClaimsDepartmentSettingsComponentController {
                constructor($http) {
                    this.$http = $http;
                }
                $onInit() {
                    this.claimSettingsOptions = {
                        format: "#",
                        decimals: 0,
                        min: 0
                    };
                    this.claimSettings = new ClaimsSettings();
                    this.previousClaimSettings = new ClaimsSettings();
                    //call the Api
                    this.$http.get(this.source.data.url).success((response) => {
                        if (response !== undefined) {
                            this.claimSettings.eMessaging = response.eMessaging;
                            this.claimSettings.daysOfPriorClaimShown = (response.daysOfPriorClaimShown) ? response.daysOfPriorClaimShown : ClaimSettingsConstants.DEFAULT_DAYS_OF_PRIOR_CLAIM_SHOWN;
                            //set the previous values
                            this.previousClaimSettings = angular.copy(this.claimSettings);
                        }
                        else {
                        }
                    });
                }
                $doCheck() {
                    if (this.claimSettingsForm !== undefined && this.claimSettingsForm.$dirty) {
                        //send the object back to the parent
                        this.onChange({
                            claimSettingsForm: this.claimSettings
                        });
                    }
                }
                cancel() {
                    //reset the fields, use angular.copy
                    this.claimSettings = angular.copy(this.previousClaimSettings);
                }
            }
            exports_1("ClaimsDepartmentSettingsComponentController", ClaimsDepartmentSettingsComponentController);
            class ClaimsDepartmentSettingsComponent {
                constructor() {
                    this.templateUrl = "/app/components/claimsDepartmentSettings/claimsDepartmentSettings.component.html";
                    this.controllerAs = "Vm";
                    this.controller = ["$http", ClaimsDepartmentSettingsComponentController];
                    this.bindings = {
                        onChange: "&",
                        source: "<",
                    };
                }
            }
            exports_1("ClaimsDepartmentSettingsComponent", ClaimsDepartmentSettingsComponent);
        }
    }
});
