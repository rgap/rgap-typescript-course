// 5. Any Type in TypeScript
// This file demonstrates how the 'any' type works in TypeScript.
// The 'any' type disables type checking, allowing a variable to hold values of any type.
// Although 'any' offers flexibility, using it too liberally defeats the purpose of TypeScript's type safety.

// --- Example 1: Basic Any Usage ---
// Initially assign a string value to a variable of type any.
let value: any = "Hello, world!"; // any variable initially holding a string
console.log("Value:", value); // Outputs: "Hello, world!"
console.log("typeof value:", typeof value); // Outputs: "string"

// Reassign the same variable to a number.
value = 123;
console.log("Value:", value); // Outputs: 123
console.log("typeof value:", typeof value); // Outputs: "number"

// Reassign the same variable to an object.
value = { name: "Alice", age: 25 };
console.log("Value:", value); // Outputs: { name: "Alice", age: 25 }
console.log("typeof value:", typeof value); // Outputs: "object"


// --- Example 2: Multiple Any Examples ---
// Here are two more examples showing different types assigned to 'any'.
let example1: any = [1, 2, 3]; // An array assigned to an any variable
let example2: any = true; // A boolean assigned to an any variable

console.log("example1:", example1, "-> typeof:", typeof example1); // Outputs: [1, 2, 3] -> "object"
console.log("example2:", example2, "-> typeof:", typeof example2); // Outputs: true -> "boolean"

// Note: Using 'any' disables TypeScript's compile-time type checking for that variable.
// This means you can assign values of different types without error,
// but you lose the benefits of type safety and may encounter runtime errors.
