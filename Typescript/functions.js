// basic function in typescript
function addNumbers(a, b) {
    return a + b;
}
var sum = addNumbers(5, 7);
console.log("Sum: ".concat(sum));
// optional parameters
function greet(name, greeting) {
    if (greeting) {
        return "".concat(greeting, ", ").concat(name, "!");
    }
    else {
        return "Hello, ".concat(name, "!");
    }
}
var greetingMessage = greet("John");
console.log(greetingMessage);
var personalizedGreeting = greet("Alice", "Good morning");
console.log(personalizedGreeting);
// anonymous function
var multiply = function (x, y) {
    return x * y;
};
var product = multiply(3, 4);
console.log("Product: ".concat(product));
// basic arrow function
var square = function (x) { return x * x; };
var squaredValue = square(5);
console.log("Square: ".concat(squaredValue));
// Rest Parameters
function sumNumbers() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (total, num) { return total + num; }, 0);
}
var totalSum = sumNumbers(1, 2, 3, 4, 5);
console.log("Total Sum: ".concat(totalSum));
function display(value) {
    console.log("Displaying: ".concat(value));
}
display(42);
display("TypeScript");
