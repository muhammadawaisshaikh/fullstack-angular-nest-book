// Generic Class

class GenericContainer<T> {
    private value: T;

    constructor(value: T) {
        this.value = value;
    }

    getValue(): T {
        return this.value;
    }
}

let numberContainer = new GenericContainer<number>(10);
let stringContainer = new GenericContainer<string>("World");