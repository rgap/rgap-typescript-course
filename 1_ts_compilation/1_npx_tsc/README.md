# 01 — Compile with `npx` + run with `node`

Use `npx` to access the TypeScript compiler without installing it globally, then execute the emitted JavaScript with Node.

## How to run

### Option A — One-off (downloads compiler for this command only)

```bash
npx -p typescript tsc index.ts
node index.js
```

Skip the confirmation:

```bash
npx --yes -p typescript tsc index.ts
```

### Option B — Use a local dev dependency (no downloads on each run)

```bash
npm i -D typescript
npx tsc index.ts
node index.js
```

**Expected output**

```
Hello, world!
```
