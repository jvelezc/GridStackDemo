/// <reference path="../../../../typings/index.d.ts" />
class ClaimSettingsConstants {
    public static get DEFAULT_DAYS_OF_PRIOR_CLAIM_SHOWN(): number { return 180; }
}

class ClaimsSettings {
    public eMessaging: boolean;
    public daysOfPriorClaimShown: number;
}
interface ClaimsDepartmentSettingsComponentControllerInterface {
    claimSettings: ClaimsSettings;
}

export class ClaimsDepartmentSettingsComponentController implements ClaimsDepartmentSettingsComponentControllerInterface {
    public claimSettings: ClaimsSettings;
    public previousClaimSettings: ClaimsSettings;

    public claimSettingsForm: any;

    public onChange: Function;

    constructor(private $http) {
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
        this.$http.get("app/components/claimsDepartmentSettings/claimsDepartmentSettingsFakeData.json").success((response: any) => {
            if (response !== undefined) {
                this.claimSettings.eMessaging = response.eMessaging;
                this.claimSettings.daysOfPriorClaimShown = (response.daysOfPriorClaimShown) ? response.daysOfPriorClaimShown : ClaimSettingsConstants.DEFAULT_DAYS_OF_PRIOR_CLAIM_SHOWN;

                //set the previous values
                this.previousClaimSettings = angular.copy(this.claimSettings);
            } else {
                //nothing?
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

    public claimSettingsOptions: kendo.ui.NumericTextBoxOptions;
}

export class ClaimsDepartmentSettingsComponent implements ng.IComponentOptions {
    templateUrl = "/app/components/claimsDepartmentSettings/claimsDepartmentSettings.component.html";
    controllerAs = "Vm";
    bindings: any;
    constructor() {
        this.bindings = {
            onChange: "&",
        };

    }
    controller = ["$http", ClaimsDepartmentSettingsComponentController];
}