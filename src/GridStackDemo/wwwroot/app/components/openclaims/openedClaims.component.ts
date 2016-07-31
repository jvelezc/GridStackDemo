/// <reference path="../../../../typings/index.d.ts" />
interface IReOpenedClaimsComponentController {
}
class OpenedClaimsComponentController implements IReOpenedClaimsComponentController {

    constructor(private $http) {
    }
    $onInit() {

    }
}
export class OpenedClaimsComponent implements ng.IComponentOptions {
    templateUrl = "/app/components/openclaims/openedClaims.component.html";
    controllerAs = "Vm";
    bindings: any;
    constructor() {
        this.bindings = {
            key : "@",
        };
    }

    controller = ["$http", OpenedClaimsComponentController];
}