// This code uses a native ES6 class.
// With target set to "es6", the output JavaScript retains the class syntax and other ES6 features.

class Greeter {
  // The constructor accepts a greeting message.
  constructor(public greeting: string) {}

  // The greet method returns a greeting message using template literals.
  greet(): string {
    return `Hello, ${this.greeting}`;
  }
}

// Create an instance of Greeter and output the greeting.
const greeter = new Greeter("World");
console.log(greeter.greet());
