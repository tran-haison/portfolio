# Implementation Plan: Root Layout Hydration Warning

## Goal

Prevent React's development hydration warning when Grammarly injects attributes into the root `<body>` before hydration, while preserving visibility of genuine hydration mismatches elsewhere in the application.

## Reproduction and root cause

- **Reproduce:** Open `/` in a browser with the Grammarly extension enabled.
- **Actual:** React reports an attribute mismatch at `RootLayout`.
- **Expected:** The page hydrates without a development warning.
- **Evidence:** `.next/dev/logs/next-development.log` shows only these mismatched attributes on `<body>`:
  - `data-new-gr-c-s-check-loaded="14.1313.0"`
  - `data-gr-ext-installed=""`
- **Root cause:** Grammarly mutates `<body>` after the server HTML arrives and before React hydration. No application server/client branch or changing value participates in this mismatch.

## Proposed changes

1. Add `suppressHydrationWarning` to the root `<body>` only. This is intentionally narrower than suppressing the entire `<html>` subtree and targets the exact extension-mutated element.
2. Add `data-scroll-behavior="smooth"` to `<html>` to satisfy Next.js 16's existing route-transition warning for the intentional global `scroll-behavior: smooth` rule.
3. Add a source contract assertion so both root-layout attributes cannot regress.

## Task slices

| Slice | Scope | Verification |
| --- | --- | --- |
| RED | Add failing assertions for the two layout attributes. | `npm test` fails for the expected missing attributes. |
| GREEN | Update `src/app/layout.tsx`. | `npm test`, lint, build. |
| Browser verify | Reload `/` and inspect console output. | No hydration or missing-scroll-behavior warning. |

## Risks

- `suppressHydrationWarning` is an escape hatch. Applying it only to `<body>` prevents unrelated nested content mismatches from being hidden.
- This suppresses extension-added body-attribute differences; disabling Grammarly for localhost would also remove the warning without a code change.

## Next workflow

implementation-readiness -> dev-fix

