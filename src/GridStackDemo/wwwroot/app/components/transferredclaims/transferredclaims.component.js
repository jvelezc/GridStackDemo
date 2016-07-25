/// <reference path="../../../../typings/index.d.ts" />
class OpenedClaimsComponentController {
    constructor($http) {
        this.$http = $http;
    }
    $onInit() {
    }
}
export class TransferredClaimsComponent {
    constructor() {
        this.templateUrl = "/app/components/transferredclaims/transferredclaims.component.html";
        this.controllerAs = "Vm";
        this.controller = ["$http", OpenedClaimsComponentController];
    }
}
