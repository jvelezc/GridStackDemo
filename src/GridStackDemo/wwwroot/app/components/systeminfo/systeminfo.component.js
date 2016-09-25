System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var SystemInfoComponentController, SystemInfoComponent;
    return {
        setters:[],
        execute: function() {
            class SystemInfoComponentController {
                constructor() {
                }
                $onInit() {
                    // defining data sources for it's child components
                    this.operationHourDataSource = {
                        data: {
                            url: "app/components/operationhours/operationHoursFakeData.json"
                        }
                    };
                    this.holidayDatesDataSource = {
                        data: {
                            url: "/app/components/holidaydates/holidayDatesFakeData.json"
                        },
                        post: {
                            url: "/app/components/holidaydates/holidayDatesFakeData.json"
                        },
                        update: {
                            url: "/app/components/holidaydates/holidayDatesFakeData.json"
                        },
                        delete: {
                            url: "/app/components/holidaydates/holidayDatesFakeData.json"
                        }
                    };
                    this.postageDataSource = {
                        data: {
                            url: "app/components/postage/postageFakeData.json"
                        }
                    };
                    this.ropSetingsDataSource = {
                        data: {
                            url: "app/components/ropsettings/ropSettingsFakeData.json"
                        }
                    };
                    this.claimSettingsHourDataSource = {
                        data: {
                            url: "app/components/claimsDepartmentSettings/claimsDepartmentSettingsFakeData.json"
                        }
                    };
                }
                getOperationHoursFormData(operationHoursForm) {
                    this.operationHoursForm = operationHoursForm;
                }
                getPostageForm(postageForm) {
                    this.postageForm = postageForm;
                }
                getRopSettingsForm(ropSettingsForm) {
                    this.ropSettingsForm = ropSettingsForm;
                }
                getClaimSettingsForm(claimSettingsForm) {
                    this.claimSettingsForm = claimSettingsForm;
                }
            }
            exports_1("SystemInfoComponentController", SystemInfoComponentController);
            class SystemInfoComponent {
                constructor() {
                    this.templateUrl = "/app/components/systeminfo/systeminfo.component.html";
                    this.controllerAs = "Vm";
                    this.controller = [SystemInfoComponentController];
                }
            }
            exports_1("SystemInfoComponent", SystemInfoComponent);
        }
    }
});
