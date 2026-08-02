# Product Requirements Document: Nosiah Studios Portfolio V1

**Status:** Approved  
**Owner:** Portfolio owner  
**Last updated:** 2026-08-03  
**Operator profile:** Hybrid

## Purpose and users

Nosiah Studios needs a credible first-release portfolio for prospective clients, collaborators, and hiring partners. The experience should feel dark, minimal, modern, futuristic, and subtly space-inspired while remaining legible and fast.

### In scope

- Responsive brand shell and global navigation.
- Homepage with positioning, selected work, capability/stack, studio story, and contact CTA.
- Work archive and statically generated project detail pages.
- Honest placeholder state for case studies whose details are not supplied.
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

## Decisions

| Decision | Choice | Reason |
| --- | --- | --- |
| Aesthetic | Refined retro-futuristic minimalism | Matches the approved dark, modern, space-adjacent direction without visual noise. |
| Content | Local data module | Best fit for a small, static portfolio; avoids premature CMS complexity. |
| Theme | Dark-only V1 | A deliberate brand decision rather than an automatic system theme. |
| Motion | CSS-first, progressive enhancement | Keeps Server Components and low client JavaScript. |
| Unconfirmed facts | Explicit “case study in progress” copy | Prevents fabricated portfolio claims. |

## Analytics, risks, rollout

- Analytics is deferred until a vendor and privacy posture are selected.
- Main risk: placeholder work content reduces credibility until real case studies are supplied. Owner action: replace objects in the project data module.
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
