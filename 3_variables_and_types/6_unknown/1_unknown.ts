// 6. Unknown Type in TypeScript
// This file demonstrates the 'unknown' type in TypeScript.
// The 'unknown' type is similar to 'any' in that it can hold any value.
// However, it is safer because you must perform type checking or use a type assertion
// before you can use it in operations that require a more specific type.

// --- Example 1: Basic Unknown Usage ---
// Here, we assign a string value to a variable of type 'unknown'.
let data: unknown = "Hello, world!";
// At this point, 'data' can be any value, but you cannot use it directly without checking its type.
// For example, this would be an error:
// data.toUpperCase(); // Error: Object is of type 'unknown'.

// We perform a type check to safely use the value.
if (typeof data === "string") {
  console.log("data as string:", data.toUpperCase()); // Now it's safe to use string methods.
}

// --- Example 2: Unknown with a Number ---
// Reassign the 'data' variable to a number.
data = 123;
console.log("data:", data);             // Outputs: 123
console.log("typeof data:", typeof data); // Outputs: "number"

// Use type narrowing to safely perform arithmetic.
if (typeof data === "number") {
  console.log("data + 10:", data + 10);  // Outputs: 133
}

// --- Example 3: Using Type Assertions with Unknown ---
// Suppose we know 'data' is a string even though it's typed as unknown.
data = "TypeScript";
// We can assert that 'data' is a string to use string-specific properties.
const lengthOfData: number = (data as string).length;
console.log("Length of data:", lengthOfData); // Outputs the length of "TypeScript"

// --- Additional Note ---
// The 'unknown' type forces you to do type checking or assertions before using the value,
// which helps prevent runtime errors compared to 'any', which does not enforce such checks.
