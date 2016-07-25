export class DropdownItemViewModel {
    constructor(data) {
        this.id = data && data.id || "";
        this.parentId = data && data.parentId || "";
        this.name = data && data.name || "";
    }
}
