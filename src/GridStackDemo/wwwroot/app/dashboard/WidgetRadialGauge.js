"use strict";
const Widget_1 = require('./Widget');
class WidgetRadialGauge extends Widget_1.Widget {
    constructor(id, x, y, width, height) {
        super();
        this.id = id;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
}
exports.WidgetRadialGauge = WidgetRadialGauge;
