"use strict";
var ChartDisplayStrategy = (function () {
    function ChartDisplayStrategy() {
    }
    ChartDisplayStrategy.prototype.Display = function (widget, widgetInstance) {
        var kendoChart = $("#" + widget.id).data("kendoChart");
        kendoChart.redraw();
    };
    return ChartDisplayStrategy;
}());
exports.ChartDisplayStrategy = ChartDisplayStrategy;
