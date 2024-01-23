// Generic Interface
interface Pair<T, U> {
    first: T;
    second: U;
}

let pair1: Pair<number, string> = { first: 1, second: "two" };
let pair2: Pair<string, boolean> = { first: "yes", second: true };