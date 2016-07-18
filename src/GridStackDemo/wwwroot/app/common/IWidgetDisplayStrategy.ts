/// <reference path="../../../typings/globals/jquery/index.d.ts" />
//see https://github.com/Microsoft/TypeScript/issues/3194
  interface IWidgetDisplayStrategy {
    Display($el: JQuery): void;
}
export default IWidgetDisplayStrategy;