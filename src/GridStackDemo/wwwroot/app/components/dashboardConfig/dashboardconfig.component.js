System.register(["../../viewmodels/WidgetLookUp", "../../common/StrategyContext", "../kendolinechart/ChartDisplayStrategy", "../kendogauge/GaugeDisplayStrategy"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var WidgetLookUp_1, StrategyContext_1, ChartDisplayStrategy_1, GaugeDisplayStrategy_1;
    var DashboardConfigComponentController, DashboardConfigComponent;
    return {
        setters:[
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
            }],
        execute: function() {
            class DashboardConfigComponentController {
                constructor($http) {
                    this.$http = $http;
                    this.$ = angular.element;
                    this.RadialGaugeSelectedNumber = 10;
                    this.StrategyContext = new StrategyContext_1.StrategyContext();
                }
                // coding practices state that we should use init and not the constructor to initialize data. 
                $onInit() {
                    console.log("init");
                    this.Widgets = [];
                    this.ActivityGridOptions =
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
                    //these are gridstack options specifically the handle and whether it appears by default in the following devices. 
                    this.Options = {
                        cellHeight: 150,
                        verticalMargin: 15,
                        alwaysShowResizeHandle: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
                    };
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
                        if (item.id === WidgetLookUp_1.WidgetLookUp.MyDashBoardClaimsChartInstance) {
                            this.StrategyContext.setWidgetStrategy(new ChartDisplayStrategy_1.ChartDisplayStrategy());
                            this.StrategyContext.Display(item, this.MyDashBoardClaimsChartInstance);
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
