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
class DashboardAngular {
    constructor() {
        this.strategyContext = new StrategyContext_1.StrategyContext();
        //This would only be filled up initially in the side of the 
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
    }
    RefreshChart() {
        //Investigate if this actually refreshes data 
        this.ClaimsData.read();
        this.ClaimsData.view();
    }
    AddClaimsChartWidget() {
        //Business rule do not create two widgets that are the same.  
        if (!$("#" + WidgetLookUp_1.WidgetLookUp.myDashBoardClaimsChart).length) {
            let newWidget = { id: WidgetLookUp_1.WidgetLookUp.myDashBoardClaimsChart, x: 0, y: 0, width: 50, height: 2 };
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
            if (item.id === WidgetLookUp_1.WidgetLookUp.myDashBoardClaimsChart) {
                this.strategyContext.setWidgetStrategy(new ChartDisplayStrategy_1.ChartDisplayStrategy());
                this.strategyContext.Display(item);
            }
            else if (item.id === WidgetLookUp_1.WidgetLookUp.myDashBoardClaimsChart) {
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
