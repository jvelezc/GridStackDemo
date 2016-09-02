/// <reference path="../../../../typings/index.d.ts" />
class ReOComponentController {
    constructor($http) {
        this.$http = $http;
    }
}
export class SystemInfoComponent {
    constructor() {
        this.templateUrl = '/app/components/systeminfo/systeminfo.component.html';
        this.controllerAs = 'Vm';
        this.controller = ['$http', SystemInfoComponent];
        this.bindings = {
            key: "@"
        };
    }
}
