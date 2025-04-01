// 9. Union Types in TypeScript
// This file demonstrates how to use union types in TypeScript.
// A union type allows a variable to hold values of more than one type.
// Note: Union types are a compile-time feature and do not alter the runtime value or the result of typeof.

// --- Example 1: Basic Union Type ---
// Here we declare a variable that can hold either a string or a number.
// JavaScript equivalent (without type annotations):
// let value = "Hello";  // or let value = 42;
let value: string | number = "Hello";
// Explanation: 'value' can be a string or a number.
// Logging the value and its runtime type.
console.log("Value (union type, string):", value);  // Outputs: "Hello"
console.log("typeof value:", typeof value);          // Outputs: "string"

// Reassigning the same variable to a number.
value = 42;
console.log("Value (union type, number):", value);    // Outputs: 42
console.log("typeof value:", typeof value);           // Outputs: "number"

// --- Example 2: Union Type with Custom Object Types ---
// Here we define a union type for responses that can either be a success or a failure object.
// JavaScript equivalent (without type annotations):
// let response = { success: true, message: "Operation completed." };
// or let response = { success: false, error: "Operation failed." };
type SuccessResponse = { success: true; message: string };
type FailureResponse = { success: false; error: string };
type Response = SuccessResponse | FailureResponse;

let response: Response = { success: true, message: "Operation completed." };
// Explanation: 'response' can be either a SuccessResponse or a FailureResponse.
// Logging the response and its runtime type.
console.log("Response (Success):", response);         // Outputs: { success: true, message: "Operation completed." }
console.log("typeof response:", typeof response);       // Outputs: "object"

// Now assign a failure response.
response = { success: false, error: "Operation failed." };
console.log("Response (Failure):", response);           // Outputs: { success: false, error: "Operation failed." }
console.log("typeof response:", typeof response);       // Outputs: "object"

// --- Additional Note ---
// Although union types allow a variable to accept multiple types, the actual runtime type
// is determined by the value assigned. TypeScript's union types help catch errors at compile time.
