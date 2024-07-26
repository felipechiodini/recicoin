export class ErrorBag {

    constructor() {
        this.errors = {}
    }

    record(error) {
        this.errors = error
    }

    add(key, error) {
        this.errors[key] = error
    }

    has(key) {
        return !!this.errors[key]
    }

    get(key) {
        return this.errors[key].join(', ')
    }

    remove(key) {
        delete this.errors[key]
    }

    clear() {
        this.errors = {}
    }

}