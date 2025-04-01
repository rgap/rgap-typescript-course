// 4. Enum Types in TypeScript
// This file demonstrates how to define and use enum types in TypeScript.
// Enums allow you to define a set of named constants, which compile to JavaScript objects.

// --- Example 1: Numeric Enum ---
// Numeric enums are the default in TypeScript.
// Each member is assigned a numeric value starting from 0 (unless specified otherwise).
enum Color {
  Red, // 0
  Green, // 1
  Blue, // 2
}
// We assign a variable to one of the enum members.
let favoriteColor: Color = Color.Green;
// Explanation: When compiled, the enum becomes an object mapping keys to values,
// and numeric enums have a reverse mapping as well.
// Logging favoriteColor prints the numeric value (1).
console.log("Favorite Color (Numeric Enum):", favoriteColor); // Outputs: 1
// Using typeof on a numeric enum variable returns "number"
console.log("typeof favoriteColor:", typeof favoriteColor); // Outputs: "number"
// Using typeof on the enum object 'Color' returns "object"
console.log("typeof Color:", typeof Color); // Outputs: "object"

// --- Additional Note ---
// Numeric enums have both forward (key-to-value) and reverse (value-to-key) mappings,
// whereas string enums and heterogeneous enums only have a one-way mapping (key-to-value).
console.log("Enum Color Object:", Color); // Logs the entire Color enum object


// --- Example 2: String Enum ---
// String enums allow you to explicitly assign string values to each member.
enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}
// We assign a variable to one of the enum members.
let moveDirection: Direction = Direction.Left;
// Explanation: String enums compile to objects with key-to-string mappings only.
// Logging moveDirection prints the string value.
console.log("Move Direction (String Enum):", moveDirection); // Outputs: "LEFT"
// Using typeof on a string enum variable returns "string"
console.log("typeof moveDirection:", typeof moveDirection); // Outputs: "string"
