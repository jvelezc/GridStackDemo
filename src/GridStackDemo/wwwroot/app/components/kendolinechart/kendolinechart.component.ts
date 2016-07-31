/// <reference path="../../../../typings/index.d.ts" />
interface IKendoLineChartComponentController {
}
class KendoLineChartComponentController implements IKendoLineChartComponentController {
    public ClaimsData: kendo.data.DataSource;
    public MyDashBoardClaimsChartInstance: kendo.dataviz.ui.Chart;
    constructor(private $http) {
    }
    $onInit() {
        this.ClaimsData = new kendo.data.DataSource({
            transport: {
                read: {
                    url: "/app/components/kendolinechart/GraphFakeData.json",
                    dataType: "json"
                }
            },
            sort: {
                field: "year",
                dir: "asc"
            }
        });
    }
}
export class KendoLineChartComponentComponent implements ng.IComponentOptions {
    templateUrl = "/app/components/kendolinechart/kendolinechart.component.html";
    controllerAs = "Vm";
    bindings: any;
    constructor() {
        this.bindings = {
            id: "@",
        };
    }
    controller = ["$http", KendoLineChartComponentController];
}