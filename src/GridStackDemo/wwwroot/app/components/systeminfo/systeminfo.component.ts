/// <reference path="../../../../typings/index.d.ts" />
import {GeneralDataSource} from "../common/GeneralDataSource";

export class SystemInfoComponentController {

    //operation tab
    public operationHoursForm: any;
    public postageForm: any;
    public ropSettingsForm: any;

    //claims department tab
    public claimSettingsForm: any;

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

    public getOperationHoursFormData(operationHoursForm) {
        this.operationHoursForm = operationHoursForm;
    }

    public getPostageForm(postageForm) {
        this.postageForm = postageForm;
    }

    public getRopSettingsForm(ropSettingsForm) {
        this.ropSettingsForm = ropSettingsForm;
    }

    public getClaimSettingsForm(claimSettingsForm) {
        this.claimSettingsForm = claimSettingsForm;
    }

    public operationHourDataSource: GeneralDataSource;
    public holidayDatesDataSource: GeneralDataSource;
    public postageDataSource: GeneralDataSource;
    public ropSetingsDataSource: GeneralDataSource;
    public claimSettingsHourDataSource: GeneralDataSource;
}

export class SystemInfoComponent implements ng.IComponentOptions {
    templateUrl = "/app/components/systeminfo/systeminfo.component.html";
    controllerAs = "Vm";
    controller = [SystemInfoComponentController];
}