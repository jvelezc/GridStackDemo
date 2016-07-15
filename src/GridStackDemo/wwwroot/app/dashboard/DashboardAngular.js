export class DashboardAngular {
    constructor() {
        this.Widgets = [{ widgetName: "radialGauge", x: 0, y: 0, width: 1, height: 1 }, { widgetName: "chart", x: 0, y: 0, width: 3, height: 1 }];
        this.Options = {
            cellHeight: 150,
            verticalMargin: 10,
            alwaysShowResizeHandle: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
        };
    }
    addWidget() {
        let newWidget = { widgetName: "newItem", x: 0, y: 0, width: 1, height: 1 };
        this.Widgets.push(newWidget);
    }
    removeWidget(w) {
        let index = this.Widgets.indexOf(w);
        this.Widgets.splice(index, 1);
    }
    onChange(event, items) {
        console.log("onChange event: " + event + " items:" + items);
    }
    ;
    onDragStart(event, ui) {
        console.log("onDragStart event: " + event + " ui:" + ui);
    }
    ;
    onDragStop(event, ui) {
        console.log("onDragStop event: " + event + " ui:" + ui);
    }
    onResizeStart(event, ui) {
        console.log("onResizeStart event: " + event + " ui:" + ui);
    }
    onResizeStop(event, ui) {
        console.log("onResizeStop event: " + event + " ui:" + ui);
    }
    ;
    onItemAdded(item) {
        console.log("onItemAdded item: " + item);
    }
    ;
    onItemRemoved(item) {
        console.log("onItemRemoved item: " + item);
    }
    ;
}
