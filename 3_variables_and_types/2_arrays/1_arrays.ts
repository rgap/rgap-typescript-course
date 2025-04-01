// 2. Array Types in TypeScript
// This file demonstrates various ways to define arrays in TypeScript.
// There are two common syntaxes to declare an array type:
// 1. The shorthand syntax: T[]
// 2. The generic syntax: Array<T>
// Both are equivalent and compile to the same JavaScript code.
// Some developers prefer T[] for its brevity, while others use Array<T> for clarity, especially with nested generics.

// --- 1. Array using the T[] Syntax ---
// Using T[] is the shorthand syntax for defining an array of type T.
let numbers: number[] = [1, 2, 3]; // An array of numbers using T[] syntax
// Explanation: This is equivalent to Array<number>.
// JavaScript runtime: typeof numbers returns "object".

// --- 2. Array using the Generic Array<T> Syntax ---
// Using Array<T> explicitly defines an array of type T.
let names: Array<string> = ["Alice", "Bob", "Charlie"]; // An array of strings using the generic syntax
// Explanation: This is equivalent to string[].
// JavaScript runtime: typeof names returns "object".

// --- 3. Boolean Array using T[] Syntax ---
// Another example using the shorthand syntax.
let flags: boolean[] = [true, false, true];
// Explanation: This defines an array containing boolean values.

// --- 4. Mixed Type Array using Union Types ---
// You can also use union types to create arrays with mixed types.
let mixed: (string | number)[] = ["Alice", 30, "Bob", 25];
// Explanation: This array can contain both strings and numbers.

// --- 5. Tuple ---
// A tuple is a fixed-length array with a specified type for each element.
let person: [string, number] = ["Alice", 25];
// Explanation: The first element must be a string and the second a number.

// Logging all array values for demonstration:
console.log("Numbers (number[]):", numbers);       // Outputs: [1, 2, 3]
console.log("Names (Array<string>):", names);        // Outputs: ["Alice", "Bob", "Charlie"]
console.log("Flags (boolean[]):", flags);            // Outputs: [true, false, true]
console.log("Mixed ((string | number)[]):", mixed);    // Outputs: ["Alice", 30, "Bob", 25]
console.log("Person (tuple [string, number]):", person); // Outputs: ["Alice", 25]
