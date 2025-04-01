// A simple TypeScript file demonstrating default compiler behavior.
//
// Without a tsconfig.json, TypeScript uses its default compiler settings.
// By default it targets ECMAScript 3 (ES3)&#8203;:contentReference[oaicite:3]{index=3}, so the output JavaScript is
// broadly compatible with very old environments (like IE5-era browsers)&#8203;:contentReference[oaicite:4]{index=4}.
// Modern language features (e.g. arrow functions, classes, or let/const) are
// "down-leveled" to older ES3-compatible syntax during compilation&#8203;:contentReference[oaicite:5]{index=5}.
// (Type annotations are removed since they do not exist in JavaScript.)

var greeting: string = "Hello, world!";
console.log("Hello, world!");
