// Interface
interface Person {
    name: string;
    age: number;
}

// Using the interface to define an object
let john: Person = {
    name: "John Doe",
    age: 25,
};

console.log(`Person: ${john.name}, Age: ${john.age}`);

