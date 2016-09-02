export class ChartDisplayStrategy {
    Display(widget, widgetInstance) {
        let kendoChart = $("#" + widget.id).data("kendoChart");
        kendoChart.redraw();
    }
}
