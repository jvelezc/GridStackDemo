export class ChartDisplayStrategy {
    Display(widget, widgetInstance) {
        console.log(widgetInstance); //This must be a kendo bug ! Thanks a lot kendo. 
        let kendoChart = $("#" + widget.id).data("kendoChart");
        kendoChart.redraw();
    }
}
