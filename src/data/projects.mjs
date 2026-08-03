/**
 * @typedef {Object} Project
 * @property {string} slug
 * @property {string} title
 * @property {string} discipline
 * @property {string} year
 * @property {string} summary
 * @property {string} status
 * @property {string} url
 * @property {string} logo
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
    slug: "keeps",
    title: "Keeps",
    discipline: "Mobile / Social photography",
    year: "2026",
    summary:
      "A calm mobile space for capturing, collecting, organizing, and gently sharing stamp-framed memories.",
    status: "Coming soon",
    url: "https://keeps.nosiahstudios.com/",
    logo: "/images/projects/keeps-logo.png",
    featured: true,
    services: ["Mobile app development", "Product design", "UI/UX design"],
    technology: ["Mobile application", "Camera and media", "Photo collections", "Private sharing"],
    overview:
      "Keeps turns everyday photos into small digital keepsakes. Its stamp camera, calendar archive, collections, page projects, friends, chat, and visibility controls are designed around memory rather than public performance.",
    challenge:
      "Most photo products optimize for feeds, attention, and volume. Keeps needed a gentler way to capture the days that matter, find them again, and share only the moments a person chooses.",
    approach:
      "The product is organized into quiet, focused spaces: playful stamp-framed capture, calendar and collection views for retrieval, scrapbook-like pages, and controlled sharing with trusted people.",
    outcome:
      "Keeps now has a coherent product concept and an early-access experience that communicates its warm, memory-first direction while the mobile release is prepared.",
    accent: "#ffb565",
    accentSoft: "rgba(255, 181, 101, 0.14)",
  },
  {
    slug: "resumie",
    title: "Resumie",
    discipline: "AI / SaaS / Web",
    year: "2026",
    summary:
      "An AI application builder that creates a job-specific resume first, then writes its matching cover letter.",
    status: "Live",
    url: "https://www.resumie.space/",
    logo: "/images/projects/resumie-logo.png",
    featured: true,
    services: ["Web development", "Full-stack development", "UI/UX design"],
    technology: ["Next.js", "AI generation", "GitHub integration", "PDF and DOCX export"],
    overview:
      "Resumie helps software engineers turn their profile and a job description into a focused application. It uses resume, GitHub, and LinkedIn context to tailor an ATS-friendly resume before producing a concise cover letter grounded in the finished document.",
    challenge:
      "Developers applying to multiple roles repeatedly reshape the same experience, projects, and skills—and then write a separate letter without a reliable connection to the final resume.",
    approach:
      "Resumie collects a candidate profile once, analyzes each target role, builds the tailored resume first, and then connects its strongest evidence to the company and role in a matching cover letter.",
    outcome:
      "The live product now supports an end-to-end application workflow with ATS-oriented structure, GitHub context, and polished PDF or Word exports for both documents.",
    accent: "#60e5ff",
    accentSoft: "rgba(96, 229, 255, 0.14)",
  },
  {
    slug: "workouch",
    title: "Workouch",
    discipline: "AI / Mobile / Fitness",
    year: "2026",
    summary:
      "A cross-platform AI workout planner that generates personalized routines and tracks every training session.",
    status: "Live",
    url: "https://workouch.nosiahstudios.com/",
    logo: "/images/projects/workouch-logo.png",
    featured: true,
    services: ["Mobile app development", "Full-stack development", "UI/UX design"],
    technology: ["iOS and Android", "AI generation", "Cloud sync", "In-app subscriptions"],
    overview:
      "Workouch combines AI workout generation, a library of more than 1,500 exercises, guided sessions, health metrics, workout history, and personal records in one mobile fitness product.",
    challenge:
      "People need training plans that match their time, equipment, experience, goals, and limitations—but building those plans and consistently recording progress can become work before the workout starts.",
    approach:
      "Two creation paths serve different mindsets: Shuffle turns a natural-language request into a routine in seconds, while Neat provides structured control over duration, intensity, goals, equipment, location, and target areas.",
    outcome:
      "Workouch is available on iOS and Android with personalized workout generation, guided training, progress tracking, secure account sync, and free and paid access tiers.",
    accent: "#b8ff3d",
    accentSoft: "rgba(184, 255, 61, 0.14)",
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
