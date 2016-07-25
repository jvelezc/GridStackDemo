export class GaugeDisplayStrategy {
    Display(widget, widgetInstance) {
        // So this extremely weird..
        // Gridstack defines a number for width and height but they dont really mean it in px
        // So kendo defines width and height differently... so I had to resort to this hack 
        // Get the container width and height and then resize kendo area to macth it. 
        //no point in going any further is I dont have the pre-reqs
        if (widget && widgetInstance) {
            console.log(widget);
            //This dimension were 100% subjective LOL it basically the conversion of what gridstack considers a 1 to what browsers considers 1px;
            let height = widget.height * 120;
            let width = widget.width * 65;
            // if somehow we get undefined , null or less than zero lets default some stuff. 
            if (!height || height <= 0) {
                height = 150;
            }
            if (!width || width <= 0) {
                width = 75;
            }
            //Convert width and height 
            // widgetInstance has a bug so I cant invoke it without it being null or undefined
            //let radialGauge: kendo.dataviz.ui.RadialGauge = widgetInstance;
            let radialGaugeOptions = {
                pointer: [{ value: Math.floor(Math.random() * 100) + 1 }],
                gaugeArea: { width: width, height: height }
            };
            $("#" + widget.id).kendoRadialGauge(radialGaugeOptions).resize();
        }
    }
}
