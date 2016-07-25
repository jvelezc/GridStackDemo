/// <reference path="../../../typings/globals/kendo-ui/index.d.ts" />
/// <reference path="../../../typings/index.d.ts" />
"use strict";
//Documentation 
//http://stackoverflow.com/questions/21220886/kendo-angular-chart-data
//http://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/chart
const $ = require('jquery');
const WidgetLookUp_1 = require("./WidgetLookUp");
const StrategyContext_1 = require("../common/StrategyContext");
const ChartDisplayStrategy_1 = require("./ChartDisplayStrategy");
const GaugeDisplayStrategy_1 = require("./GaugeDisplayStrategy");
class DashboardAngular {
    constructor() {
        this.RadialGaugeSelectedNumber = 10;
        this.StrategyContext = new StrategyContext_1.StrategyContext();
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
        if (!$("#" + WidgetLookUp_1.WidgetLookUp.RadialGaugeInstance).length) {
            let newWidget = { id: WidgetLookUp_1.WidgetLookUp.RadialGaugeInstance, x: 0, y: 0, width: 3, height: 2 };
            this.Widgets.push(newWidget);
        }
    }
    AddClaimsChartWidget() {
        //Business rule do not create two widgets that are the same.  
        if (!$("#" + WidgetLookUp_1.WidgetLookUp.MyDashBoardClaimsChartInstance).length) {
            let newWidget = { id: WidgetLookUp_1.WidgetLookUp.MyDashBoardClaimsChartInstance, x: 0, y: 0, width: 10, height: 2 };
            this.Widgets.push(newWidget);
        }
    }
    AddActivityGridWidget() {
        //Business rule do not create two widgets that are the same.  
        if (!$("#" + WidgetLookUp_1.WidgetLookUp.ActivityGridInstance).length) {
            let newWidget = { id: WidgetLookUp_1.WidgetLookUp.ActivityGridInstance, x: 0, y: 0, width: 10, height: 2 };
            this.Widgets.push(newWidget);
        }
    }
    AddOpenedPanelWidget() {
        if (!$("#" + WidgetLookUp_1.WidgetLookUp.OpenedPanelInstance).length) {
            let newWidget = { id: WidgetLookUp_1.WidgetLookUp.OpenedPanelInstance, x: 0, y: 0, width: 3, height: 2 };
            this.Widgets.push(newWidget);
        }
    }
    AddReOpenedPanelWidget() {
        if (!$("#" + WidgetLookUp_1.WidgetLookUp.ReOpenedPanelInstance).length) {
            let newWidget = { id: WidgetLookUp_1.WidgetLookUp.ReOpenedPanelInstance, x: 0, y: 0, width: 3, height: 2 };
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
exports.DashboardAngular = DashboardAngular;
