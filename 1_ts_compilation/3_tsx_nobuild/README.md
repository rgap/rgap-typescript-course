# 03 — Run with `tsx` (fast TS runner, no build step)

`tsx` executes TypeScript files directly with very fast startup and **great ESM support**. It transpiles TS on the fly (no emitted `.js`).

## How to run

### Option A — One‑off

```bash
npx tsx index.ts
```

Watch mode:

```bash
npx tsx watch index.ts
```

### Option B — Local install (reusable in this folder)

```bash
npm i -D tsx typescript
npx tsx index.ts
```

**Expected output**

```
Hello, world!
```
