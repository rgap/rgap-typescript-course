## TypeScript (TS)

TypeScript is a **typed superset of JavaScript** created by Microsoft (2012).

- The compiler **transpiles** TS to plain JavaScript that runs anywhere JS runs.
- **Key idea:** TypeScript catches many errors **before** your code ever executes.
- **Remember:** **All TS compiles to JS.** No TypeScript types exist at runtime—they’re erased during compilation.

## JavaScript vs. TypeScript

- **JS**: Dynamic, no static types; quick to start but prone to type-related bugs.
- **TS**: Adds static types and compile-time checks; prevents common errors and improves maintenance.

## TypeScript Features

- **Static Typing**
  Optional but highly recommended. Types describe shapes of data (objects, functions, arrays, etc.). TS can infer types or you can annotate them.

- **Type Checking at Compile Time**
  `tsc` analyzes your program and reports errors like invalid property access, wrong argument counts, unsafe unions, etc.

- **Modern Tooling & Developer Experience (DX)**
  IntelliSense, auto-imports, jump-to-definition, safer refactors, and project-wide rename—backed by types.

- **Language Features**
  Interfaces, enums, generics, union/intersection types, literal types, `unknown`/`never`, utility types, decorators (experimental), and more.

- **Configuration**
  `tsconfig.json` lets you choose module/target output, strictness, path aliases, JSX handling, and incremental builds.

## Historical Context

- 2012 — Public debut (v0.8). Microsoft releases TypeScript to the public after ~2 years internal dev. Early focus: classes, modules, tooling.
- 2013 — Generics (v0.9). Core type-system power-up with generics.
- 2014 — TypeScript 1.0. First “stable” release. AtScript announced. Google previews AtScript at ng‑europe as an experimental, annotation‑heavy superset aimed at Angular 2.
- 2015 - Angular 2 chooses TS. Google and Microsoft announce Angular 2 will be built with TypeScript (folding AtScript ideas into TS 1.5)accelerating adoption. TypeScript 1.6 adds JSX support and the .tsx extension. Introduces as casting to avoid JSX conflicts.
- 2016 — TypeScript 2.0. Landmark features: strict null checks and broader ecosystem support.
- 2018 — TypeScript 3.0. Improvements around tuples and project structuring pave the way for very large repos.
- 2020 — TypeScript 4.0. Variadic tuple types, JSX factory improvements; no breaking changes—focus on ergonomics.
- 2023 — TypeScript 5.0. Big modernization push: standardized decorators, better ESM/bundler support, simpler config, perf work.
- 2024 — TypeScript 5.5–5.7. Iterative language‑service and ergonomics updates; alignment with latest ECMAScript targets and libs.
- 2025 — TypeScript 5.8 and native compiler previews. Continued performance/ergonomics, plus previews of a native (non‑JS) compiler and editor components aimed at major speedups.
