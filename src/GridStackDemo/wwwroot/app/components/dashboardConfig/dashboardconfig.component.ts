/// <reference path="../../../../typings/index.d.ts" />
import * as $ from 'jquery';
import * as _ from "underscore";
import {Widget} from "../../viewmodels/Widget";
import {WidgetLookUp} from "../../viewmodels/WidgetLookUp";
import {StrategyContext} from "../../common/StrategyContext";
import {ChartDisplayStrategy} from "../kendolinechart/ChartDisplayStrategy";
import {GaugeDisplayStrategy} from "../kendogauge/GaugeDisplayStrategy";
import {DashBoardTimelineFilterState} from  "../../viewmodels/DashboardTimelineFilterStates";

interface IFlaggedClaimsComponentController {
    AddClaimsChartWidget(): void;
    AddRadialGaugeWidget(): void;
    AddActivityGridWidget(): void;
    AddReOpenedPanelWidget(): void;
    AddAssignedPanelWidget(): void;
    AddOpenClaimsGridWidget(): void;
    AddOperationHoursWidget(): void;
    AddTimelineWidget(): void;
    SetTodayAsActiveFilter(): void;
    SetWeekAsActiveFilter(): void;
    SetMonthAsActiveFilter(): void;
    SetYearAsActiveFilter(): void;
    RemoveWidget(w: Widget): void;
    OnChange(event, items): void;
    OnDragStart(event, ui): void;
    OnDragStop(event, ui): void;
    OnResizeStart(event, ui): void;
    OnResizeStop(event, ui): void;
    OnItemAdded(item): void;
    OnItemRemoved(item): void;
    $: ng.IAugmentedJQueryStatic;
}
class DashboardConfigComponentController implements IFlaggedClaimsComponentController {
    public $ = angular.element;
    public Gridstacker: any;//gridstack handler
    public RadialGaugeInstance: kendo.dataviz.ui.RadialGauge;
    public RadialGaugeSelectedNumber = 10;
    public StrategyContext = new StrategyContext();
    public Options: {};
    public Widgets: Array<Widget>;
    private FilterState: string = "Today";
    public WidgetLookUpName: WidgetLookUp;
    constructor(private $http) {
        this.WidgetLookUpName = WidgetLookUp;
    }
    // coding practices state that we should use init and not the constructor to initialize data. 
    $onInit() {
         this.Widgets = [
        //{ id: WidgetLookUp.radialGauge, x: 0, y: 0, width: 1, height: 1 },
        //{ id: WidgetLookUp.myDashBoardClaimsChart, x: 0, y: 0, width: 3, height: 1 }
         ];

        
        //these are gridstack options specifically the handle and whether it appears by default in the following devices. 
        this.Options = {
            cellHeight: 100,
            verticalMargin: 5,
            
            alwaysShowResizeHandle: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
        };

    }

    public SetTodayAsActiveFilter() {
  
        console.log(this.FilterState); 
        this.FilterState = DashBoardTimelineFilterState.Today;
    }
    public SetWeekAsActiveFilter() {
       

        this.FilterState = DashBoardTimelineFilterState.Week;
        console.log(this.FilterState); 
    }
    public SetMonthAsActiveFilter() {

        this.FilterState = DashBoardTimelineFilterState.Month;
        console.log(this.FilterState); 
    }
    public SetYearAsActiveFilter() {
       
        this.FilterState = DashBoardTimelineFilterState.Year; 
        console.log(this.FilterState); 
    }

    public AddTimelineWidget(): void {
        if (!this.$("#" + WidgetLookUp.TimelineFilterInstance).length) {
            let newWidget = { id: WidgetLookUp.TimelineFilterInstance, x: 2, y: 2, width: 5, height: 2 };
            this.Widgets.push(newWidget);
        }
    }
    public AddRadialGaugeWidget(): void {

        if (!this.$("#" + WidgetLookUp.RadialGaugeInstance).length) {
            let newWidget = { id: WidgetLookUp.RadialGaugeInstance, x: 0, y: 0, width: 3, height: 2 };
            this.Widgets.push(newWidget);
        }
    }
    public AddClaimsChartWidget(): void {
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


    public AddOpenedPanelWidget(): void {
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


    public AddFlaggedPanelWidget(): void {
        console.log("debug");
        if (!this.$("#" + WidgetLookUp.FlaggedPanelInstance).length) {
            let newWidget = { id: WidgetLookUp.FlaggedPanelInstance, x: 0, y: 0, width: 3, height: 2 };
            this.Widgets.push(newWidget);
        }
    }

    public AddOpenClaimsGridWidget(): void {
        if (!this.$("#" + WidgetLookUp.OpenClaimsGridInstance).length) {
            let newWidget = { id: WidgetLookUp.OpenClaimsGridInstance, x: 0, y: 0, width: 3, height: 2 };
            this.Widgets.push(newWidget);
        }
    }

    public AddOperationHoursWidget(): void {
        if (!this.$("#" + WidgetLookUp.OpenedPanelInstance).length) {
            let newWidget = { id: WidgetLookUp.OpenedPanelInstance, x: 0, y: 0, width: 3, height: 2 };
            this.Widgets.push(newWidget);
        }
    }

    public RemoveWidgetFromSideBar(WidgetToTrigger:string)
    {
        let index = _.findIndex(this.Widgets, { id: WidgetToTrigger });
        this.Widgets.splice(index, 1);
    }
    public RemoveWidget(w: Widget): void {
        if (w) {

            //Alternative way to find an index of an array of objects
           
        
            let index = this.Widgets.indexOf(w);
            this.Widgets.splice(index, 1);
        }
    }

    //Tracking of the events for each widget...
    public OnChange(event, items): void {


    };
    public OnDragStart(event, ui): void {

    };
    public OnDragStop(event, ui): void {

    }
    public OnResizeStart(event, ui): void {

    }

    public OnResizeStop(event, ui): void {
        let item = ui.element.data('_gridstack_node');
        if (item) {
            console.log(item); 
            if (item.id === WidgetLookUp.MyDashBoardClaimsChartInstance) {
                console.log("i am executing the correct strategy"); 
                this.StrategyContext.setWidgetStrategy(new ChartDisplayStrategy());
                this.StrategyContext.Display(item);
            }
            else if (item.id === WidgetLookUp.RadialGaugeInstance) {
                this.StrategyContext.setWidgetStrategy(new GaugeDisplayStrategy());
                this.StrategyContext.Display(item, this.RadialGaugeInstance);
            }

        }
    };
    public OnItemAdded(item): void {

    };
    public OnItemRemoved(item): void {

    };



}
export class DashboardConfigComponent implements ng.IComponentOptions {
    templateUrl = "/app/components/dashboardconfig/dashboardconfig.component.html";
    controllerAs = "Vm";
    constructor() {
    }
    controller = ["$http", DashboardConfigComponentController];
}