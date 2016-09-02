"use strict";
var _ = require("underscore");
var WidgetLookUp_1 = require("../../viewmodels/WidgetLookUp");
var StrategyContext_1 = require("../../common/StrategyContext");
var ChartDisplayStrategy_1 = require("../kendolinechart/ChartDisplayStrategy");
var GaugeDisplayStrategy_1 = require("../kendogauge/GaugeDisplayStrategy");
var DashboardTimelineFilterStates_1 = require("../../viewmodels/DashboardTimelineFilterStates");
var DashboardConfigComponentController = (function () {
    function DashboardConfigComponentController($http) {
        this.$http = $http;
        this.$ = angular.element;
        this.RadialGaugeSelectedNumber = 10;
        this.StrategyContext = new StrategyContext_1.StrategyContext();
        this.FilterState = "Today";
        this.WidgetLookUpName = WidgetLookUp_1.WidgetLookUp;
    }
    // coding practices state that we should use init and not the constructor to initialize data. 
    DashboardConfigComponentController.prototype.$onInit = function () {
        this.Widgets = [];
        //these are gridstack options specifically the handle and whether it appears by default in the following devices. 
        this.Options = {
            cellHeight: 100,
            verticalMargin: 5,
            alwaysShowResizeHandle: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
        };
    };
    DashboardConfigComponentController.prototype.SetTodayAsActiveFilter = function () {
        console.log(this.FilterState);
        this.FilterState = DashboardTimelineFilterStates_1.DashBoardTimelineFilterState.Today;
    };
    DashboardConfigComponentController.prototype.SetWeekAsActiveFilter = function () {
        this.FilterState = DashboardTimelineFilterStates_1.DashBoardTimelineFilterState.Week;
        console.log(this.FilterState);
    };
    DashboardConfigComponentController.prototype.SetMonthAsActiveFilter = function () {
        this.FilterState = DashboardTimelineFilterStates_1.DashBoardTimelineFilterState.Month;
        console.log(this.FilterState);
    };
    DashboardConfigComponentController.prototype.SetYearAsActiveFilter = function () {
        this.FilterState = DashboardTimelineFilterStates_1.DashBoardTimelineFilterState.Year;
        console.log(this.FilterState);
    };
    DashboardConfigComponentController.prototype.AddTimelineWidget = function () {
        if (!this.$("#" + WidgetLookUp_1.WidgetLookUp.TimelineFilterInstance).length) {
            var newWidget = { id: WidgetLookUp_1.WidgetLookUp.TimelineFilterInstance, x: 2, y: 2, width: 5, height: 2 };
            this.Widgets.push(newWidget);
        }
    };
    DashboardConfigComponentController.prototype.AddRadialGaugeWidget = function () {
        if (!this.$("#" + WidgetLookUp_1.WidgetLookUp.RadialGaugeInstance).length) {
            var newWidget = { id: WidgetLookUp_1.WidgetLookUp.RadialGaugeInstance, x: 0, y: 0, width: 3, height: 2 };
            this.Widgets.push(newWidget);
        }
    };
    DashboardConfigComponentController.prototype.AddClaimsChartWidget = function () {
        //Business rule do not create two widgets that are the same.  
        if (!this.$("#" + WidgetLookUp_1.WidgetLookUp.MyDashBoardClaimsChartInstance).length) {
            var newWidget = { id: WidgetLookUp_1.WidgetLookUp.MyDashBoardClaimsChartInstance, x: 0, y: 0, width: 10, height: 2 };
            this.Widgets.push(newWidget);
        }
    };
    DashboardConfigComponentController.prototype.AddActivityGridWidget = function () {
        //Business rule do not create two widgets that are the same.  
        if (!this.$("#" + WidgetLookUp_1.WidgetLookUp.ActivityGridInstance).length) {
            var newWidget = { id: WidgetLookUp_1.WidgetLookUp.ActivityGridInstance, x: 0, y: 0, width: 10, height: 2 };
            this.Widgets.push(newWidget);
        }
    };
    DashboardConfigComponentController.prototype.AddOpenedPanelWidget = function () {
        if (!this.$("#" + WidgetLookUp_1.WidgetLookUp.OpenedPanelInstance).length) {
            var newWidget = { id: WidgetLookUp_1.WidgetLookUp.OpenedPanelInstance, x: 0, y: 0, width: 3, height: 2 };
            this.Widgets.push(newWidget);
        }
    };
    DashboardConfigComponentController.prototype.AddReOpenedPanelWidget = function () {
        if (!this.$("#" + WidgetLookUp_1.WidgetLookUp.ReOpenedPanelInstance).length) {
            var newWidget = { id: WidgetLookUp_1.WidgetLookUp.ReOpenedPanelInstance, x: 0, y: 0, width: 3, height: 2 };
            this.Widgets.push(newWidget);
        }
    };
    DashboardConfigComponentController.prototype.AddClosedPanelWidget = function () {
        if (!this.$("#" + WidgetLookUp_1.WidgetLookUp.ClosedPanelInstance).length) {
            var newWidget = { id: WidgetLookUp_1.WidgetLookUp.ClosedPanelInstance, x: 0, y: 0, width: 3, height: 2 };
            this.Widgets.push(newWidget);
        }
    };
    DashboardConfigComponentController.prototype.AddAssignedPanelWidget = function () {
        if (!this.$("#" + WidgetLookUp_1.WidgetLookUp.AssignedPanelInstance).length) {
            var newWidget = { id: WidgetLookUp_1.WidgetLookUp.AssignedPanelInstance, x: 0, y: 0, width: 3, height: 2 };
            this.Widgets.push(newWidget);
        }
    };
    DashboardConfigComponentController.prototype.AddFlaggedPanelWidget = function () {
        console.log("debug");
        if (!this.$("#" + WidgetLookUp_1.WidgetLookUp.FlaggedPanelInstance).length) {
            var newWidget = { id: WidgetLookUp_1.WidgetLookUp.FlaggedPanelInstance, x: 0, y: 0, width: 3, height: 2 };
            this.Widgets.push(newWidget);
        }
    };
    DashboardConfigComponentController.prototype.AddOpenClaimsGridWidget = function () {
        if (!this.$("#" + WidgetLookUp_1.WidgetLookUp.OpenClaimsGridInstance).length) {
            var newWidget = { id: WidgetLookUp_1.WidgetLookUp.OpenClaimsGridInstance, x: 0, y: 0, width: 3, height: 2 };
            this.Widgets.push(newWidget);
        }
    };
    DashboardConfigComponentController.prototype.AddOperationHoursWidget = function () {
        if (!this.$("#" + WidgetLookUp_1.WidgetLookUp.OpenedPanelInstance).length) {
            var newWidget = { id: WidgetLookUp_1.WidgetLookUp.OpenedPanelInstance, x: 0, y: 0, width: 3, height: 2 };
            this.Widgets.push(newWidget);
        }
    };
    DashboardConfigComponentController.prototype.RemoveWidgetFromSideBar = function (WidgetToTrigger) {
        var index = _.findIndex(this.Widgets, { id: WidgetToTrigger });
        this.Widgets.splice(index, 1);
    };
    DashboardConfigComponentController.prototype.RemoveWidget = function (w) {
        if (w) {
            //Alternative way to find an index of an array of objects
            var index = this.Widgets.indexOf(w);
            this.Widgets.splice(index, 1);
        }
    };
    //Tracking of the events for each widget...
    DashboardConfigComponentController.prototype.OnChange = function (event, items) {
    };
    ;
    DashboardConfigComponentController.prototype.OnDragStart = function (event, ui) {
    };
    ;
    DashboardConfigComponentController.prototype.OnDragStop = function (event, ui) {
    };
    DashboardConfigComponentController.prototype.OnResizeStart = function (event, ui) {
    };
    DashboardConfigComponentController.prototype.OnResizeStop = function (event, ui) {
        var item = ui.element.data('_gridstack_node');
        if (item) {
            console.log(item);
            if (item.id === WidgetLookUp_1.WidgetLookUp.MyDashBoardClaimsChartInstance) {
                console.log("i am executing the correct strategy");
                this.StrategyContext.setWidgetStrategy(new ChartDisplayStrategy_1.ChartDisplayStrategy());
                this.StrategyContext.Display(item);
            }
            else if (item.id === WidgetLookUp_1.WidgetLookUp.RadialGaugeInstance) {
                this.StrategyContext.setWidgetStrategy(new GaugeDisplayStrategy_1.GaugeDisplayStrategy());
                this.StrategyContext.Display(item, this.RadialGaugeInstance);
            }
        }
    };
    ;
    DashboardConfigComponentController.prototype.OnItemAdded = function (item) {
    };
    ;
    DashboardConfigComponentController.prototype.OnItemRemoved = function (item) {
    };
    ;
    return DashboardConfigComponentController;
}());
var DashboardConfigComponent = (function () {
    function DashboardConfigComponent() {
        this.templateUrl = "/app/components/dashboardconfig/dashboardconfig.component.html";
        this.controllerAs = "Vm";
        this.controller = ["$http", DashboardConfigComponentController];
    }
    return DashboardConfigComponent;
}());
exports.DashboardConfigComponent = DashboardConfigComponent;
