export class StrategyContext {
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
