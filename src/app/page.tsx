import Image from "next/image";
import Link from "next/link";

import { ProjectCard } from "@/components/project-card";
import { projects } from "@/data/projects.mjs";

const capabilities = [
  {
    index: "01",
    title: "Web development",
    copy: "Designing and shipping responsive product sites, web applications, and polished frontend systems.",
  },
  {
    index: "02",
    title: "Mobile app development",
    copy: "Building thoughtful mobile products for iOS and Android, from the first interaction through release.",
  },
  {
    index: "03",
    title: "Full-stack development",
    copy: "Connecting interfaces, application logic, data, integrations, and deployment into complete products.",
  },
  {
    index: "04",
    title: "UI/UX design",
    copy: "Creating clear user flows and visual systems where usability, personality, and engineering stay aligned.",
  },
];

const currentStack = [
  "Android",
  "iOS",
  "Flutter",
  "React",
  "Next.js",
  "Node.js",
  "Python",
  "AWS",
];

export default function Home() {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <main id="main-content">
      <section className="hero section-shell" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow hero-reveal hero-reveal-one">
            <span className="status-dot" aria-hidden="true" />
            Independent digital studio · Working worldwide
          </p>
          <h1 id="hero-title" className="hero-title hero-reveal hero-reveal-two">
            Digital work for{" "}
            <span>the near future.</span>
          </h1>
          <p className="hero-intro hero-reveal hero-reveal-three">
            Nosiah Studios builds thoughtful web and mobile products, bringing
            interface design and full-stack engineering into the same orbit.
          </p>
          <div className="hero-actions hero-reveal hero-reveal-four">
            <Link className="button button-primary" href="/#work">
              Explore selected work
              <span aria-hidden="true">↘</span>
            </Link>
            <a className="text-link" href="mailto:nosiahstudio@gmail.com">
              nosiahstudio@gmail.com
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <div className="hero-brain" aria-hidden="true">
          <div className="brain-grid" />
          <div className="brain-glow" />
          <div className="brain-image-shell">
            <Image
              className="brain-image"
              src="/images/hero-neural-brain.webp"
              alt=""
              width={1254}
              height={1254}
              sizes="(max-width: 980px) 85vw, 38vw"
              priority
            />
          </div>
          <div className="brain-orbit brain-orbit-one">
            <span className="brain-node" />
          </div>
          <div className="brain-orbit brain-orbit-two" />
          <div className="brain-scanline" />
          <span className="brain-pulse brain-pulse-one" />
          <span className="brain-pulse brain-pulse-two" />
          <span className="brain-coordinate brain-coordinate-top">NEURAL OBJECT / 01</span>
          <span className="brain-coordinate brain-coordinate-bottom">SIGNAL / ACTIVE</span>
        </div>

        <div className="hero-footnote">
          <span>Web development</span>
          <span>Mobile applications</span>
          <span>Full-stack engineering</span>
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
            <ProjectCard
              key={project.slug}
              project={project}
              index={index}
              reverse={index % 2 === 1}
            />
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
            A practical cross-platform toolkit shaped by real web, mobile, and
            full-stack product work.
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
          <Image
            className="about-heart-image"
            src="/images/studio-heart.webp"
            alt=""
            width={1254}
            height={1254}
            sizes="(max-width: 980px) 85vw, 34vw"
          />
          <span>Independent</span>
          <span>Human-led</span>
          <span>Built with care</span>
        </div>
        <div className="about-copy">
          <p className="eyebrow">Studio / Practice / 04</p>
          <h2 id="about-title">One studio. End-to-end practice.</h2>
          <p className="about-lead">
            Nosiah Studios is an independent digital practice working across web,
            mobile, full-stack development, and UI/UX design.
          </p>
          <p>
            Every project is shaped as one connected practice, keeping product
            thinking, visual systems, and implementation close from the first idea
            through to a shipped digital product.
          </p>
          <div className="about-links" aria-label="Studio links">
            <a href="https://www.linkedin.com/in/tranhaison/" target="_blank" rel="noreferrer">
              LinkedIn <span aria-hidden="true">↗</span>
            </a>
            <a href="https://github.com/tran-haison" target="_blank" rel="noreferrer">
              GitHub <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section" aria-labelledby="contact-title">
        <div className="section-shell contact-inner">
          <p className="eyebrow">Open channel / 05</p>
          <h2 id="contact-title">
            Have something{" "}
            <span>worth building?</span>
          </h2>
          <a className="contact-link" href="mailto:nosiahstudio@gmail.com">
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
