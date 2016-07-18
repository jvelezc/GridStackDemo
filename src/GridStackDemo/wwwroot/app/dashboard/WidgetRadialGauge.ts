import {Widget} from './Widget';
export class WidgetRadialGauge extends Widget
{

    constructor(
        public id: string,
        public x: number,
        public y: number,
        public width: number,
        public height: number)
 
    {
        super();
       
    }
   
    public ProductivityRatio: number;
    public SelectedNumber: number;
}
