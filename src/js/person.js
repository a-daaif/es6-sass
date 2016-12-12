export class Person {

    constructor(name) {
        this._name = name
    }

    get name() {return this._name}

    set name(name) {this._name = name}

    toString() { return `Person : name = ${this.name}`}

}

export class Employe extends Person {

    constructor(id, name) {
        super(name)
        this._id = id
    }

    get id() { return this._id}

    toString() { return `Employe : name = ${this.name}, id = ${this.id}`}

}