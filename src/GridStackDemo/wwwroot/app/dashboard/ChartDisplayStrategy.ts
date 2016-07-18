import IWidgetDisplayStrategy from "../common/IWidgetDisplayStrategy";
import {Widget} from "./Widget";
export class ChartDisplayStrategy implements IWidgetDisplayStrategy {
    public Display(widget: Widget,widgetInstance?:any) {
        console.log(widgetInstance); //This must be a kendo bug ! Thanks a lot kendo. 
        let kendoChart = $("#" + widget.id).data("kendoChart");
        kendoChart.redraw();
    }
}