/// <reference path="../../../../typings/index.d.ts" />
class ROPSettings {
    public daysOfHistoryShown: number;
}

interface ROPSettingsComponentControllerInterface {
    ropSettings: ROPSettings;

}

export class ROPSettingsComponentController implements ROPSettingsComponentControllerInterface {
    public ropSettings: ROPSettings;
    public previousRopSettings: ROPSettings;
    public ropSettingsForm:any;

    public onChange: Function;

    constructor(private $http) {
    }

    $onInit() {
        this.ropSettingsOptions = {
            format: "#",
            max: 50,
            min: 0,
            decimals: 0
        };

        //call API to retrieve the data as well...
        this.$http.get("app/components/ropsettings/ropSettingsFakeData.json").success((response: any) => {
            if (response !== undefined) {
                this.ropSettings = new ROPSettings();
                this.ropSettings.daysOfHistoryShown = response.daysOfHistoryShown;

                //save previous value
                this.previousRopSettings = new ROPSettings();
                this.previousRopSettings.daysOfHistoryShown = response.daysOfHistoryShown;

            } else {
                //nothing?
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

    public ropSettingsOptions: kendo.ui.NumericTextBoxOptions;
}

export class ROPSettingsComponent implements ng.IComponentOptions {
    templateUrl = "/app/components/ropsettings/ropsettings.component.html";
    controllerAs = "Vm";
    bindings: any;
    constructor() {
        this.bindings = {
            onChange: "&",
        };

    }
    controller = ["$http", ROPSettingsComponentController];
}