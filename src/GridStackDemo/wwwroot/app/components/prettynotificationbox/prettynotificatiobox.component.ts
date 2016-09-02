export class PrettyNotificationsController
{
    public key: string;
    constructor(private $http: ng.IHttpService)
    {
  
    }

  
}


export class PrettyNotificationsComponent implements ng.IComponentOptions {
    templateUrl = "/app/components/prettynotificationbox/prettynotificatiobox.component.html";
    controllerAs = "Vm";
    bindings: any;
    constructor() {
        this.bindings = {
            key: "@",
        };
    }

    controller = ["$http",PrettyNotificationsController];
}