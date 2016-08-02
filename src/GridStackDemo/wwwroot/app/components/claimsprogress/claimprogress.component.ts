/// <reference path="../../../../typings/index.d.ts" />
interface IClaimProgressComponentController {
}
class ClaimProgressComponentController implements IClaimProgressComponentController {
    public value:string ="0%";
    private intervalId: any;
    constructor(private $http) {
      
    }
    $onInit() {
        this.$http.get("app/components/claimsprogress/fakeprogress.json").success((response) => {
            this.value = response.ClaimsProgress;
        });

         this.intervalId = setInterval(() => {
            this.$http.get("app/components/claimsprogress/fakeprogress.json").success((response) => {
                this.value = response.ClaimsProgress;
                this.IsTracking();
            });
        }, 3000);

         
    }
    IsTracking()
    {
        if (this.value === "100%")
        {
            clearInterval(this.intervalId);
        }
    }

}
export class ClaimProgressComponent implements ng.IComponentOptions {
    templateUrl = "/app/components/claimsprogress/claimprogress.component.html";
    controllerAs = "Vm";
    bindings: any;
    constructor() {
        //No configurations needed so far. 
        this.bindings = {
       
        };
    }

    controller = ["$http", ClaimProgressComponentController];
}