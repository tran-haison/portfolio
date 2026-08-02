# Implementation Plan: Nosiah Studios Portfolio V1

## Delivery slices

| Slice | Requirements / AC | Modules | Verification | Size |
| --- | --- | --- | --- | --- |
| 1. Content contract | REQ-002, REQ-003 / AC-003–006 | `src/data/projects.mjs` | Node unit tests | S |
| 2. Global visual system | REQ-001, REQ-005 / AC-001–002, 007–008 | root layout, global CSS, shared components | lint, build, keyboard/viewport review | M |
| 3. Homepage | REQ-001, REQ-002, REQ-004 / AC-001, 003 | homepage and section components | build and visual review | M |
| 4. Work routes | REQ-002, REQ-003 / AC-003–006 | `/work`, `/work/[slug]`, not-found | tests, static build output | M |
| 5. Release verification | REQ-005 / all | repository | test, lint, build, browser review | S |

Estimated delivery window: one focused implementation session, medium confidence. Final content replacement is separate and depends on portfolio owner inputs.

## Technical approach

- Preserve App Router Server Components by default.
- Use a single JavaScript/JSDoc content module so Node's built-in test runner can validate it without a new test dependency.
- Use Tailwind CSS 4 utilities plus global design tokens and a small set of semantic CSS classes.
- Generate project paths with `generateStaticParams`; await dynamic `params` per Next.js 16 conventions.
- Use semantic HTML, native anchors/buttons, a skip link, strong focus treatment, and reduced-motion media queries.

