
class ServerViewModel {
    StatusType: string;
    DaysAgo: number;
}
 
class ServerStatusComponentController {
    public DaysAgo: number;
    public StatusType: string;
    public IntervalId: any;
    constructor(private $http: ng.IHttpService) {

    }
    $onInit() {
        this.$http.get("app/components/serverstatus/fakeserverstatus.json")
            .success((response: ServerViewModel) => {
                this.DaysAgo = response.DaysAgo;
                this.StatusType = response.StatusType;

            });
        this.IntervalId = setInterval(() => {
          this.somefunction()
        }, 3000);
    }

    somefunction()
    {
  this.$http.get("app/components/serverstatus/fakeserverstatus.json").success(
                (response: ServerViewModel) => {
                this.DaysAgo = response.DaysAgo;
                this.StatusType = response.StatusType;
            });
    }
}


export class ServerStatusComponent implements ng.IComponentOptions
{
    bindings: any; 
    constructor()
    {
        this.bindings = {
        };
    }
    templateUrl = "/app/components/serverstatus/serverstatus.component.html";
    controllerAs = "Vm";
    controller = ["$http", ServerStatusComponentController];
}

