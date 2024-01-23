// Explicitly declaring variable types
let message: string = "Hello, TypeScript!";
let numberValue: number = 42;
let isTrue: boolean = true;

// TypeScript can infer types
let inferredString = "TypeScript Inference";
let inferredNumber = 123;

// Constants using const
const PI: number = 3.14;
const GREETING: string = "Welcome!";

// Object literal with explicit types
let person: { name: string; age: number; isAdmin: boolean } = {
    name: "John Doe",
    age: 25,
    isAdmin: false,
};

// TypeScript can infer types in object literals
let book = {
    title: "The TypeScript Guide",
    author: "Jane Smith",
    pages: 200,
};

// Creating a class
class Car {
    brand: string;
    year: number;

    constructor(brand: string, year: number) {
        this.brand = brand;
        this.year = year;
    }

    startEngine() {
        console.log(`The ${this.brand} car is starting...`);
    }
}

// Creating an instance of the class
let myCar = new Car("Toyota", 2022);
myCar.startEngine();