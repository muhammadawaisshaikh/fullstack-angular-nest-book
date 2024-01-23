// Generic Function

function identity<T>(arg: T): T {
    return arg;
}

let numberResult = identity<number>(42);
let stringResult = identity<string>("Hello");