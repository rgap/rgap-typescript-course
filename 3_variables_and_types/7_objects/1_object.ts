// 8. Object Type in TypeScript (Extended)
// This file demonstrates how to work with various built-in object types in TypeScript.
// The 'object' type represents non-primitive types such as plain objects, arrays, functions, Date, RegExp, Map, Set, and Error.
// Note: The 'object' type does not accept primitive types like string, number, or boolean.

// --- Example 1: Simple Object ---
// Here we define a simple object literal and assign it to a variable of type object.
// JavaScript equivalent (without type annotations):
// let person = { name: "Alice", age: 25 };
let person: object = { name: "Alice", age: 25 };
// Explanation: 'person' holds an object literal. 
// Using typeof on this variable returns "object".
console.log("Person Object:", person);           // Outputs: { name: "Alice", age: 25 }
console.log("typeof person:", typeof person);      // Outputs: "object"

// --- Example 2: Array as Object ---
// Arrays are also objects in JavaScript.
// JavaScript equivalent:
// let numbers = [1, 2, 3, 4, 5];
let numbers: object = [1, 2, 3, 4, 5];
// Explanation: 'numbers' is an array, but when assigned to a variable of type object, it is still an object.
// Using typeof on an array returns "object".
console.log("Numbers Array as Object:", numbers);   // Outputs: [1, 2, 3, 4, 5]
console.log("typeof numbers:", typeof numbers);      // Outputs: "object"

// --- Example 3: Function as Object ---
// Functions in JavaScript are objects as well.
// JavaScript equivalent:
// let greet = function(name) { return "Hello, " + name; };
let greet: object = function(name: string): string {
  return "Hello, " + name;
};
// Explanation: 'greet' holds a function. Even though its variable type is object,
// using typeof on a function returns "function".
console.log("Greet Function as Object:", greet);    // Outputs the function definition
console.log("typeof greet:", typeof greet);           // Outputs: "function"

// --- Example 4: Date Object ---
// Date objects are used to represent dates and times.
// JavaScript equivalent:
// let currentDate = new Date();
let currentDate: object = new Date();
// Explanation: 'currentDate' holds a Date object.
// Using typeof on a Date object returns "object".
console.log("Date Object:", currentDate);           // Outputs the current date and time
console.log("typeof currentDate:", typeof currentDate); // Outputs: "object"

// --- Example 5: RegExp Object ---
// Regular expressions are used for pattern matching.
// JavaScript equivalent:
// let regex = /abc/;
let regex: object = /abc/;
// Explanation: 'regex' holds a RegExp object.
// Using typeof on a RegExp object returns "object".
console.log("RegExp Object:", regex);               // Outputs: /abc/
console.log("typeof regex:", typeof regex);           // Outputs: "object"

// --- Example 6: Map Object ---
// Map objects are used to store key-value pairs.
// JavaScript equivalent:
// let map = new Map([["a", 1], ["b", 2]]);
let map: object = new Map<string, number>([["a", 1], ["b", 2]]);
// Explanation: 'map' holds a Map object.
// Using typeof on a Map object returns "object".
console.log("Map Object:", map);                      // Outputs: Map { 'a' => 1, 'b' => 2 }
console.log("typeof map:", typeof map);               // Outputs: "object"

// --- Example 7: Set Object ---
// Set objects are used to store unique values.
// JavaScript equivalent:
// let set = new Set([1, 2, 3, 2, 1]);
let set: object = new Set<number>([1, 2, 3, 2, 1]);
// Explanation: 'set' holds a Set object.
// Using typeof on a Set object returns "object".
console.log("Set Object:", set);                      // Outputs: Set { 1, 2, 3 }
console.log("typeof set:", typeof set);               // Outputs: "object"

// --- Example 8: Error Object ---
// Error objects are used to represent errors in JavaScript.
// JavaScript equivalent:
// let errorObj = new Error("Something went wrong!");
let errorObj: object = new Error("Something went wrong!");
// Explanation: 'errorObj' holds an Error object.
// Using typeof on an Error object returns "object".
console.log("Error Object:", errorObj);              // Outputs: Error: Something went wrong!
console.log("typeof errorObj:", typeof errorObj);     // Outputs: "object"

// --- Additional Note ---
// The 'object' type in TypeScript broadly represents any non-primitive value.
// This includes not only plain objects, arrays, and functions, but also built-in objects like Date, RegExp, Map, Set, and Error.
// For more precise typing, consider using interfaces or type aliases to describe an object's structure.
