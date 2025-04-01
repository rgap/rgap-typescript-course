// When there is no tsconfig.json, the TypeScript compiler (tsc) uses default settings,
// targeting ES3 and using CommonJS module format. It compiles the class into an ES3-compatible
// function-based prototype pattern. This ensures compatibility with older JavaScript engines.

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
