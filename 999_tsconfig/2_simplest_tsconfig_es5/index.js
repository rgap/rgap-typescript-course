// This code uses a class. When compiled with target "es5",
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
