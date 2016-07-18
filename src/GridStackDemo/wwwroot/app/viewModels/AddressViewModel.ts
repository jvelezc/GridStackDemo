import {DropdownItemViewModel} from "./DropDownItemViewModel";
export interface IAddressViewModel {
    Id: number;
    Address1: string;
    Address2: string;
    City: string;
    State: string;
    PostalCode: string;
    County: string;
    Country: string;
    IsPrimary: boolean;
    RefAddressType: DropdownItemViewModel;
}

export class AddressViewModel implements IAddressViewModel {
    public Id: number;
    public Address1: string;
    public Address2: string;
    public City: string;
    public State: string;
    public PostalCode: string;
    public County: string;
    public Country: string;
    public IsPrimary: boolean
    public RefAddressType: DropdownItemViewModel;

    constructor(data: IAddressViewModel = null) {
        this.init(data);
    }

    public init = (data: IAddressViewModel = null): void => {
        if (data) {
            this.Id = data.Id;
            this.Address1 = data.Address1;
            this.Address2 = data.Address2;
            this.City = data.City;
            this.State = data.State;
            this.PostalCode = data.PostalCode;
            this.County = data.County;
            this.Country = data.Country;
            this.IsPrimary = data.IsPrimary
            this.RefAddressType = data.RefAddressType;
        }
        else {
            this.Id = -1;
            this.Address1 = "";
            this.Address2 = "";
            this.City = "";
            this.State = "";
            this.PostalCode = "";
            this.County = ""
            this.Country = ""
            this.IsPrimary = false
            this.RefAddressType = null;
        }
    }
}