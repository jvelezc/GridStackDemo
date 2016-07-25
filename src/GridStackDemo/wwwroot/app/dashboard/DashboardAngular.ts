/// <reference path="chartdisplaystrategy.ts" />
/// <reference path="../../../typings/globals/kendo-ui/index.d.ts" />
/// <reference path="../../../typings/index.d.ts" />


//Documentation 
//http://stackoverflow.com/questions/21220886/kendo-angular-chart-data
//http://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/chart
import * as $ from 'jquery';
import * as _ from "underscore";
import {Widget} from "./Widget";
import {WidgetLookUp} from "./WidgetLookUp";
import {StrategyContext} from "../common/StrategyContext";
import {ChartDisplayStrategy} from "./ChartDisplayStrategy";
import {GaugeDisplayStrategy} from "./GaugeDisplayStrategy";
interface IDashBoardAngular
{
   
    AddClaimsChartWidget(): void;
    AddRadialGaugeWidget(): void;
    AddActivityGridWidget(): void;
    AddReOpenedPanelWidget(): void;
    AddAssignedPanelWidget(): void;
    RemoveWidget(w: Widget):void;
    OnChange(event, items):void;
    OnDragStart(event, ui):void; 
    OnDragStop(event, ui):void; 
    OnResizeStart(event, ui):void;
    OnResizeStop(event, ui):void;
    OnItemAdded(item):void;
    OnItemRemoved(item): void; 
    $: ng.IAugmentedJQueryStatic;
}
export class DashboardAngular implements IDashBoardAngular {
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
    public $ = angular.element;
       
    public Gridstacker: any;//gridstack handler
    public MyDashBoardClaimsChartInstance: kendo.dataviz.ui.Chart;
    public RadialGaugeInstance: kendo.dataviz.ui.RadialGauge;
    public RadialGaugeSelectedNumber = 10; 
    public StrategyContext = new StrategyContext();
    public ActivityGridInstance: kendo.ui.Grid; 
  
    // This would only be filled up initially  if someone has saved some data... I imagine I need a 
    // page loader where I pass some data about the current user that fetches his current configuration. 
    public Widgets: Array<Widget> = [
        //{ id: WidgetLookUp.radialGauge, x: 0, y: 0, width: 1, height: 1 },
        //{ id: WidgetLookUp.myDashBoardClaimsChart, x: 0, y: 0, width: 3, height: 1 }
    ];
   

    public Options: {} = {
        
        cellHeight: 150,
        verticalMargin: 10,
        alwaysShowResizeHandle: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    };



    public RefreshChart()
    {
       
        //Investigate if this actually refreshes data 
        this.ClaimsData.read();
        this.ClaimsData.view();
    }


    public ClaimsData: kendo.data.DataSource = new kendo.data.DataSource({
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
    public ActivityGridOptions: kendo.ui.GridOptions =
    {
       
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
    }

    public AddRadialGaugeWidget():void
    {
        
        if (!this.$("#" + WidgetLookUp.RadialGaugeInstance).length) {
            let newWidget = { id: WidgetLookUp.RadialGaugeInstance, x: 0, y: 0, width: 3, height: 2 };
            this.Widgets.push(newWidget);
        }
    }
    public AddClaimsChartWidget() :void {
        //Business rule do not create two widgets that are the same.  
        if (!this.$("#" + WidgetLookUp.MyDashBoardClaimsChartInstance).length) {
            let newWidget = { id: WidgetLookUp.MyDashBoardClaimsChartInstance, x: 0, y: 0, width: 10, height: 2 };
            this.Widgets.push(newWidget);
        }
    }
    public AddActivityGridWidget(): void {
        //Business rule do not create two widgets that are the same.  
        if (!this.$("#" + WidgetLookUp.ActivityGridInstance).length) {
            let newWidget = { id: WidgetLookUp.ActivityGridInstance, x: 0, y: 0, width: 10, height: 2 };
            this.Widgets.push(newWidget);
        }
    }

    
    public AddOpenedPanelWidget():void
    {
        if (!this.$("#" + WidgetLookUp.OpenedPanelInstance).length) {
            let newWidget = { id: WidgetLookUp.OpenedPanelInstance, x: 0, y: 0, width: 3, height: 2 };
            this.Widgets.push(newWidget);
        }
    }

    public AddReOpenedPanelWidget(): void {
    
        if (!this.$("#" + WidgetLookUp.ReOpenedPanelInstance).length) {
            let newWidget = { id: WidgetLookUp.ReOpenedPanelInstance, x: 0, y: 0, width: 3, height: 2 };
            this.Widgets.push(newWidget);
        }
    }


    public AddClosedPanelWidget(): void {

        if (!this.$("#" + WidgetLookUp.ClosedPanelInstance).length) {
            let newWidget = { id: WidgetLookUp.ClosedPanelInstance, x: 0, y: 0, width: 3, height: 2 };
            this.Widgets.push(newWidget);
        }
    }

    public AddAssignedPanelWidget(): void {

        if (!this.$("#" + WidgetLookUp.AssignedPanelInstance).length) {
            let newWidget = { id: WidgetLookUp.AssignedPanelInstance, x: 0, y: 0, width: 3, height: 2 };
            this.Widgets.push(newWidget);
        }
    }




    
    public RemoveWidget(w: Widget): void
    {
        let index = this.Widgets.indexOf(w);
        this.Widgets.splice(index, 1);
    }
  
    //Tracking of the events for each widget...
    public OnChange(event, items): void{
        
    
    };
    public OnDragStart(event, ui): void {
        
    };
    public OnDragStop(event, ui): void{
       
    }
    public OnResizeStart(event, ui): void {
      
    }

    public OnResizeStop(event, ui): void {
        let item = ui.element.data('_gridstack_node');
        if (item)
        {
            if (item.id === WidgetLookUp.MyDashBoardClaimsChartInstance) {
                this.StrategyContext.setWidgetStrategy(new ChartDisplayStrategy());
                this.StrategyContext.Display(item, this.MyDashBoardClaimsChartInstance);
            }
            else if (item.id === WidgetLookUp.RadialGaugeInstance)
            {
                this.StrategyContext.setWidgetStrategy(new GaugeDisplayStrategy()); 
                this.StrategyContext.Display(item, this.RadialGaugeInstance);
            }
         
        }
    };
    public OnItemAdded(item): void {
      
    };
    public OnItemRemoved(item): void{
      
    };


 
}

