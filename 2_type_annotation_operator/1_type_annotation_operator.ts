// a. JavaScript version:

// let greeting = "Hello, World!";
// console.log("Greeting:", greeting);
// In JavaScript, typeof greeting would return "string".



// b. TypeScript version with explicit type annotation:

let greeting: string = "Hello, World!"; // This enforces that 'greeting' is of type string.
console.log("Greeting:", greeting);

// When this TypeScript code is transpiled, the resulting JavaScript is:
//
// let greeting = "Hello, World!";
// console.log("Greeting:", greeting);
//
// Notice that:
//   - The ": string" annotation is removed.
//   - There is no runtime type enforcement; JavaScript simply runs the code as is.



// Transpilation key points:
//
// 1. Compile-Time Checking:
//    - Type annotations (e.g., ": string") are used by the TypeScript compiler to catch type errors early.
//    - Type annotations ensure that variables are used consistently with their declared types during development.
//    - For instance, assigning a non-string value to a variable declared as a string will cause a compile-time error.
//
// 2. No Runtime Enforcement:
//    - Once TypeScript code is transpiled to JavaScript, the type annotations are removed.
//    - JavaScript itself DOES NOT ENFORCE TYPES AT RUNTIME, meaning that any type safety provided
//      by TypeScript is purely a compile-time feature.
//
// 3. Erasure of Types:
//    - The process of removing type annotations is known as "type erasure".
//    - The final JavaScript output contains no TypeScript-specific syntax, so it behaves just like
//      any other JavaScript code.
