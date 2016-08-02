/// <reference path="../../../../typings/index.d.ts" />
interface IFilterTimelineComponentController extends ng.IComponentController {
}
class FilterTimelineComponentController implements IFilterTimelineComponentController {

    constructor(private $http) {
    }

    $onInit() {
    }
}
export class FilterTimelineComponent implements ng.IComponentOptions {
    templateUrl = "/app/components/filtertimeline/filtertimeline.component.html";
    controllerAs = "Vm";
    bindings: any;
    constructor() {
        this.bindings = {
            key: "@",
        };
    }
    controller = ["$http", FilterTimelineComponent];
}