import IWidgetDisplayStrategy from "./IWidgetDisplayStrategy";
import {Widget} from "../viewmodels/Widget";
export class StrategyContext implements IWidgetDisplayStrategy {
    private _widgetDisplayStrategy: IWidgetDisplayStrategy;
    setWidgetStrategy(widgetDisplayStrategy: IWidgetDisplayStrategy) {
        this._widgetDisplayStrategy = widgetDisplayStrategy;
    }
    getWidgetStrategy() {
        return this._widgetDisplayStrategy;
    }

    Display(Widget: Widget,widgetInstance?:any): void {
        if (this._widgetDisplayStrategy) {
            this._widgetDisplayStrategy.Display(Widget, widgetInstance);
        }
    }
}