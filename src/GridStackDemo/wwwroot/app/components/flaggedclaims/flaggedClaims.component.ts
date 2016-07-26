/// <reference path="../../../../typings/index.d.ts" />
interface IFlaggedClaimsComponentController {
}
class FlaggedClaimsComponentController implements IFlaggedClaimsComponentController {

    constructor(private $http) {
    }
    $onInit() {
    }
}
export class FlaggedClaimsComponent implements ng.IComponentOptions {
    templateUrl = "/app/components/flaggedclaims/flaggedClaims.component.html";
    controllerAs = "Vm";
    constructor() {
    }

    controller = ["$http", FlaggedClaimsComponentController];
}