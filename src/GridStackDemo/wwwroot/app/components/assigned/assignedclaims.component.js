/// <reference path="../../../../typings/index.d.ts" />
class AssignedClaimsComponentController {
    constructor($http) {
        this.$http = $http;
    }
    $onInit() {
    }
}
export class AssignedClaimsComponent {
    constructor() {
        this.templateUrl = "/app/components/assigned/assignedclaims.component.html";
        this.controllerAs = "Vm";
        this.controller = ["$http", AssignedClaimsComponentController];
    }
}
