
    export interface IDropdownItemViewModel {
        id: string;
        parentId: string;
        name: string;
    }

    export class DropdownItemViewModel implements IDropdownItemViewModel {
        id: string;
        parentId: string;
        name: string;

        public constructor(data: IDropdownItemViewModel) {
            this.id = data && data.id || "";
            this.parentId = data && data.parentId || "";
            this.name = data && data.name || "";
        }
    }
