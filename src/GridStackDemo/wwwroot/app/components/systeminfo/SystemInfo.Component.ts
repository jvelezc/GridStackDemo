/// <reference path="../../../../typings/index.d.ts" />

class ReOComponentController   {

    constructor(private $http: ng.IHttpService) {

    }

}

export class SystemInfoComponent implements ng.IComponentOptions {
    templateUrl = '/app/components/systeminfo/systeminfo.component.html';
    controllerAs = 'Vm';
    bindings: any;
    constructor() {
        this.bindings = {
            key: "@"
        };
    }

    controller = ['$http', SystemInfoComponent];
}