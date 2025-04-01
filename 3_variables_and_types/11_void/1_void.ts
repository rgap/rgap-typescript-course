// 12. Void Type in TypeScript
// This file demonstrates the use of the 'void' type in TypeScript.
// The 'void' type is typically used as the return type for functions that do not return a value.
// At runtime, a void function returns 'undefined'.

// --- Example 1: Function Declaration with Void Return Type ---
// JavaScript equivalent (without type annotations):
// function logMessage(message) { console.log("Message:", message); }
function logMessage(message: string): void {
  console.log("Message:", message);
  // Explanation: This function logs a message and does not return any value.
  // Its return type is void, so it implicitly returns undefined.
}

logMessage("Hello, Void!");
// Capturing the result of a void function.
let result = logMessage("Logging again!");
console.log("Result of logMessage (should be undefined):", result); // Outputs: undefined
console.log("typeof result:", typeof result); // Outputs: "undefined"

// --- Example 2: Arrow Function with Void Return Type ---
// JavaScript equivalent:
// const doNothing = () => { /* no return */ };
const doNothing: () => void = () => {
  // This function intentionally does nothing.
};

doNothing();
// Explanation: 'doNothing' is explicitly typed to return void,
// so even if it doesn't have a return statement, it returns undefined.
