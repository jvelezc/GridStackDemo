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
    RemoveWidget(w: Widget):void;
    OnChange(event, items):void;
    OnDragStart(event, ui):void; 
    OnDragStop(event, ui):void; 
    OnResizeStart(event, ui):void;
    OnResizeStop(event, ui):void;
    OnItemAdded(item):void;
    OnItemRemoved(item):void; 
}
export class DashboardAngular implements IDashBoardAngular {
    static $inject = ['$scope'];
    constructor(private $scope: ng.IScope)
    {
      ////  This is a way to tap into the kendo instance.. but i dont need it. 
      //  this.$scope.$on("kendoRendered", (event) => {
      //      console.log("happened"); 
      //      console.log(event); 
      //      let radialGaugeInstance = this.RadialGaugeInstance;

      //  }); 
    }
   
   

    //These are the names of the components in  html. I could not find a way to get the instance object for the chart via angular. 
    public Gridstacker: any;//gridstack handler
    public MyDashBoardClaimsChartInstance: kendo.dataviz.ui.Chart;
    public RadialGaugeInstance: kendo.dataviz.ui.RadialGauge; 
    public RadialGaugeSelectedNumber = 10; 
    public StrategyContext = new StrategyContext();
    //This would only be filled up initially in the side of the 
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

    public AddRadialGaugeWidget()
    {
        if (!$("#" + WidgetLookUp.RadialGaugeInstance).length) {
            let newWidget = { id: WidgetLookUp.RadialGaugeInstance, x: 0, y: 0, width: 10, height: 2 };
            this.Widgets.push(newWidget);
        }
    }
    public AddClaimsChartWidget() {
        
        //Business rule do not create two widgets that are the same.  
        if (!$("#" + WidgetLookUp.MyDashBoardClaimsChartInstance).length) {
            let newWidget = { id: WidgetLookUp.MyDashBoardClaimsChartInstance, x: 0, y: 0, width: 50, height: 2 };
            this.Widgets.push(newWidget);
        }
    }
    public RemoveWidget(w: Widget)
    {
        let index = this.Widgets.indexOf(w);
        this.Widgets.splice(index, 1);
    }
  
    //Tracking of the events for each widget...
    public OnChange(event, items) {
        
    
    };
    public OnDragStart(event, ui) {
        
    };
    public OnDragStop(event, ui) {
       
    }
    public OnResizeStart(event, ui) {
      
    }

    public OnResizeStop(event, ui) {

        console.log(this.RadialGaugeInstance); 
        let item = ui.element.data('_gridstack_node');
        if (item)
        {
            if (item.id === WidgetLookUp.MyDashBoardClaimsChartInstance) {
                this.StrategyContext.setWidgetStrategy(new ChartDisplayStrategy());
                this.StrategyContext.Display(item, this.MyDashBoardClaimsChartInstance);
            }
            else if (item.id === WidgetLookUp.RadialGaugeInstance)
            {
                console.log("confusion"); 
                this.StrategyContext.setWidgetStrategy(new GaugeDisplayStrategy()); 
                this.StrategyContext.Display(item, this.RadialGaugeInstance);
            }
         
        }
    };
    public OnItemAdded(item) {
      
    };
    public OnItemRemoved(item) {
      
    };


 
}

