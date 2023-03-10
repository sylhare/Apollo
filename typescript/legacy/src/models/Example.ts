import * as uuid from 'uuid'

export default class Example {
    readonly id: string
    readonly user: User
    extra: String | null

    constructor(name: string, id: string = uuid.v4(), extra = 'extra') {
        this.id = id
        this.user = new User(name)
        this.extra = extra
    }
}

class User {
    readonly name

    constructor(name: string) {
        this.name = name
    }
}
