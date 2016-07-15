import {Widget} from "./Widget";

interface IDashBoardAngular
{
    addWidget():void;
    removeWidget(w: Widget):void;
    onChange(event, items):void;
    onDragStart(event, ui):void; 
    onDragStop(event, ui):void; 
    onResizeStart(event, ui):void;
    onResizeStop(event, ui):void;
    onItemAdded(item):void;
    onItemRemoved(item):void; 
}
export class DashboardAngular implements IDashBoardAngular {
    public Widgets: Array<Widget> = [{ widgetName: "radialGauge", x: 0, y: 0, width: 1, height: 1 }, { widgetName: "chart", x: 0, y: 0, width: 3, height: 1 }];
    public Options: {} = {
        cellHeight: 150,
        verticalMargin: 10,
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

