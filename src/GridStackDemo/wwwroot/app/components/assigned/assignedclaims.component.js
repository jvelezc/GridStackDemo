/// <reference path="../../../../typings/index.d.ts" />
class AssignedClaimsComponentController {
    constructor($http) {
        this.$http = $http;
    }
    $onInit() {
    }
    $onChanges(changeObj) {
        console.log(changeObj);
    }
    OnChange(time) {
        console.log("time changed");
        console.log(time);
    }
}
export class AssignedClaimsComponent {
    constructor() {
        this.templateUrl = "/app/components/assigned/assignedclaims.component.html";
        this.controllerAs = "Vm";
        this.controller = ["$http", AssignedClaimsComponentController];
        this.bindings = {
            key: "@",
            time: "="
        };
    }
}
