# SRS-lite: Nosiah Studios Portfolio V1

**Status:** Ready  
**Requirements:** REQ-001–REQ-005  
**Interfaces changed:** Public Next.js routes and local content module only

## Module contract

- `src/data/projects.mjs` owns all project records and exposes lookup and next-project helpers.
- `src/app/page.tsx` renders the marketing homepage from shared content.
- `src/app/work/page.tsx` renders the full archive.
- `src/app/work/[slug]/page.tsx` generates static detail pages and calls `notFound()` for unknown slugs.
- Root layout owns metadata, fonts, header, footer, and atmospheric background.

## Project data constraints

Every project must have a unique non-empty slug, title, discipline, year, summary, status, services, technology list, overview, challenge, approach, and outcome. `featured` controls homepage inclusion. Unknown client metrics must not be represented as facts.

## Failure and empty states

- Unknown slug: branded 404 via `not-found.tsx`.
- Zero projects: content contract test fails before release.
- Missing required project property or duplicate slug: content contract test fails.
- JavaScript unavailable: all content and navigation remain server-rendered; only progressive visual behavior may be absent.

## Non-functional thresholds

- Static production build must succeed on Next.js 16.2.12.
- No runtime CSS-in-JS or new production dependency.
- WCAG 2.2 AA semantic/focus/contrast patterns; motion disabled under reduced-motion preference.
- Layout supports 320px, 768px, and 1440px verification widths.
- No authentication, PII store, mutation endpoint, or API is introduced.

## Test mapping

| AC | Lane |
| --- | --- |
| AC-001–002 | lint + browser semantic/keyboard inspection |
| AC-003–006 | Node unit tests + Next static build |
| AC-007–008 | responsive browser inspection + CSS rule inspection |

