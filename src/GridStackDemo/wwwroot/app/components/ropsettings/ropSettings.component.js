System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ROPSettings, ROPSettingsComponentController, ROPSettingsComponent;
    return {
        setters:[],
        execute: function() {
            class ROPSettings {
            }
            class ROPSettingsComponentController {
                constructor($http) {
                    this.$http = $http;
                }
                $onInit() {
                    this.ropSettingsOptions = {
                        format: "#",
                        max: 50,
                        min: 0,
                        decimals: 0
                    };
                    //call API to retrieve the data as well...
                    this.$http.get("app/components/ropsettings/ropSettingsFakeData.json").success((response) => {
                        if (response !== undefined) {
                            this.ropSettings = new ROPSettings();
                            this.ropSettings.daysOfHistoryShown = response.daysOfHistoryShown;
                            //save previous value
                            this.previousRopSettings = new ROPSettings();
                            this.previousRopSettings = angular.copy(this.ropSettings);
                        }
                        else {
                        }
                    });
                }
                $doCheck() {
                    if (this.ropSettingsForm !== undefined && this.ropSettingsForm.$dirty) {
                        //send the object back to the parent
                        this.onChange({
                            ropSettingsForm: this.ropSettings
                        });
                    }
                }
                cancel() {
                    //reset the fields, use angular.copy
                    this.ropSettings = angular.copy(this.previousRopSettings);
                }
            }
            exports_1("ROPSettingsComponentController", ROPSettingsComponentController);
            class ROPSettingsComponent {
                constructor() {
                    this.templateUrl = "/app/components/ropsettings/ropsettings.component.html";
                    this.controllerAs = "Vm";
                    this.controller = ["$http", ROPSettingsComponentController];
                    this.bindings = {
                        onChange: "&",
                        source: "<",
                    };
                }
            }
            exports_1("ROPSettingsComponent", ROPSettingsComponent);
        }
    }
});
