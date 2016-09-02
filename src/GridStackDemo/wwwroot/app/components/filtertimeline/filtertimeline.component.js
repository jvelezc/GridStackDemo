/// <reference path="../../../../typings/index.d.ts" />
class FilterTimelineComponentController {
    constructor($http) {
        this.$http = $http;
    }
    $onInit() {
    }
}
export class FilterTimelineComponent {
    constructor() {
        this.templateUrl = "/app/components/filtertimeline/filtertimeline.component.html";
        this.controllerAs = "Vm";
        this.controller = ["$http", FilterTimelineComponent];
        this.bindings = {
            key: "@",
        };
    }
}
