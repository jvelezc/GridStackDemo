"use strict";
const AddressViewModel_1 = require("../../viewModels/AddressViewModel");
const base_controller_1 = require("../../common/base.controller");
class AddressSectionController extends base_controller_1.BaseController {
    //#endregion
    //#region constructores
    constructor() {
        super();
        //#endregion
        //#region Functions
        this.resetCurrentAddress = () => {
            this.currentAddress = new AddressViewModel_1.AddressViewModel();
            this.currentIndex = -1;
        };
        this.addAddress = () => {
            this.resetCurrentAddress();
            this.mode = "new";
        };
        this.saveAddress = (kendoValidator) => {
            if (!kendoValidator.validate()) {
                return;
            }
            if (this.mode == "edit") {
                this.addresses[this.currentIndex] = this.currentAddress;
            }
            else {
                this.currentAddress.Id = this.generateId(this.addresses);
                this.addresses.push(angular.copy(this.currentAddress));
            }
            if (this.currentAddress.IsPrimary) {
                for (var i = 0; i < this.addresses.length; ++i) {
                    if (this.currentAddress.Id != this.addresses[i].Id && this.addresses[i].IsPrimary) {
                        this.addresses[i].IsPrimary = false;
                    }
                }
            }
            this.resetCurrentAddress();
            this.mode = "view";
        };
        this.cancel = () => {
            this.resetCurrentAddress();
            this.mode = "view";
        };
        this.editAddress = (index) => {
            this.currentAddress = angular.copy(this.addresses[index]);
            this.currentIndex = index;
            this.mode = "edit";
        };
        this.deleteAddress = (index) => {
            this.addresses.splice(index, 1);
        };
        this.generateId = (arr) => {
            var id = -1;
            if (arr.length == 0)
                return 1;
            for (var i = 0; i < arr.length; ++i) {
                if (arr[i].Id > id) {
                    id = arr[i].Id;
                }
            }
            return id + 1;
        };
        this.resetCurrentAddress();
        this.addresses = this.addresses || [];
        this.mode = "view";
    }
}
exports.AddressSectionController = AddressSectionController;
