System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var StrategyContext;
    return {
        setters:[],
        execute: function() {
            class StrategyContext {
                setWidgetStrategy(widgetDisplayStrategy) {
                    this._widgetDisplayStrategy = widgetDisplayStrategy;
                }
                getWidgetStrategy() {
                    return this._widgetDisplayStrategy;
                }
                Display(Widget, widgetInstance) {
                    if (this._widgetDisplayStrategy) {
                        this._widgetDisplayStrategy.Display(Widget, widgetInstance);
                    }
                }
            }
            exports_1("StrategyContext", StrategyContext);
        }
    }
});
