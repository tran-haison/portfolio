import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { getNextProject, getProjectBySlug, projects } from "@/data/projects.mjs";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Project not found" };
  }

  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const nextProject = getNextProject(slug);
  const projectStyle = {
    "--project-accent": project.accent,
    "--project-accent-soft": project.accentSoft,
  } as CSSProperties;

  return (
    <main id="main-content" className="project-page" style={projectStyle}>
      <article>
        <header className="section-shell project-hero">
          <div className="project-hero-meta">
            <Link className="text-link" href="/work">
              <span aria-hidden="true">←</span>
              All work
            </Link>
            <span>{project.discipline}</span>
            <span>{project.year}</span>
          </div>
          <h1>{project.title}</h1>
          <p>{project.summary}</p>
          <a
            className="button button-primary project-live-link"
            href={project.url}
            target="_blank"
            rel="noreferrer"
          >
            Visit live project
            <span aria-hidden="true">↗</span>
          </a>

          {project.screenshots.length > 0 ? (
            <div className="project-hero-visual project-screen-gallery">
              <div className="project-detail-grid" aria-hidden="true" />
              <div className="screen-gallery-glow" aria-hidden="true" />
              <div
                className="screen-gallery-phones"
                role="group"
                aria-label={`${project.title} mobile app screens`}
              >
                {project.screenshots.map((screenshot, index) => (
                  <figure
                    className={`project-phone project-phone-${index + 1}`}
                    key={screenshot.src}
                  >
                    <Image
                      src={screenshot.src}
                      alt={screenshot.alt}
                      width={1012}
                      height={2191}
                      sizes="(max-width: 720px) 36vw, 19vw"
                    />
                  </figure>
                ))}
              </div>
              <span className="detail-code" aria-hidden="true">
                NS / {project.slug.toUpperCase()} / 04 PRODUCT VIEWS
              </span>
              <span className="detail-status" aria-hidden="true">{project.status}</span>
            </div>
          ) : (
            <div className="project-hero-visual" aria-hidden="true">
              <div className="project-detail-grid" />
              <div className="detail-orbit detail-orbit-one" />
              <div className="detail-orbit detail-orbit-two" />
              <div className="detail-core">{project.title.slice(0, 1)}</div>
              <span className="detail-code">NS / {project.slug.toUpperCase()} / {project.year}</span>
              <span className="detail-status">{project.status}</span>
            </div>
          )}
        </header>

        <section className="section-shell project-overview" aria-labelledby="overview-title">
          <div>
            <p className="eyebrow">Overview</p>
            <h2 id="overview-title">The project, in context.</h2>
          </div>
          <p className="project-overview-lead">{project.overview}</p>
          <dl className="project-facts">
            <div>
              <dt>Services</dt>
              <dd>{project.services.join(" · ")}</dd>
            </div>
            <div>
              <dt>Technology</dt>
              <dd>{project.technology.join(" · ")}</dd>
            </div>
            <div>
              <dt>Status</dt>
              <dd>{project.status}</dd>
            </div>
          </dl>
        </section>

        <section className="section-shell narrative-grid" aria-label="Project narrative">
          <div className="narrative-item">
            <span>01</span>
            <div>
              <p className="eyebrow">Challenge</p>
              <h2>What needed to move.</h2>
              <p>{project.challenge}</p>
            </div>
          </div>
          <div className="narrative-item">
            <span>02</span>
            <div>
              <p className="eyebrow">Approach</p>
              <h2>How the system took shape.</h2>
              <p>{project.approach}</p>
            </div>
          </div>
          <div className="narrative-item">
            <span>03</span>
            <div>
              <p className="eyebrow">Outcome</p>
              <h2>Where the work landed.</h2>
              <p>{project.outcome}</p>
            </div>
          </div>
        </section>

        {nextProject ? (
          <nav className="next-project" aria-label="Next project">
            <Link href={`/work/${nextProject.slug}`}>
              <span className="eyebrow">Next coordinate</span>
              <strong>{nextProject.title}</strong>
              <span className="next-arrow" aria-hidden="true">↗</span>
            </Link>
          </nav>
        ) : null}
      </article>
    </main>
  );
}
