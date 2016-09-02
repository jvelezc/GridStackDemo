System.register(["underscore", "../../viewmodels/WidgetLookUp", "../../common/StrategyContext", "../kendolinechart/ChartDisplayStrategy", "../kendogauge/GaugeDisplayStrategy", "../../viewmodels/DashboardTimelineFilterStates"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var _, WidgetLookUp_1, StrategyContext_1, ChartDisplayStrategy_1, GaugeDisplayStrategy_1, DashboardTimelineFilterStates_1;
    var DashboardConfigComponentController, DashboardConfigComponent;
    return {
        setters:[
            function (_1) {
                _ = _1;
            },
            function (WidgetLookUp_1_1) {
                WidgetLookUp_1 = WidgetLookUp_1_1;
            },
            function (StrategyContext_1_1) {
                StrategyContext_1 = StrategyContext_1_1;
            },
            function (ChartDisplayStrategy_1_1) {
                ChartDisplayStrategy_1 = ChartDisplayStrategy_1_1;
            },
            function (GaugeDisplayStrategy_1_1) {
                GaugeDisplayStrategy_1 = GaugeDisplayStrategy_1_1;
            },
            function (DashboardTimelineFilterStates_1_1) {
                DashboardTimelineFilterStates_1 = DashboardTimelineFilterStates_1_1;
            }],
        execute: function() {
            class DashboardConfigComponentController {
                constructor($http) {
                    this.$http = $http;
                    this.$ = angular.element;
                    this.RadialGaugeSelectedNumber = 10;
                    this.StrategyContext = new StrategyContext_1.StrategyContext();
                    this.FilterState = "Today";
                    this.WidgetLookUpName = WidgetLookUp_1.WidgetLookUp;
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
                    this.FilterState = DashboardTimelineFilterStates_1.DashBoardTimelineFilterState.Today;
                }
                SetWeekAsActiveFilter() {
                    this.FilterState = DashboardTimelineFilterStates_1.DashBoardTimelineFilterState.Week;
                    console.log(this.FilterState);
                }
                SetMonthAsActiveFilter() {
                    this.FilterState = DashboardTimelineFilterStates_1.DashBoardTimelineFilterState.Month;
                    console.log(this.FilterState);
                }
                SetYearAsActiveFilter() {
                    this.FilterState = DashboardTimelineFilterStates_1.DashBoardTimelineFilterState.Year;
                    console.log(this.FilterState);
                }
                AddTimelineWidget() {
                    if (!this.$("#" + WidgetLookUp_1.WidgetLookUp.TimelineFilterInstance).length) {
                        let newWidget = { id: WidgetLookUp_1.WidgetLookUp.TimelineFilterInstance, x: 2, y: 2, width: 5, height: 2 };
                        this.Widgets.push(newWidget);
                    }
                }
                AddRadialGaugeWidget() {
                    if (!this.$("#" + WidgetLookUp_1.WidgetLookUp.RadialGaugeInstance).length) {
                        let newWidget = { id: WidgetLookUp_1.WidgetLookUp.RadialGaugeInstance, x: 0, y: 0, width: 3, height: 2 };
                        this.Widgets.push(newWidget);
                    }
                }
                AddClaimsChartWidget() {
                    //Business rule do not create two widgets that are the same.  
                    if (!this.$("#" + WidgetLookUp_1.WidgetLookUp.MyDashBoardClaimsChartInstance).length) {
                        let newWidget = { id: WidgetLookUp_1.WidgetLookUp.MyDashBoardClaimsChartInstance, x: 0, y: 0, width: 10, height: 2 };
                        this.Widgets.push(newWidget);
                    }
                }
                AddActivityGridWidget() {
                    //Business rule do not create two widgets that are the same.  
                    if (!this.$("#" + WidgetLookUp_1.WidgetLookUp.ActivityGridInstance).length) {
                        let newWidget = { id: WidgetLookUp_1.WidgetLookUp.ActivityGridInstance, x: 0, y: 0, width: 10, height: 2 };
                        this.Widgets.push(newWidget);
                    }
                }
                AddOpenedPanelWidget() {
                    if (!this.$("#" + WidgetLookUp_1.WidgetLookUp.OpenedPanelInstance).length) {
                        let newWidget = { id: WidgetLookUp_1.WidgetLookUp.OpenedPanelInstance, x: 0, y: 0, width: 3, height: 2 };
                        this.Widgets.push(newWidget);
                    }
                }
                AddReOpenedPanelWidget() {
                    if (!this.$("#" + WidgetLookUp_1.WidgetLookUp.ReOpenedPanelInstance).length) {
                        let newWidget = { id: WidgetLookUp_1.WidgetLookUp.ReOpenedPanelInstance, x: 0, y: 0, width: 3, height: 2 };
                        this.Widgets.push(newWidget);
                    }
                }
                AddClosedPanelWidget() {
                    if (!this.$("#" + WidgetLookUp_1.WidgetLookUp.ClosedPanelInstance).length) {
                        let newWidget = { id: WidgetLookUp_1.WidgetLookUp.ClosedPanelInstance, x: 0, y: 0, width: 3, height: 2 };
                        this.Widgets.push(newWidget);
                    }
                }
                AddAssignedPanelWidget() {
                    if (!this.$("#" + WidgetLookUp_1.WidgetLookUp.AssignedPanelInstance).length) {
                        let newWidget = { id: WidgetLookUp_1.WidgetLookUp.AssignedPanelInstance, x: 0, y: 0, width: 3, height: 2 };
                        this.Widgets.push(newWidget);
                    }
                }
                AddFlaggedPanelWidget() {
                    console.log("debug");
                    if (!this.$("#" + WidgetLookUp_1.WidgetLookUp.FlaggedPanelInstance).length) {
                        let newWidget = { id: WidgetLookUp_1.WidgetLookUp.FlaggedPanelInstance, x: 0, y: 0, width: 3, height: 2 };
                        this.Widgets.push(newWidget);
                    }
                }
                AddOpenClaimsGridWidget() {
                    if (!this.$("#" + WidgetLookUp_1.WidgetLookUp.OpenClaimsGridInstance).length) {
                        let newWidget = { id: WidgetLookUp_1.WidgetLookUp.OpenClaimsGridInstance, x: 0, y: 0, width: 3, height: 2 };
                        this.Widgets.push(newWidget);
                    }
                }
                AddOperationHoursWidget() {
                    if (!this.$("#" + WidgetLookUp_1.WidgetLookUp.OpenedPanelInstance).length) {
                        let newWidget = { id: WidgetLookUp_1.WidgetLookUp.OpenedPanelInstance, x: 0, y: 0, width: 3, height: 2 };
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
                }
                ;
                OnItemAdded(item) {
                }
                ;
                OnItemRemoved(item) {
                }
                ;
            }
            class DashboardConfigComponent {
                constructor() {
                    this.templateUrl = "/app/components/dashboardconfig/dashboardconfig.component.html";
                    this.controllerAs = "Vm";
                    this.controller = ["$http", DashboardConfigComponentController];
                }
            }
            exports_1("DashboardConfigComponent", DashboardConfigComponent);
        }
    }
});
