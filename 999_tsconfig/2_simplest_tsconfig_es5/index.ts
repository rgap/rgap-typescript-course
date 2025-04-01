// This code uses a class. When compiled with target "es5",
// TypeScript transforms the class into a function-based prototype pattern,
// which is compatible with older JavaScript engines.

class Greeter {
  // The constructor takes a greeting message.
  constructor(public greeting: string) {}

  // The greet method returns a greeting message using string concatenation.
  greet(): string {
    return "Hello, " + this.greeting;
  }
}

// Create an instance of Greeter and output the greeting.
const greeter = new Greeter("World");
console.log(greeter.greet());
