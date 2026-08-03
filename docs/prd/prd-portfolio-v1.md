# Product Requirements Document: Nosiah Studios Portfolio V1

**Status:** Approved  
**Owner:** Portfolio owner  
**Last updated:** 2026-08-04
**Operator profile:** Hybrid

## Purpose and users

Nosiah Studios needs a credible first-release portfolio for prospective clients, collaborators, and hiring partners. The experience should feel dark, minimal, modern, futuristic, and subtly space-inspired while remaining legible and fast.

### In scope

- Responsive brand shell and global navigation.
- Homepage with positioning, selected work, capability/stack, studio story, and contact CTA.
- Work archive and statically generated project detail pages.
- Brand-first studio positioning, contact details, professional links, and three real project case studies.
- Metadata, keyboard navigation, reduced-motion handling, and visible focus states.

### Out of scope

- CMS, blog, database, auth, server contact form, analytics vendor, theme switcher, and unverified client claims.

## Goals and guardrails

- **Primary metric:** All V1 acceptance criteria pass at handoff.
- **Guardrails:** Production build succeeds; no fabricated client names or outcomes; core navigation and content work without client-side JavaScript; WCAG 2.2 AA patterns are used.

## Persona and JTBD

| Use case | Actor | Job to be done |
| --- | --- | --- |
| UC-001 | Prospective collaborator | Quickly understand what Nosiah Studios creates and whether the aesthetic and capabilities fit. |
| UC-002 | Technical reviewer | Inspect the studio's technology focus and project thinking. |
| UC-003 | Portfolio owner | Update projects and stack items without restructuring page components. |

## Requirement registry

| ID | Requirement | Priority | Owner | Status | Objective |
| --- | --- | --- | --- | --- | --- |
| REQ-001 | Communicate the Nosiah Studios positioning and primary contact action above the fold. | P0 | Frontend | Done | BRD-OBJ-001 |
| REQ-002 | Present selected projects and a complete work index from one typed content source. | P0 | Frontend | Done | BRD-OBJ-001 |
| REQ-003 | Provide a unique, statically generated route for every project. | P0 | Frontend | Done | BRD-OBJ-001 |
| REQ-004 | Present capabilities, current build stack, studio story, and contact options. | P1 | Frontend | Done | BRD-OBJ-001 |
| REQ-005 | Meet responsive, keyboard, contrast, reduced-motion, metadata, and build-quality constraints. | P0 | Frontend / QA | Done | BRD-OBJ-001 |

## User stories and acceptance criteria

**US-001:** As a prospective collaborator, I want an immediate studio introduction so that I can decide whether to explore the work.

- **AC-001 [WEB]:** Given the homepage at any supported viewport, when it renders, then one H1, a concise positioning statement, and a contact CTA are visible and readable.
- **AC-002 [WEB]:** Given keyboard navigation, when focus moves through the header and CTAs, then every interactive element has a visible focus state and logical order.

**US-002:** As a technical reviewer, I want to browse projects and their context so that I can evaluate the studio's approach.

- **AC-003 [WEB]:** Given portfolio data, when the homepage and work index render, then project title, discipline, year, summary, and status come from the shared content source.
- **AC-004 [WEB]:** Given a valid project slug, when its route renders, then the page shows the project narrative, services, technology, and next-project navigation.
- **AC-005 [WEB]:** Given an invalid project slug, when its route is requested, then the application returns the branded not-found state.

**US-003:** As the portfolio owner, I want content separated from presentation so that future projects can be added safely.

- **AC-006 [WEB]:** Given a new valid project object, when tests and the build run, then the project is included in static paths without editing page components.

**US-004:** As a motion-sensitive or mobile visitor, I want a stable responsive experience so that the portfolio remains comfortable and usable.

- **AC-007 [WEB]:** Given a viewport from 320px upward, when primary pages render, then no required content depends on horizontal scrolling and touch targets remain operable.
- **AC-008 [WEB]:** Given `prefers-reduced-motion: reduce`, when the site renders, then decorative animation and smooth scrolling are disabled.
- **AC-009 [WEB]:** Given the homepage hero, when it renders, then an optimized decorative neural-brain visual provides CSS-driven motion without replacing accessible content.

**US-005:** As a prospective client or hiring partner, I want clear studio capabilities and live-project links so that I can evaluate and contact Nosiah Studios.

- **AC-010 [WEB]:** Given the approved brand direction, when the homepage and shell render, then Nosiah Studios, the four stated services, worldwide availability, email, LinkedIn, and GitHub are present without personal-name or first-person-singular positioning.
- **AC-011 [WEB]:** Given the supplied project catalogue, when work pages render, then Keeps, Resumie, and Workouch have unique case studies and a valid live-project URL.
- **AC-012 [WEB]:** Given a project card on the homepage or work archive, when it renders, then the center beacon shows that project's locally stored official logo instead of a generated initial.
- **AC-013 [WEB]:** Given a project with supplied screenshots, when its detail route renders, then the orbit placeholder is replaced by an optimized, accessible, responsive product-screen gallery while projects without screenshots retain the fallback visual.
- **AC-014 [WEB]:** Given the Resumie detail route, when its showcase renders, then a fictional company, Software Engineer role, and sample job description appear as source input on the left while a tailored resume and matched cover letter appear as the generated outputs on the right.

## Decisions

| Decision | Choice | Reason |
| --- | --- | --- |
| Aesthetic | Refined retro-futuristic minimalism | Matches the approved dark, modern, space-adjacent direction without visual noise. |
| Content | Local data module | Best fit for a small, static portfolio; avoids premature CMS complexity. |
| Theme | Dark-only V1 | A deliberate brand decision rather than an automatic system theme. |
| Motion | CSS-first, progressive enhancement | Keeps Server Components and low client JavaScript. |
| Unconfirmed implementation details | Product-level technology labels only | Prevents private framework or infrastructure assumptions from being presented as facts. |

## Analytics, risks, rollout

- Analytics is deferred until a vendor and privacy posture are selected.
- Main risk: project-specific framework and infrastructure details are not yet confirmed. Owner action: supply repositories or an authoritative stack list before adding deeper technical claims.
- Rollout: local verification followed by standard static-capable Next.js deployment.

## RACI

| Activity | Portfolio owner | Codex engineering | QA |
| --- | --- | --- | --- |
| Brand direction and factual content | A/R | C | I |
| Implementation | C | A/R | C |
| Automated verification | I | R | A |
| Deployment approval | A/R | C | I |

## Traceability

- Technical contract: `docs/srs/srs-portfolio-v1.md`
- Implementation plan: `docs/prd/prd-plan-portfolio-v1.md`
- Verification evidence: `docs/srs/srs-walkthrough.md`

## Change log

| Date | Author | Change |
| --- | --- | --- |
| 2026-08-03 | Codex | Initial V1 requirements from approved discovery direction. |
| 2026-08-03 | Codex | Added brand contact channels and the Keeps, Resumie, and Workouch content handoff. |
| 2026-08-03 | Codex | Shifted public positioning from a personal portfolio to a Nosiah Studios-first voice. |
| 2026-08-03 | Codex | Added locally stored official project logos to shared homepage and work cards. |
| 2026-08-04 | Codex | Added the four supplied Keeps mobile screenshots to its case-study hero. |
| 2026-08-04 | Codex | Expanded the Keeps case-study hero to seven App Store screenshots in an infinite carousel. |
| 2026-08-04 | Codex | Added seven Workouch App Store screenshots using the shared infinite project carousel. |
| 2026-08-04 | Codex | Added a reference-informed Resumie job-to-application workflow showcase. |
