/**
 * @typedef {Object} Project
 * @property {string} slug
 * @property {string} title
 * @property {string} discipline
 * @property {string} year
 * @property {string} summary
 * @property {string} status
 * @property {boolean} featured
 * @property {string[]} services
 * @property {string[]} technology
 * @property {string} overview
 * @property {string} challenge
 * @property {string} approach
 * @property {string} outcome
 * @property {string} accent
 * @property {string} accentSoft
 */

/** @type {Project[]} */
export const projects = [
  {
    slug: "origin",
    title: "Origin",
    discipline: "Identity / Portfolio",
    year: "2026",
    summary:
      "The living digital identity for Nosiah Studios—designed as a quiet signal in a noisy web.",
    status: "In development",
    featured: true,
    services: ["Creative direction", "Interface design", "Frontend engineering"],
    technology: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    overview:
      "Origin is this portfolio itself: a flexible home for the studio, its work, and the person behind it. The system pairs editorial restraint with an orbital visual language.",
    challenge:
      "Create an identity that can hold both a studio practice and an individual portfolio without making either feel secondary—or relying on familiar agency tropes.",
    approach:
      "A dark-only foundation, precise typography, luminous technical lines, and content-first layouts create a recognizable system that remains fast and practical.",
    outcome:
      "The first release establishes the brand shell and a reusable case-study structure. Real project material can now replace placeholders without redesigning the experience.",
    accent: "#b8ff3d",
    accentSoft: "rgba(184, 255, 61, 0.14)",
  },
  {
    slug: "signal",
    title: "Signal",
    discipline: "Product / Web",
    year: "Next",
    summary:
      "A reserved space for the product build that best demonstrates clear thinking under complexity.",
    status: "Case study in progress",
    featured: true,
    services: ["Product strategy", "UX systems", "Full-stack development"],
    technology: ["Add your stack", "Add your tools", "Add your platform"],
    overview:
      "Signal is an editorial placeholder for a flagship product case study. Replace this record with the real project name, context, visuals, and verified outcomes.",
    challenge:
      "Document the real problem in plain language: who experienced it, what was constrained, and why the existing approach was not enough.",
    approach:
      "Explain the decisions that mattered, the alternatives considered, and how design and engineering worked together to reach the result.",
    outcome:
      "Add measurable, verifiable outcomes when available. Until then, this page deliberately avoids manufacturing a success story.",
    accent: "#60e5ff",
    accentSoft: "rgba(96, 229, 255, 0.14)",
  },
  {
    slug: "orbit",
    title: "Orbit",
    discipline: "Experimental / Build",
    year: "Next",
    summary:
      "A future home for experimental work, creative technology, or a project that bends the usual rules.",
    status: "Case study in progress",
    featured: true,
    services: ["Creative technology", "Prototyping", "Interaction design"],
    technology: ["Add your stack", "Add your tools", "Add your platform"],
    overview:
      "Orbit reserves room for work driven by curiosity: a prototype, visual experiment, open-source tool, or unconventional client collaboration.",
    challenge:
      "Describe the question that started the experiment and the technical or creative boundary you wanted to test.",
    approach:
      "Show the iterations, failures, and discoveries that made the work valuable—not only the polished final frame.",
    outcome:
      "Capture what the experiment taught you and how that learning changed later work. Replace this guidance when the case study is ready.",
    accent: "#ff8bd8",
    accentSoft: "rgba(255, 139, 216, 0.14)",
  },
];

/**
 * @param {string} slug
 * @returns {Project | undefined}
 */
export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug);
}

/**
 * @param {string} slug
 * @returns {Project | undefined}
 */
export function getNextProject(slug) {
  const currentIndex = projects.findIndex((project) => project.slug === slug);

  if (currentIndex === -1) {
    return undefined;
  }

  return projects[(currentIndex + 1) % projects.length];
}

