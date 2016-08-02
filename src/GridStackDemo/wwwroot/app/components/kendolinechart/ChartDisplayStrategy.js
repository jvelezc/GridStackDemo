System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ChartDisplayStrategy;
    return {
        setters:[],
        execute: function() {
            class ChartDisplayStrategy {
                Display(widget, widgetInstance) {
                    let kendoChart = $("#" + widget.id).data("kendoChart");
                    kendoChart.redraw();
                }
            }
            exports_1("ChartDisplayStrategy", ChartDisplayStrategy);
        }
    }
});
