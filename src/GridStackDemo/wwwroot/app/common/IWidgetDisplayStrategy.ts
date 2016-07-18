/// <reference path="../../../typings/globals/jquery/index.d.ts" />
//see https://github.com/Microsoft/TypeScript/issues/3194
//some of my components have instances from kendo. 
//So instead of dom manipulation i can grab the instance of the component and change its settings. 
import {Widget} from "../dashboard/Widget";
  interface IWidgetDisplayStrategy {
      Display(Widget: Widget,widgetInstance?:any): void;
}
export default IWidgetDisplayStrategy;