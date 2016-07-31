/// <reference path="../../../../typings/index.d.ts" />
interface IFlaggedClaimsComponentController extends ng.IComponentController {
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
    bindings: any;
    constructor() {
        this.bindings = {
            key: "@",
        };
    }
    controller = ["$http", FlaggedClaimsComponentController];
}