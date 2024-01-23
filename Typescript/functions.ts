// basic function in typescript
function addNumbers(a: number, b: number): number {
    return a + b;
}

let sum: number = addNumbers(5, 7);
console.log(`Sum: ${sum}`);

// optional parameters
function greet(name: string, greeting?: string): string {
    if (greeting) {
        return `${greeting}, ${name}!`;
    } else {
        return `Hello, ${name}!`;
    }
}

let greetingMessage: string = greet("John");
console.log(greetingMessage);

let personalizedGreeting: string = greet("Alice", "Good morning");
console.log(personalizedGreeting);

// anonymous function
let multiply = function (x: number, y: number): number {
    return x * y;
};


let product: number = multiply(3, 4);
console.log(`Product: ${product}`);

// basic arrow function
let square = (x: number): number => x * x;

let squaredValue: number = square(5);
console.log(`Square: ${squaredValue}`);

// Rest Parameters
function sumNumbers(...numbers: number[]): number {
    return numbers.reduce((total, num) => total + num, 0);
}

let totalSum: number = sumNumbers(1, 2, 3, 4, 5);
console.log(`Total Sum: ${totalSum}`);

// Function Overloading
function display(value: number): void;
function display(value: string): void;
function display(value: number | string): void {
  console.log(`Displaying: ${value}`);
}

display(42);
display("TypeScript");