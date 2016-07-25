/// <reference path="../../../../typings/index.d.ts" />
interface ITransferredClaimsComponentController {
}
class OpenedClaimsComponentController implements ITransferredClaimsComponentController {

    constructor(private $http) {
    }
    $onInit() {
    }
}
export class TransferredClaimsComponent implements ng.IComponentOptions {
    templateUrl = "/app/components/transferredclaims/transferredclaims.component.html";
    controllerAs = "Vm";
   
    constructor() {
      
    }

    controller = ["$http", OpenedClaimsComponentController];
}