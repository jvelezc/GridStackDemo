import IWidgetDisplayStrategy from "./IWidgetDisplayStrategy";
export class StrategyContext implements IWidgetDisplayStrategy {
    private _widgetDisplayStrategy: IWidgetDisplayStrategy;
    setWidgetStrategy(widgetDisplayStrategy: IWidgetDisplayStrategy) {
        this._widgetDisplayStrategy = widgetDisplayStrategy;
    }
    getWidgetStrategy() {
        return this._widgetDisplayStrategy;
    }

    Display($el: JQuery): void {
        if (this._widgetDisplayStrategy) {
            this._widgetDisplayStrategy.Display($el);
        }
    }
}