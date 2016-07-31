/// <reference path="../../../../typings/index.d.ts" />
interface IReOpenedClaimsComponentController {
}

class ReOpenedClaimsComponentController implements IReOpenedClaimsComponentController {

    constructor(private $http) {

    }

    $onInit() {
    }
}


export class ReOpenedClaimsComponent implements ng.IComponentOptions {
    templateUrl = '/app/components/reopenedclaims/reopenedClaims.component.html';
    controllerAs = 'Vm';
    bindings;
    constructor() {
        this.bindings = {
            reOpenedClaims: '<',
            reOpenedClaimsPercentage: '<',
        };
    }

    controller = ['$http', ReOpenedClaimsComponentController];
}