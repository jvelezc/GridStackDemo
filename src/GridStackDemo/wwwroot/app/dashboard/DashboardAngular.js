"use strict";
var DashboardAngular = (function () {
    function DashboardAngular() {
        this.Widgets = [{ widgetName: "radialGauge", x: 0, y: 0, width: 1, height: 1 }, { widgetName: "chart", x: 0, y: 0, width: 3, height: 1 }];
        this.Options = {
            cell_height: 150,
            vertical_margin: 10,
            alwaysShowResizeHandle: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
        };
    }
    DashboardAngular.prototype.addWidget = function () {
        var newWidget = { widgetName: "newItem", x: 0, y: 0, width: 1, height: 1 };
        this.Widgets.push(newWidget);
    };
    DashboardAngular.prototype.removeWidget = function (w) {
        var index = this.Widgets.indexOf(w);
        this.Widgets.splice(index, 1);
    };
    DashboardAngular.prototype.onChange = function (event, items) {
        console.log("onChange event: " + event + " items:" + items);
    };
    ;
    DashboardAngular.prototype.onDragStart = function (event, ui) {
        console.log("onDragStart event: " + event + " ui:" + ui);
    };
    ;
    DashboardAngular.prototype.onDragStop = function (event, ui) {
        console.log("onDragStop event: " + event + " ui:" + ui);
    };
    DashboardAngular.prototype.onResizeStart = function (event, ui) {
        console.log("onResizeStart event: " + event + " ui:" + ui);
    };
    DashboardAngular.prototype.onResizeStop = function (event, ui) {
        console.log("onResizeStop event: " + event + " ui:" + ui);
    };
    ;
    DashboardAngular.prototype.onItemAdded = function (item) {
        console.log("onItemAdded item: " + item);
    };
    ;
    DashboardAngular.prototype.onItemRemoved = function (item) {
        console.log("onItemRemoved item: " + item);
    };
    ;
    return DashboardAngular;
}());
exports.DashboardAngular = DashboardAngular;
