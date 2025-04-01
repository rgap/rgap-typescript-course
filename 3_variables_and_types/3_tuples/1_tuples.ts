// 3. Tuple Types in TypeScript
// This file demonstrates how to use tuple types in TypeScript.
// A tuple is a fixed-length array where each index has a specific type.

// --- Example 1: Basic Tuple ---
// We define a tuple representing a person's name and age.
// The type [string, number] ensures the first element is a string and the second is a number.
let person: [string, number] = ["Alice", 25];
// Explanation: If you try to swap the types or add/remove elements, TypeScript will raise an error.
console.log("Person tuple:", person); // Outputs: ["Alice", 25]

// --- Example 2: Extended Tuple ---
// Here, we define a tuple that represents an employee record with a name, age, and active status.
// The tuple type [string, number, boolean] enforces exactly three elements with the specified types.
let employee: [string, number, boolean] = ["Bob", 30, true];
// Explanation: This tuple ensures that the first element is a string (name),
// the second is a number (age), and the third is a boolean (active status).
console.log("Employee tuple:", employee); // Outputs: ["Bob", 30, true]

// --- Additional Note ---
// Although tuples are a kind of array, their length and the types of their elements are fixed.
// At runtime, tuples are plain JavaScript arrays.
// Therefore, using typeof on a tuple returns "object":
console.log("typeof person:", typeof person); // Outputs: "object"

// --- Destructuring Tuples ---
// You can also destructure a tuple to extract its values:
let [personName, personAge] = person;
console.log("Person Name:", personName); // Outputs: "Alice"
console.log("Person Age:", personAge);   // Outputs: 25
