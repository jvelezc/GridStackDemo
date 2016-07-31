/// <reference path="../../../../typings/index.d.ts" />
interface IOpenClaimsGridComponentController {
}

class OpenClaimsGridComponentController implements IOpenClaimsGridComponentController {
    constructor(private $http) {
    }
    $onInit() {
        this.ClaimsGridOptions = {
            dataSource: {
                transport: {
                    read: "/app/components/openclaimsgrid/openClaimsGridFakeData.json",
                    dataType: "json"
                },
                schema: {
                    model: {
                        fields: {
                            Claim: { type: "string" },
                            Policy: { type: "string" },
                            Insured: { type: "string" },
                            DateOpened: { type: "date" },
                        }
                    }
                },
                pagesize: 20
            },
            sortable: true,
            columns: [
                { field: "Claim" },
                { field: "Subject" },
                { field: "Insured" },
                { field: "DateOpened", format: "{0:MM-dd-yyyy}" },
            ]
        }
    }
    public ClaimsGridInstance: kendo.ui.Grid; 
    public ClaimsGridOptions: kendo.ui.GridOptions;
    

}


export class OpenClaimsGridComponent implements ng.IComponentOptions {
    templateUrl = "/app/components/openclaimsgrid/openclaimsgrid.component.html";
    controllerAs = "Vm";
    bindings: any;
    constructor() {
        this.bindings = {
            key: "@",
        };
    }
    controller = ["$http", OpenClaimsGridComponentController];
}