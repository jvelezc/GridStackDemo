export class AddressViewModel {
    constructor(data = null) {
        this.init = (data = null) => {
            if (data) {
                this.Id = data.Id;
                this.Address1 = data.Address1;
                this.Address2 = data.Address2;
                this.City = data.City;
                this.State = data.State;
                this.PostalCode = data.PostalCode;
                this.County = data.County;
                this.Country = data.Country;
                this.IsPrimary = data.IsPrimary;
                this.RefAddressType = data.RefAddressType;
            }
            else {
                this.Id = -1;
                this.Address1 = "";
                this.Address2 = "";
                this.City = "";
                this.State = "";
                this.PostalCode = "";
                this.County = "";
                this.Country = "";
                this.IsPrimary = false;
                this.RefAddressType = null;
            }
        };
        this.init(data);
    }
}
