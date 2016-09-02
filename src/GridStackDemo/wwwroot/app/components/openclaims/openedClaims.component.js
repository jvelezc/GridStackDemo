/// <reference path="../../../../typings/index.d.ts" />
class OpenedClaimsComponentController {
    constructor($http) {
        this.$http = $http;
    }
    $onInit() {
    }
}
export class OpenedClaimsComponent {
    constructor() {
        this.templateUrl = "/app/components/openclaims/openedClaims.component.html";
        this.controllerAs = "Vm";
        this.controller = ["$http", OpenedClaimsComponentController];
        this.bindings = {
            key: "@",
        };
    }
}
