// Explicitly declaring variable types
var message = "Hello, TypeScript!";
var numberValue = 42;
var isTrue = true;
// TypeScript can infer types
var inferredString = "TypeScript Inference";
var inferredNumber = 123;
// Constants using const
var PI = 3.14;
var GREETING = "Welcome!";
// Object literal with explicit types
var person = {
    name: "John Doe",
    age: 25,
    isAdmin: false,
};
// TypeScript can infer types in object literals
var book = {
    title: "The TypeScript Guide",
    author: "Jane Smith",
    pages: 200,
};
// Creating a class
var Car = /** @class */ (function () {
    function Car(brand, year) {
        this.brand = brand;
        this.year = year;
    }
    Car.prototype.startEngine = function () {
        console.log("The ".concat(this.brand, " car is starting..."));
    };
    return Car;
}());
// Creating an instance of the class
var myCar = new Car("Toyota", 2022);
myCar.startEngine();
