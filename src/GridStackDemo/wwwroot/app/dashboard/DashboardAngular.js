/// <reference path="chartdisplaystrategy.ts" />
/// <reference path="../../../typings/globals/kendo-ui/index.d.ts" />
/// <reference path="../../../typings/index.d.ts" />
import { WidgetLookUp } from "./WidgetLookUp";
import { StrategyContext } from "../common/StrategyContext";
import { ChartDisplayStrategy } from "./ChartDisplayStrategy";
import { GaugeDisplayStrategy } from "./GaugeDisplayStrategy";
export class DashboardAngular {
    constructor() {
        //
        // static $inject = ['$scope'];
        //constructor(private $scope: ng.IScope)
        //{
        //http://stackoverflow.com/questions/28470493/kendo-grid-getting-an-instance-in-a-angular-directive
        //  ////  This is a way to tap into the kendo .. but i dont need it. I know i wont remember this :) so i left it here. 
        //  //  this.$scope.$on("kendoRendered", (event) => {
        //  //      console.log("happened"); 
        //  //      console.log(event); 
        //  //      let radialGaugeInstance = this.RadialGaugeInstance;
        //  //  }); 
        //}
        //These are the names of the components in  html. I could not find a way to get the instance object for the chart via angular. 
        this.$ = angular.element;
        this.RadialGaugeSelectedNumber = 10;
        this.StrategyContext = new StrategyContext();
        // This would only be filled up initially  if someone has saved some data... I imagine I need a 
        // page loader where I pass some data about the current user that fetches his current configuration. 
        this.Widgets = [];
        this.Options = {
            cellHeight: 150,
            verticalMargin: 10,
            alwaysShowResizeHandle: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
        };
        this.ClaimsData = new kendo.data.DataSource({
            transport: {
                read: {
                    url: "/app/dashboard/GraphFakeData.json",
                    dataType: "json"
                }
            },
            sort: {
                field: "year",
                dir: "asc"
            }
        });
        this.ActivityGridOptions = {
            dataSource: {
                transport: {
                    read: "/app/dashboard/ActivityGridFakeData.json",
                    dataType: "json"
                },
                schema: {
                    model: {
                        fields: {
                            ClaimNumber: { type: "string" },
                            Subject: { type: "string" },
                            Priority: { type: "string" },
                            Due: { type: "date" },
                        }
                    }
                },
                pagesize: 20
            },
            sortable: true,
            columns: [
                { field: "ClaimNumber" },
                { field: "Subject" },
                { field: "Priority" },
                { field: "Due", format: "{0:MM-dd-yyyy}" },
            ]
        };
    }
    RefreshChart() {
        //Investigate if this actually refreshes data 
        this.ClaimsData.read();
        this.ClaimsData.view();
    }
    AddRadialGaugeWidget() {
        if (!this.$("#" + WidgetLookUp.RadialGaugeInstance).length) {
            let newWidget = { id: WidgetLookUp.RadialGaugeInstance, x: 0, y: 0, width: 3, height: 2 };
            this.Widgets.push(newWidget);
        }
    }
    AddClaimsChartWidget() {
        //Business rule do not create two widgets that are the same.  
        if (!this.$("#" + WidgetLookUp.MyDashBoardClaimsChartInstance).length) {
            let newWidget = { id: WidgetLookUp.MyDashBoardClaimsChartInstance, x: 0, y: 0, width: 10, height: 2 };
            this.Widgets.push(newWidget);
        }
    }
    AddActivityGridWidget() {
        //Business rule do not create two widgets that are the same.  
        if (!this.$("#" + WidgetLookUp.ActivityGridInstance).length) {
            let newWidget = { id: WidgetLookUp.ActivityGridInstance, x: 0, y: 0, width: 10, height: 2 };
            this.Widgets.push(newWidget);
        }
    }
    AddOpenedPanelWidget() {
        if (!this.$("#" + WidgetLookUp.OpenedPanelInstance).length) {
            let newWidget = { id: WidgetLookUp.OpenedPanelInstance, x: 0, y: 0, width: 3, height: 2 };
            this.Widgets.push(newWidget);
        }
    }
    AddReOpenedPanelWidget() {
        if (!this.$("#" + WidgetLookUp.ReOpenedPanelInstance).length) {
            let newWidget = { id: WidgetLookUp.ReOpenedPanelInstance, x: 0, y: 0, width: 3, height: 2 };
            this.Widgets.push(newWidget);
        }
    }
    AddClosedPanelWidget() {
        if (!this.$("#" + WidgetLookUp.ClosedPanelInstance).length) {
            let newWidget = { id: WidgetLookUp.ClosedPanelInstance, x: 0, y: 0, width: 3, height: 2 };
            this.Widgets.push(newWidget);
        }
    }
    AddAssignedPanelWidget() {
        if (!this.$("#" + WidgetLookUp.AssignedPanelInstance).length) {
            let newWidget = { id: WidgetLookUp.AssignedPanelInstance, x: 0, y: 0, width: 3, height: 2 };
            this.Widgets.push(newWidget);
        }
    }
    RemoveWidget(w) {
        let index = this.Widgets.indexOf(w);
        this.Widgets.splice(index, 1);
    }
    //Tracking of the events for each widget...
    OnChange(event, items) {
    }
    ;
    OnDragStart(event, ui) {
    }
    ;
    OnDragStop(event, ui) {
    }
    OnResizeStart(event, ui) {
    }
    OnResizeStop(event, ui) {
        let item = ui.element.data('_gridstack_node');
        if (item) {
            if (item.id === WidgetLookUp.MyDashBoardClaimsChartInstance) {
                this.StrategyContext.setWidgetStrategy(new ChartDisplayStrategy());
                this.StrategyContext.Display(item, this.MyDashBoardClaimsChartInstance);
            }
            else if (item.id === WidgetLookUp.RadialGaugeInstance) {
                this.StrategyContext.setWidgetStrategy(new GaugeDisplayStrategy());
                this.StrategyContext.Display(item, this.RadialGaugeInstance);
            }
        }
    }
    ;
    OnItemAdded(item) {
    }
    ;
    OnItemRemoved(item) {
    }
    ;
}
