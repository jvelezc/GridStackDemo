/// <reference path="../../../../typings/index.d.ts" />
interface IAssignedClaimsComponentController {
    key: string;
 
   // functionBinding: () => any;
}
class AssignedClaimsComponentController implements IAssignedClaimsComponentController {
    public key: string;
    public time: string; 
    constructor(private $http) {
    }
    $onInit() {

    }
    $onChanges(changeObj)
    {
        console.log(changeObj); 
    }
    OnChange(time)
    {
        console.log("time changed"); 
        console.log(time); 
    }
}
export class AssignedClaimsComponent implements ng.IComponentOptions {
    templateUrl = "/app/components/assigned/assignedclaims.component.html";
    controllerAs = "Vm";
    bindings: any;

    constructor() {
        this.bindings = {
            key: "@",
            time :"="
        };

    }

    controller = ["$http", AssignedClaimsComponentController];
}