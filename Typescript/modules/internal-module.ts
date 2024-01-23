// Internal way to create Module
namespace MathUtils {
    export function add(x: number, y: number): number {
        return x + y;
    }

    export function subtract(x: number, y: number): number {
        return x - y;
    }
}

// Usage:
let result = MathUtils.add(5, 3);