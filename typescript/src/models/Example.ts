import * as uuid from 'uuid';

export default class Example {
    readonly id: string;
    readonly user: User;

    constructor(name: string, id: string = uuid.v4()) {
        this.id = id;
        this.user = new User(name);
    }
}

class User {
    readonly name;

    constructor(name: string) {
        this.name = name;
    }
}
