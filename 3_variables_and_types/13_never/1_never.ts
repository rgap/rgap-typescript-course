// 14. Never Type in TypeScript
// This file demonstrates the use of the 'never' type in TypeScript.
// The 'never' type represents values that never occur, such as functions that always throw an error
// or functions that never finish executing (e.g., infinite loops).

// --- Example 1: Function that Always Throws an Error ---
// JavaScript equivalent (without type annotations):
// function errorFunction(message) { throw new Error(message); }
function errorFunction(message: string): never {
    throw new Error(message);
  }
  // Explanation: This function never returns a value because it always throws an error.
  // The return type 'never' indicates that the function does not complete normally.
  try {
    // Uncomment the next line to see the error thrown at runtime:
    // errorFunction("This function always throws!");
  } catch (e) {
    console.log("Caught an error:", (e as Error).message); // Outputs: "Caught an error: This function always throws!"
  }
  console.log("Finished errorFunction example.");
  
  // --- Example 2: Function with an Infinite Loop ---
  // JavaScript equivalent (without type annotations):
  // function infiniteLoop() { while (true) {} }
  function infiniteLoop(): never {
    while (true) {
      // This loop runs indefinitely.
    }
  }
  // Explanation: This function never returns because it loops forever.
  // Calling this function would block execution, so it is shown here for demonstration purposes only.
  // Uncomment the following line to observe its behavior (it will cause your program to hang):
  // infiniteLoop();
  console.log("Infinite loop example defined, but not executed.");
  