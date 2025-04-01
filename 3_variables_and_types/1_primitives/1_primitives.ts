// 1. Primitive Types in TypeScript
// This file demonstrates all the primitive types available in TypeScript.
// The primitive types such as string, number, and boolean are built into JavaScript (ECMAScript)
// and are provided by TypeScript as global types.

// --- 1. String ---
// 'string' is a built-in type representing textual data.
let greeting: string = "Hello, World!";

// --- 2. Number ---
// 'number' is a built-in type representing numeric values (both integers and decimals).
let age: number = 30;

// --- 3. Boolean ---
// 'boolean' is a built-in type representing true or false values.
let isStudent: boolean = true;

// --- 4. Null ---
// 'null' represents an intentional absence of any object value.
let emptyValue: null = null;

// --- 5. Undefined ---
// 'undefined' indicates that a variable has not been assigned a value.
let notAssigned: undefined = undefined;

// --- 6. Symbol ---
// 'symbol' is a built-in type used to create unique and immutable identifiers.
let uniqueId: symbol = Symbol("id");

// --- 7. BigInt ---
// 'bigint' is used for representing large integers beyond the safe integer limit of the 'number' type.
let bigNumber: bigint = 9007199254740991n;

// --- Logging All Primitive Values ---
console.log("Greeting (string):", greeting); // Outputs: Hello, World!
console.log("Age (number):", age); // Outputs: 30
console.log("Is Student (boolean):", isStudent); // Outputs: true
console.log("Empty Value (null):", emptyValue); // Outputs: null
console.log("Not Assigned (undefined):", notAssigned); // Outputs: undefined
console.log("Unique ID (symbol):", uniqueId); // Outputs: Symbol(id)
console.log("Big Number (bigint):", bigNumber); // Outputs: 9007199254740991n
