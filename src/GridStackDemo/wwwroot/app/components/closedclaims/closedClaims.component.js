/// <reference path="../../../../typings/index.d.ts" />
class ClosedClaimsComponentController {
    constructor($http) {
        this.$http = $http;
    }
    $onInit() {
    }
}
export class ClosedClaimsComponent {
    constructor() {
        this.templateUrl = "/app/components/closedclaims/closedClaims.component.html";
        this.controllerAs = "Vm";
        this.controller = ["$http", ClosedClaimsComponentController];
    }
}
