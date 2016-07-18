"use strict";
const WidgetLookUp_1 = require("./WidgetLookUp");
class ChartDisplayStrategy {
    Display($el) {
        console.log("i made this far");
        //Jquery requires the hash symbol.... how else can I get a currenty instance of the kendo chart I wonder... 
        let kendoChart = $("#" + WidgetLookUp_1.WidgetLookUp.myDashBoardClaimsChart).data("kendoChart");
        console.log(kendoChart);
        kendoChart.redraw();
    }
}
exports.ChartDisplayStrategy = ChartDisplayStrategy;
