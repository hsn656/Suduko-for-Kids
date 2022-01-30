export class Item {
    #id
    #src
    constructor(id) {
        this.#id = id;    
        this.#src = `./images/Groups/1/${id}.png`;
    }

    //#region getters & setters
    get Id() {
        return this.#id;
    }

    set Id(value) {
        this.#id = value;
    }

    get Src() {
        return this.#src;
    }

    set Src(value) {
        this.#src = value;
    }
    //#endregion   
}

