# 00 — Run with `tsc` directly (no `npx`)

Use the TypeScript compiler **`tsc`** from your PATH (global install) or from your project’s local `node_modules/.bin`—**no `npx`** involved.

## What you need

- **Node.js** installed (v16+; v18+ recommended).
- **TypeScript compiler** available via one of these:

  - **Global install** (puts `tsc` on your PATH):

    ```bash
    npm i -g typescript
    tsc -v
    ```

  - **Local devDependency** (run the binary directly):

    ```bash
    npm i -D typescript
    ./node_modules/.bin/tsc -v
    ```

> Global install is the simplest way to type `tsc index.ts` anywhere. Local install keeps versions per‑project and avoids global state; you’ll invoke the local binary explicitly (or via an npm script).

## Quick start (no config)

```bash
# Choose ONE setup first:
# A) Global compiler
npm i -g typescript
# or
# B) Local compiler
npm i -D typescript

# Compile your file (no tsconfig.json required)
# If global:
tsc index.ts
# If local (no npx):
./node_modules/.bin/tsc index.ts

# Run the emitted JavaScript
node index.js
```

**Expected output**

```
Hello, world!
```

## Sample file (index.ts)

```ts
// A simple TypeScript file demonstrating default compiler behavior

var greeting: string = "Hello, world!";
console.log("Hello, world!");
```

## Notes

- To avoid typing the long path for the local binary, define an npm script:

  ```json
  {
    "scripts": {
      "tsc": "tsc"
    }
  }
  ```

  Then run:

  ```bash
  npm run tsc -- index.ts
  ```

  _(Still no `npx`; this uses your local `node_modules/.bin/tsc` through npm scripts.)_
