"use strict";
class StrategyContext {
    setWidgetStrategy(widgetDisplayStrategy) {
        this._widgetDisplayStrategy = widgetDisplayStrategy;
    }
    getWidgetStrategy() {
        return this._widgetDisplayStrategy;
    }
    Display($el) {
        if (this._widgetDisplayStrategy) {
            this._widgetDisplayStrategy.Display($el);
        }
    }
}
exports.StrategyContext = StrategyContext;
