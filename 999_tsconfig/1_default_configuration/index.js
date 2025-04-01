// When there is no tsconfig.json, the TypeScript compiler (tsc) uses default settings,
// targeting ES3 and using CommonJS module format. It compiles the class into an ES3-compatible
// function-based prototype pattern. This ensures compatibility with older JavaScript engines.
// TypeScript transforms the class into a function-based prototype pattern,
// which is compatible with older JavaScript engines.
var Greeter = /** @class */ (function () {
    // The constructor takes a greeting message.
    function Greeter(greeting) {
        this.greeting = greeting;
    }
    // The greet method returns a greeting message using string concatenation.
    Greeter.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    return Greeter;
}());
// Create an instance of Greeter and output the greeting.
var greeter = new Greeter("World");
console.log(greeter.greet());
