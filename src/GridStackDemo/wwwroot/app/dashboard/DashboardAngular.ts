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

interface IDashBoardAngular
{
   
    AddClaimsChartWidget(): void;
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
    //These are the names of the components in  html. I could not find a way to get the instance object for the chart via angular. 
    public Gridstacker: any;//gridstack handler
    public MyDashBoardClaimsChart: any; 
    public strategyContext = new StrategyContext();
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

  
    public AddClaimsChartWidget() {
        
        //Business rule do not create two widgets that are the same.  
        if (!$("#" + WidgetLookUp.myDashBoardClaimsChart).length) {
            let newWidget = { id: WidgetLookUp.myDashBoardClaimsChart, x: 0, y: 0, width: 50, height: 2 };
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
        let item = ui.element.data('_gridstack_node');
        if (item)
        {
            if (item.id === WidgetLookUp.myDashBoardClaimsChart) {
                this.strategyContext.setWidgetStrategy(new ChartDisplayStrategy()); 
                this.strategyContext.Display(item);
            }
            else if (item.id === WidgetLookUp.myDashBoardClaimsChart)
            {

            }
         
        }
    };
    public OnItemAdded(item) {
      
    };
    public OnItemRemoved(item) {
      
    };


 
}

