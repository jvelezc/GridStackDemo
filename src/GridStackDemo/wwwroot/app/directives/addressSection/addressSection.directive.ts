import {names} from "../../angular.global";
import {AddressViewModel} from "../../viewModels/AddressViewModel";
import {BaseController} from "../../common/base.controller";

    export class AddressSectionController extends BaseController {

        //#region properties

        public mode: string;
        public currentIndex: number;
        public addresses: Array<AddressViewModel>;
        public currentAddress: AddressViewModel;
        //#endregion

        //#region constructores

        public constructor() {
            super();
            this.resetCurrentAddress();
            this.addresses = this.addresses || [];
            this.mode = "view";

        }

        //#endregion

        //#region Functions

        private resetCurrentAddress = () => {
            this.currentAddress = new AddressViewModel();
            this.currentIndex = -1;
        }

        public addAddress = () => {
            this.resetCurrentAddress();
            this.mode = "new";
        }

        public saveAddress = (kendoValidator) => {
            if (!kendoValidator.validate()) {
                return;
            }
            if (this.mode == "edit") {
                this.addresses[this.currentIndex] = this.currentAddress;
            } else {
                this.currentAddress.Id = this.generateId(this.addresses);
                this.addresses.push(angular.copy(this.currentAddress));
            }

            if (this.currentAddress.IsPrimary) {
                for (var i: number = 0; i < this.addresses.length; ++i) {
                    if (this.currentAddress.Id != this.addresses[i].Id && this.addresses[i].IsPrimary) {
                        this.addresses[i].IsPrimary = false;
                    }
                }
            }
            this.resetCurrentAddress();
            this.mode = "view";
        };

        public cancel = () => {
            this.resetCurrentAddress();
            this.mode = "view";
        }

        public editAddress = (index: number) => {
            this.currentAddress = angular.copy(this.addresses[index]);
            this.currentIndex = index;
            this.mode = "edit";
        };

        public deleteAddress = (index: number) => {
            this.addresses.splice(index, 1);
        };

        private generateId = (arr: Array<AddressViewModel>): number => {
            var id: number = -1;

            if (arr.length == 0) return 1;

            for (var i: number = 0; i < arr.length; ++i) {
                if (arr[i].Id > id) {
                    id = arr[i].Id;
                }
            }
            return id + 1;
        }

        //#endregion

    }

  
