# Portfolio V1 Verification Walkthrough

**Verified:** 2026-08-03  
**Outcome:** Implemented with brand-first positioning, contact, and three project case studies

## Acceptance evidence

| Acceptance criteria | Evidence | Result |
| --- | --- | --- |
| AC-001 | Homepage renders one branded H1, positioning copy, and primary work/contact actions. | Pass |
| AC-002 | Semantic header/nav, skip link, native links/buttons, and global `:focus-visible` treatment. | Pass |
| AC-003 | Homepage and `/work` render records from `src/data/projects.mjs`. | Pass |
| AC-004 | `/work/keeps`, `/work/resumie`, and `/work/workouch` build as static detail routes with facts, narrative, and next navigation. | Pass |
| AC-005 | `/work/unknown-coordinate` renders the branded 404 state. | Pass |
| AC-006 | `generateStaticParams` derives paths from the tested project catalogue. | Pass |
| AC-007 | Browser checks at 1440×1000 and 375×812 showed no horizontal overflow; mobile navigation/contact remain usable. | Pass |
| AC-008 | Reduced-motion media query disables animation, transitions, and smooth scrolling. | Pass |
| AC-009 | The hero renders an optimized, original neural-brain visual with floating, pulsing, orbit, glow, and scan animations. | Pass |
| AC-010 | Homepage and shell present Nosiah Studios, worldwide availability, the four supplied services, email, LinkedIn, and GitHub without personal-name or first-person-singular positioning. | Pass |
| AC-011 | Keeps, Resumie, and Workouch each render a unique case study and valid live-project CTA. | Pass |
| AC-012 | Homepage and `/work` cards render optimized local Keeps, Resumie, and Workouch logos instead of initials. | Pass |

## Automated evidence

- `npm test`: 13/13 tests pass.
- `npm run lint`: pass with zero errors or warnings.
- `npm run build`: pass on Next.js 16.2.12; `/`, `/work`, and all project detail routes are prerendered.
- `git diff --check`: pass.
- Browser inspection: homepage and Resumie detail render their expected content and links without horizontal overflow.

## Visual review

- Desktop homepage: 1440×1000, animated neural-brain hero and navigation visible, no overflow.
- Mobile homepage: 375×812, the animated brain and all three real project cards load without horizontal overflow.
- Mobile `/work`: all three project logos load at 375×812 with no horizontal overflow.
- Desktop Resumie detail: project metadata, live URL, three narrative sections, and next-project navigation present.

## Hero animation follow-up

- Added `public/images/hero-neural-brain.webp` as an optimized 1254×1254 WebP asset.
- The generated artwork is decorative (`alt=""`) so the hero heading remains the accessible content.
- Motion is CSS-driven and automatically collapses under `prefers-reduced-motion: reduce`.
- Added the narrow root hydration guard for browser extensions and the Next.js smooth-scroll marker.

## Content handoff

Before public deployment, the portfolio owner should:

1. Supply authoritative framework and infrastructure stacks for Keeps, Resumie, and Workouch if deeper technical detail is wanted.
2. Add project screenshots or videos for richer case-study visuals.
3. Add a profile portrait only if the personal side of the portfolio should be more prominent.
