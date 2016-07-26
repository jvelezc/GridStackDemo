/// <reference path="../../../../typings/index.d.ts" />
class FlaggedClaimsComponentController {
    constructor($http) {
        this.$http = $http;
    }
    $onInit() {
    }
}
export class FlaggedClaimsComponent {
    constructor() {
        this.templateUrl = "/app/components/flaggedclaims/flaggedClaims.component.html";
        this.controllerAs = "Vm";
        this.controller = ["$http", FlaggedClaimsComponentController];
    }
}
