import {GraphViewModel} from "./GraphViewModel";
interface IWidgetData
{
    GetGraphData(): GraphViewModel;
}
export class WidgetData implements IWidgetData
{
    public GetGraphData(): GraphViewModel {
        //TODO create a data layer to query from api's 
        var anInstance: GraphViewModel = <GraphViewModel>{
            Country: "Value",
            Value: "Value",
            Year: "2010",
        };
        return anInstance; 
       
    }
}