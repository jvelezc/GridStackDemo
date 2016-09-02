/// <reference path="../../../../typings/index.d.ts" />
class ReOpenedClaimsComponentController {
    constructor($http) {
        this.$http = $http;
    }
    $onInit() {
    }
}
export class ReOpenedClaimsComponent {
    constructor() {
        this.templateUrl = '/app/components/reopenedclaims/reopenedClaims.component.html';
        this.controllerAs = 'Vm';
        this.controller = ['$http', ReOpenedClaimsComponentController];
        this.bindings = {
            key: "@"
        };
    }
}
