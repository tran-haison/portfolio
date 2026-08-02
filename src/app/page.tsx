import Link from "next/link";

import { ProjectCard } from "@/components/project-card";
import { projects } from "@/data/projects.mjs";

const capabilities = [
  {
    index: "01",
    title: "Product thinking",
    copy: "Turning ambiguous ideas into focused, useful digital products with a clear point of view.",
  },
  {
    index: "02",
    title: "Interface systems",
    copy: "Building visual languages and component systems that stay coherent as the product grows.",
  },
  {
    index: "03",
    title: "Full-stack builds",
    copy: "Moving from prototype to production with modern web architecture, thoughtful data, and clean delivery.",
  },
  {
    index: "04",
    title: "Creative technology",
    copy: "Using interaction, motion, and emerging tools to make digital experiences feel memorable—not noisy.",
  },
];

const currentStack = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "Design systems",
];

export default function Home() {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <main id="main-content">
      <section className="hero section-shell" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow hero-reveal hero-reveal-one">
            <span className="status-dot" aria-hidden="true" />
            Independent digital studio · Melbourne / Everywhere
          </p>
          <h1 id="hero-title" className="hero-title hero-reveal hero-reveal-two">
            Digital work for{" "}
            <span>the near future.</span>
          </h1>
          <p className="hero-intro hero-reveal hero-reveal-three">
            Nosiah Studios creates thoughtful products, precise interfaces, and
            digital experiences where design and engineering share the same orbit.
          </p>
          <div className="hero-actions hero-reveal hero-reveal-four">
            <Link className="button button-primary" href="/#work">
              Explore selected work
              <span aria-hidden="true">↘</span>
            </Link>
            <a className="text-link" href="mailto:hello@nosiah.studio">
              hello@nosiah.studio
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <div className="hero-orbit" aria-hidden="true">
          <div className="orbit-grid" />
          <div className="orbit-ring orbit-ring-outer" />
          <div className="orbit-ring orbit-ring-inner" />
          <div className="orbit-axis orbit-axis-x" />
          <div className="orbit-axis orbit-axis-y" />
          <div className="orbit-core">
            <span>N/S</span>
            <small>EST. 26</small>
          </div>
          <span className="orbit-satellite orbit-satellite-one" />
          <span className="orbit-satellite orbit-satellite-two" />
          <span className="orbit-coordinate orbit-coordinate-top">−37.8136°</span>
          <span className="orbit-coordinate orbit-coordinate-bottom">144.9631°</span>
        </div>

        <div className="hero-footnote">
          <span>Creative direction</span>
          <span>Interface design</span>
          <span>Product engineering</span>
        </div>
      </section>

      <section id="work" className="section-shell section-block" aria-labelledby="work-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Selected coordinates / 01</p>
            <h2 id="work-title">Work with a signal.</h2>
          </div>
          <Link className="text-link section-link" href="/work">
            View the full archive
            <span aria-hidden="true">↗</span>
          </Link>
        </div>

        <div className="project-list">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </section>

      <section
        id="capabilities"
        className="section-shell section-block capabilities"
        aria-labelledby="capabilities-title"
      >
        <div className="section-heading capabilities-heading">
          <div>
            <p className="eyebrow">Capabilities / 02</p>
            <h2 id="capabilities-title">From first thought to final interface.</h2>
          </div>
          <p className="section-note">
            Small-studio focus with an end-to-end view of the product.
          </p>
        </div>

        <ol className="capability-list">
          {capabilities.map((capability) => (
            <li key={capability.index}>
              <span className="capability-index">{capability.index}</span>
              <h3>{capability.title}</h3>
              <p>{capability.copy}</p>
              <span className="capability-mark" aria-hidden="true">+</span>
            </li>
          ))}
        </ol>
      </section>

      <section id="stack" className="section-shell stack-section" aria-labelledby="stack-title">
        <div className="stack-copy">
          <p className="eyebrow">Current frequency / 03</p>
          <h2 id="stack-title">A modern stack, chosen with intent.</h2>
          <p>
            The portfolio currently runs on these tools. Replace and expand this
            list as your complete technology profile comes into focus.
          </p>
        </div>
        <ul className="stack-grid" aria-label="Current technology stack">
          {currentStack.map((technology, index) => (
            <li key={technology}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              {technology}
            </li>
          ))}
        </ul>
      </section>

      <section id="about" className="section-shell about-section" aria-labelledby="about-title">
        <div className="about-marker" aria-hidden="true">
          <span>Independent</span>
          <span>Human-led</span>
          <span>Built with care</span>
        </div>
        <div className="about-copy">
          <p className="eyebrow">Studio / Self / 04</p>
          <h2 id="about-title">One practice. Two perspectives.</h2>
          <p className="about-lead">
            Nosiah Studios is the umbrella for the work. Behind it is an individual
            point of view—curious, technical, and invested in the details that make
            software feel considered.
          </p>
          <p>
            The studio format creates room to collaborate broadly while keeping the
            work personal. Strategy, visual systems, and implementation stay close
            enough to influence one another from beginning to end.
          </p>
        </div>
      </section>

      <section id="contact" className="contact-section" aria-labelledby="contact-title">
        <div className="section-shell contact-inner">
          <p className="eyebrow">Open channel / 05</p>
          <h2 id="contact-title">
            Have something{" "}
            <span>worth building?</span>
          </h2>
          <a className="contact-link" href="mailto:hello@nosiah.studio">
            Start a conversation
            <span aria-hidden="true">↗</span>
          </a>
          <p className="contact-note">
            Available for selected products, websites, and creative collaborations.
          </p>
        </div>
      </section>
    </main>
  );
}
