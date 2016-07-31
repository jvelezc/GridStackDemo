import IWidgetDisplayStrategy from "../common/IWidgetDisplayStrategy";
import {Widget} from "../../viewmodels/Widget";
export class ChartDisplayStrategy implements IWidgetDisplayStrategy {
    public Display(widget: Widget, widgetInstance?: any) {
        let kendoChart = $("#" + widget.id).data("kendoChart");
        kendoChart.redraw();
    }
}