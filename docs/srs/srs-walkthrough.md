# Portfolio V1 Verification Walkthrough

**Verified:** 2026-08-03  
**Outcome:** Implemented and ready for real content replacement

## Acceptance evidence

| Acceptance criteria | Evidence | Result |
| --- | --- | --- |
| AC-001 | Homepage renders one branded H1, positioning copy, and primary work/contact actions. | Pass |
| AC-002 | Semantic header/nav, skip link, native links/buttons, and global `:focus-visible` treatment. | Pass |
| AC-003 | Homepage and `/work` render records from `src/data/projects.mjs`. | Pass |
| AC-004 | `/work/origin`, `/work/signal`, and `/work/orbit` build as static detail routes with facts, narrative, and next navigation. | Pass |
| AC-005 | `/work/unknown-coordinate` renders the branded 404 state. | Pass |
| AC-006 | `generateStaticParams` derives paths from the tested project catalogue. | Pass |
| AC-007 | Browser checks at 1440×1000 and 375×812 showed no horizontal overflow; mobile navigation/contact remain usable. | Pass |
| AC-008 | Reduced-motion media query disables animation, transitions, and smooth scrolling. | Pass |

## Automated evidence

- `npm test`: 7/7 tests pass.
- `npm run lint`: pass with zero errors or warnings.
- `npm run build`: pass on Next.js 16.2.12; `/`, `/work`, and all project detail routes are prerendered.
- `git diff --check`: pass.
- Browser console: zero errors across homepage, Origin detail, and 404 checks.

## Visual review

- Desktop homepage: 1440×1000, orbital hero and navigation visible, no overflow.
- Mobile homepage: 375×812, hero reveals correctly after its 520ms entrance, email/CTA remain visible, no overflow.
- Desktop Origin detail: project metadata, hero visual, three narrative sections, and Signal next-project link present.

## Content handoff

Before public deployment, the portfolio owner should:

1. Confirm that `hello@nosiah.studio` is the correct contact address.
2. Replace the Signal and Orbit guidance records with real project facts and verified outcomes.
3. Replace or expand the current technology list on the homepage.
4. Confirm the Melbourne/location wording and social links once supplied.

