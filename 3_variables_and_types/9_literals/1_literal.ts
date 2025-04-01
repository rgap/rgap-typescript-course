// 10. Literal Types in TypeScript
// This file demonstrates literal types in TypeScript.
// Literal types allow you to restrict a variable to one or more specific literal values.
// They are useful when you want to ensure that a variable can only hold a specific value or a set of specific values.

// --- Example 1: Single Literal Type ---
// Here we define a variable that can only have the literal value "hello".
// JavaScript equivalent (without type annotations):
// let greet = "hello";
let greet: "hello" = "hello";
// Explanation: 'greet' is restricted to the value "hello".
// Using typeof on 'greet' returns "string", because at runtime it is just a string.
console.log("Greet Literal:", greet);             // Outputs: "hello"
console.log("typeof greet:", typeof greet);         // Outputs: "string"

// --- Example 2: Union of Literal Types ---
// Here we define a variable that can only be either "success" or "failure".
// JavaScript equivalent (without type annotations):
// let status = "success";  // or "failure"
let status: "success" | "failure" = "success";
// Explanation: 'status' can only be assigned one of the two literal values.
// Let's log the current value and its runtime type.
console.log("Status Literal (initial):", status);   // Outputs: "success"
console.log("typeof status:", typeof status);       // Outputs: "string"

// Reassigning the variable to the other literal value.
status = "failure";
console.log("Status Literal (updated):", status);   // Outputs: "failure"
console.log("typeof status:", typeof status);       // Outputs: "string"

// --- Additional Note ---
// Literal types are compile-time constraints. At runtime, the variable values are just plain strings (or numbers, etc.).
// The restrictions only exist during type checking and help prevent assignment of invalid values.
