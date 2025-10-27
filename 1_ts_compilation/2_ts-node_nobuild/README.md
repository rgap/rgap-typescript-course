# 02 — Run directly with `ts-node` (no build step)

`ts-node` compiles TypeScript **in memory** and executes it immediately—no `index.js` is written.

> If your project (or a parent folder) has a `package.json` with `"type":"module"`, use the **ESM** commands. Otherwise, the **CommonJS** commands are the simplest.

## How to run

### Option A — Local install (reusable in this folder)

```bash
npm i -D ts-node typescript @types/node
# (If a workspace redirects the install, force this folder)
# npm i -D ts-node typescript @types/node --prefix .
```

**A1) CommonJS (safe default)**

```bash
# Force CJS via CLI compiler options
npx ts-node --compiler-options '{"module":"commonjs"}' index.ts
# or rename the file to .cts and run without extra flags:
# mv index.ts index.cts
# npx ts-node index.cts
```

**A2) ESM (when your repo uses "type":"module")**

```bash
# ts-node in ESM mode
npx ts-node --esm index.ts
# or use Node’s loader explicitly:
# node --loader ts-node/esm index.ts
```

### Option B — One-off (no local install kept)

```bash
# CommonJS
npx -p ts-node -p typescript ts-node --compiler-options '{"module":"commonjs"}' index.ts

# ESM
# npx -p ts-node -p typescript ts-node --esm index.ts
# or:
# npx -p ts-node -p typescript node --loader ts-node/esm index.ts
```

## Expected output

```
Hello, world!
```

**Tip:** If you see `TypeError: Unknown file extension ".ts"`, you’re in an **ESM context** without using `--esm` (or the loader). Use the ESM command, or force CommonJS with `--compiler-options '{"module":"commonjs"}'` (or rename to `.cts`).
