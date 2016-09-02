import * as _ from "underscore";
import { WidgetLookUp } from "../../viewmodels/WidgetLookUp";
import { StrategyContext } from "../../common/StrategyContext";
import { ChartDisplayStrategy } from "../kendolinechart/ChartDisplayStrategy";
import { GaugeDisplayStrategy } from "../kendogauge/GaugeDisplayStrategy";
import { DashBoardTimelineFilterState } from "../../viewmodels/DashboardTimelineFilterStates";
class DashboardConfigComponentController {
    constructor($http) {
        this.$http = $http;
        this.$ = angular.element;
        this.RadialGaugeSelectedNumber = 10;
        this.StrategyContext = new StrategyContext();
        this.FilterState = "Today";
        this.WidgetLookUpName = WidgetLookUp;
    }
    // coding practices state that we should use init and not the constructor to initialize data. 
    $onInit() {
        this.Widgets = [];
        //these are gridstack options specifically the handle and whether it appears by default in the following devices. 
        this.Options = {
            cellHeight: 100,
            verticalMargin: 5,
            alwaysShowResizeHandle: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
        };
    }
    SetTodayAsActiveFilter() {
        console.log(this.FilterState);
        this.FilterState = DashBoardTimelineFilterState.Today;
    }
    SetWeekAsActiveFilter() {
        this.FilterState = DashBoardTimelineFilterState.Week;
        console.log(this.FilterState);
    }
    SetMonthAsActiveFilter() {
        this.FilterState = DashBoardTimelineFilterState.Month;
        console.log(this.FilterState);
    }
    SetYearAsActiveFilter() {
        this.FilterState = DashBoardTimelineFilterState.Year;
        console.log(this.FilterState);
    }
    AddTimelineWidget() {
        if (!this.$("#" + WidgetLookUp.TimelineFilterInstance).length) {
            let newWidget = { id: WidgetLookUp.TimelineFilterInstance, x: 2, y: 2, width: 5, height: 2 };
            this.Widgets.push(newWidget);
        }
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
    AddFlaggedPanelWidget() {
        console.log("debug");
        if (!this.$("#" + WidgetLookUp.FlaggedPanelInstance).length) {
            let newWidget = { id: WidgetLookUp.FlaggedPanelInstance, x: 0, y: 0, width: 3, height: 2 };
            this.Widgets.push(newWidget);
        }
    }
    AddOpenClaimsGridWidget() {
        if (!this.$("#" + WidgetLookUp.OpenClaimsGridInstance).length) {
            let newWidget = { id: WidgetLookUp.OpenClaimsGridInstance, x: 0, y: 0, width: 3, height: 2 };
            this.Widgets.push(newWidget);
        }
    }
    RemoveWidgetFromSideBar(WidgetToTrigger) {
        let index = _.findIndex(this.Widgets, { id: WidgetToTrigger });
        this.Widgets.splice(index, 1);
    }
    RemoveWidget(w) {
        if (w) {
            //Alternative way to find an index of an array of objects
            let index = this.Widgets.indexOf(w);
            this.Widgets.splice(index, 1);
        }
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
    }
    ;
    OnItemAdded(item) {
    }
    ;
    OnItemRemoved(item) {
    }
    ;
}
export class DashboardConfigComponent {
    constructor() {
        this.templateUrl = "/app/components/dashboardconfig/dashboardconfig.component.html";
        this.controllerAs = "Vm";
        this.controller = ["$http", DashboardConfigComponentController];
    }
}
