class ServerViewModel {
}
class ServerStatusComponentController {
    constructor($http) {
        this.$http = $http;
    }
    $onInit() {
        this.$http.get("app/components/serverstatus/fakeserverstatus.json")
            .success((response) => {
            this.DaysAgo = response.DaysAgo;
            this.StatusType = response.StatusType;
        });
        this.IntervalId = setInterval(() => {
            this.somefunction();
        }, 3000);
    }
    somefunction() {
        this.$http.get("app/components/serverstatus/fakeserverstatus.json").success((response) => {
            this.DaysAgo = response.DaysAgo;
            this.StatusType = response.StatusType;
        });
    }
}
export class ServerStatusComponent {
    constructor() {
        this.templateUrl = "/app/components/serverstatus/serverstatus.component.html";
        this.controllerAs = "Vm";
        this.controller = ["$http", ServerStatusComponentController];
        this.bindings = {};
    }
}
