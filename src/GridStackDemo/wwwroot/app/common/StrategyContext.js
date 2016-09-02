"use strict";
var StrategyContext = (function () {
    function StrategyContext() {
    }
    StrategyContext.prototype.setWidgetStrategy = function (widgetDisplayStrategy) {
        this._widgetDisplayStrategy = widgetDisplayStrategy;
    };
    StrategyContext.prototype.getWidgetStrategy = function () {
        return this._widgetDisplayStrategy;
    };
    StrategyContext.prototype.Display = function (Widget, widgetInstance) {
        if (this._widgetDisplayStrategy) {
            this._widgetDisplayStrategy.Display(Widget, widgetInstance);
        }
    };
    return StrategyContext;
}());
exports.StrategyContext = StrategyContext;
