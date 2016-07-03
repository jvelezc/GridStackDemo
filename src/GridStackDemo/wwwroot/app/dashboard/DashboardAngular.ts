﻿import {names} from '../angular.global';
import {Widget} from './Widget';

interface IDashBoardAngular
{
    addWidget(); 
    removeWidget(w: Widget);
    onChange(event, items);
    onDragStart(event, ui); 
    onDragStop(event, ui); 
    onResizeStart(event, ui);
    onResizeStop(event, ui);
    onItemAdded(item);
    onItemRemoved(item); 
}
export class DashboardAngular implements IDashBoardAngular {
    public Widgets: Array<Widget> = [{ widgetName: "radialGauge", x: 0, y: 0, width: 1, height: 1 }, { widgetName: "chart", x: 0, y: 0, width: 3, height: 1 }];
    public Options: {} = {
        cell_height: 150,
        vertical_margin: 10,
        alwaysShowResizeHandle: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    };
    constructor() { }

    public addWidget() {
        let newWidget = { widgetName: "newItem" , x: 0, y: 0, width: 1, height: 1 };
        this.Widgets.push(newWidget);
    }
    public removeWidget(w: Widget)
    {
        let index = this.Widgets.indexOf(w);
        this.Widgets.splice(index, 1);
    }
    public onChange(event, items) {
        console.log("onChange event: " + event + " items:" + items);
    };
    public onDragStart(event, ui) {
        console.log("onDragStart event: " + event + " ui:" + ui);
    };
    public onDragStop(event, ui) {
        console.log("onDragStop event: " + event + " ui:" + ui);
    }
    public onResizeStart(event, ui) {
        console.log("onResizeStart event: " + event + " ui:" + ui);
    }

    public onResizeStop(event, ui) {
        console.log("onResizeStop event: " + event + " ui:" + ui);
    };
    public onItemAdded(item) {
        console.log("onItemAdded item: " + item);
    };
    public onItemRemoved(item) {
        console.log("onItemRemoved item: " + item);
    };


}

