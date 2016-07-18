import IWidgetDisplayStrategy from "../common/IWidgetDisplayStrategy";
import {WidgetLookUp} from "./WidgetLookUp";
export class ChartDisplayStrategy implements IWidgetDisplayStrategy {
    public Display($el: JQuery) {
        console.log("i made this far");
        //Jquery requires the hash symbol.... how else can I get a currenty instance of the kendo chart I wonder... 
        let kendoChart = $("#" + WidgetLookUp.myDashBoardClaimsChart).data("kendoChart");
        console.log(kendoChart);
        kendoChart.redraw();
    }
}