class User {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    greet(): string {
        return `Hello, my name is ${this.name} and I am ${this.age} years old!`;
    }
}

// Create an instance of the User class
const myName = new User("Muhammad Awais", 30);

// Access properties and methods
const greeting = myName.greet();
console.log(greeting);