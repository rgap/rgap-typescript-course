// 13. Symbol Type in TypeScript
// This file demonstrates how to work with the 'symbol' type in TypeScript.
// The 'symbol' type is used to create unique and immutable identifiers.
// Each symbol is unique, even if they share the same description.

// --- Example 1: Basic Symbol ---
// Here we create a symbol using Symbol() with a description.
// JavaScript equivalent (without type annotations):
// let sym = Symbol("id");
let sym: symbol = Symbol("id");
// Explanation: 'sym' holds a unique symbol. Even if another symbol is created with the same description,
// it will be a different unique value.
// Using typeof on a symbol returns "symbol".
console.log("Basic Symbol:", sym);                    // Outputs something like: Symbol(id)
console.log("typeof sym:", typeof sym);               // Outputs: "symbol"

// --- Example 2: Global Symbol ---
// Symbols can also be created using Symbol.for(), which creates or retrieves a symbol from the global symbol registry.
// JavaScript equivalent:
// let globalSym = Symbol.for("globalId");
let globalSym: symbol = Symbol.for("globalId");
// Explanation: 'globalSym' retrieves a symbol from the global registry associated with the key "globalId".
// Symbols created with Symbol.for() are shared globally.
// Using typeof on a global symbol also returns "symbol".
console.log("Global Symbol:", globalSym);             // Outputs: Symbol(globalId)
console.log("typeof globalSym:", typeof globalSym);     // Outputs: "symbol"

// --- Additional Note ---
// Although two symbols can have the same description, they are not equal:
// JavaScript equivalent:
// let symA = Symbol("id");
// let symB = Symbol("id");
// symA === symB; // false
let symA: symbol = Symbol("id");
let symB: symbol = Symbol("id");
console.log("symA === symB:", symA === symB);          // Outputs: false
