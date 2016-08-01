/// <reference path="../../../../typings/index.d.ts" />
interface IKendoLineChartComponentController {
}
class KendoLineChartComponentController implements IKendoLineChartComponentController {
    public ClaimsData: kendo.data.DataSource;
    public MyDashBoardClaimsChartInstance: kendo.dataviz.ui.Chart;
    public key; //this comes straigt from our consumer. <kendo-line key= "keythatidentifiescomponent"><
    public Series: kendo.dataviz.ui.ChartSeriesItem[];
    public $: JQueryStatic = angular.element; 
    constructor(private scope: ng.IScope, private $http) {
     
    }

    $onInit() {

        //There are 4 caveats in this code.
        // 1.) 
        this.Series = [
            { field: 'reopenedclaims', name: 'assigned claims' },
            { field: 'transferred', name: 'assigned claims' },
            { field: 'assignedclaims', name: 'assigned claims' },
            { field: 'flaggedclaims', name: 'flagged claims' },
            { field: 'closedclaims', name: 'closed claims' },
            { field: 'openclaims', name: 'open claims' }
        ];
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
        this.scope.$on("kendoRendered", () => {
            this.MyDashBoardClaimsChartInstance.setOptions({
                tooltip: {
                    visible: true,
                    format: "{0}%",
                    template: "#= series.name #: #= value #"
                }
            });

        });
        }
      
      
    }


}
export class KendoLineChartComponentComponent implements ng.IComponentOptions {
    templateUrl = "/app/components/kendolinechart/kendolinechart.component.html";
    controllerAs = "Vm";
 
    bindings: any;
    constructor() {
        this.bindings = {
            key: "@",
        };
    }
    controller = ["$scope","$http", KendoLineChartComponentController];
}