// 11. Function Types in TypeScript
// This file demonstrates various ways to define function types in TypeScript.
// Functions can be defined using arrow functions, function expressions, or function declarations.
// We also show examples using both explicit type signatures and the broad 'Function' type.

// --- Example 1: Simplest Arrow Function with Inferred Type ---
// Here we define a simple arrow function without explicit type annotations.
// JavaScript equivalent (without type annotations):
// let sayHello = () => "Hello";
let sayHello = () => "Hello";
// Explanation: TypeScript infers the type as () => string.
// Using typeof on sayHello returns "function".
console.log("sayHello():", sayHello());             // Outputs: "Hello"
console.log("typeof sayHello:", typeof sayHello);     // Outputs: "function"

// --- Example 2: Explicit Function Type Signature with Arrow Function ---
// Here we explicitly annotate the function type for clarity.
// JavaScript equivalent (without type annotations):
// let add = (a, b) => a + b;
let add: (a: number, b: number) => number = (a, b) => a + b;
// Explanation: 'add' is explicitly typed as a function that takes two numbers and returns a number.
console.log("add(3, 4):", add(3, 4));               // Outputs: 7
console.log("typeof add:", typeof add);             // Outputs: "function"

// --- Example 3: Function Expression with Explicit Annotation ---
// Here we define a function using a function expression with an explicit type signature.
// JavaScript equivalent:
// let greet = function(name) { return "Hello, " + name; };
let greet: (name: string) => string = function(name: string): string {
  return "Hello, " + name;
};
// Explanation: 'greet' is explicitly typed to accept a string and return a string.
console.log("greet('Alice'):", greet("Alice"));     // Outputs: "Hello, Alice"
console.log("typeof greet:", typeof greet);         // Outputs: "function"

// --- Example 4: Using the Broad 'Function' Type ---
// Here we use the built-in 'Function' type to annotate a variable that holds a function.
// JavaScript equivalent:
// let double = function(x) { return x * 2; };
let double: Function = (x: number): number => x * 2;
// Explanation: 'double' is typed as Function. This is less precise because it doesn't enforce parameter types,
// but it tells TypeScript that double holds a callable function.
console.log("double(5):", double(5));               // Outputs: 10
console.log("typeof double:", typeof double);       // Outputs: "function"

// --- Example 5: Function with No Parameters ---
// Here we define a function that takes no parameters and returns a number.
let getCurrentYear: () => number = function(): number {
  return new Date().getFullYear();
};
// Explanation: 'getCurrentYear' returns the current year as a number.
console.log("getCurrentYear():", getCurrentYear());  // Outputs the current year (e.g., 2025)
console.log("typeof getCurrentYear:", typeof getCurrentYear); // Outputs: "function"
