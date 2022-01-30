export class Item {
    #id
    #group_id
    #src
    constructor(id,group_id) {
        this.#id = id;    
        this.#group_id=group_id;
        this.#src = `./images/Groups/${group_id}/${id}.png`;
    }

    //#region getters & setters
    get Id() {
        return this.#id;
    }

    set Id(value) {
        this.#id = value;
    }

    get group_Id() {
        return this.#group_id;
    }

    set group_Id(value) {
        this.#group_id = value;
    }

    get Src() {
        return this.#src;
    }

    set Src(value) {
        this.#src = value;
    }
    //#endregion   
}

