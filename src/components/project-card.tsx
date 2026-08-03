import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";

import { projects } from "@/data/projects.mjs";

type Project = (typeof projects)[number];

type ProjectCardProps = {
  project: Project;
  index: number;
  reverse?: boolean;
};

export function ProjectCard({ project, index, reverse = false }: ProjectCardProps) {
  const projectStyle = {
    "--project-accent": project.accent,
    "--project-accent-soft": project.accentSoft,
  } as CSSProperties;

  return (
    <article
      className={`project-card${reverse ? " project-card-reversed" : ""}`}
      style={projectStyle}
    >
      <Link href={`/work/${project.slug}`} aria-label={`View ${project.title} case study`}>
        <div className="project-visual" aria-hidden="true">
          <div className="project-visual-grid" />
          <span className="project-number">{String(index + 1).padStart(2, "0")}</span>
          <span className="project-code">NS—{project.slug.toUpperCase()}</span>
          <div className="project-scope">
            <span />
            <span />
            <span />
          </div>
          <div className="project-beacon">
            <Image
              className="project-logo"
              src={project.logo}
              alt=""
              width={512}
              height={512}
              sizes="120px"
            />
          </div>
          <span className="project-status">{project.status}</span>
        </div>
        <div className="project-info">
          <div className="project-info-heading">
            <p className="project-discipline">{project.discipline}</p>
            <div className="project-title-row">
              <h3>{project.title}</h3>
              <span className="project-year">{project.year}</span>
            </div>
          </div>
          <div className="project-description-row">
            <p className="project-summary">{project.summary}</p>
            <span className="project-arrow" aria-hidden="true">↗</span>
          </div>
        </div>
      </Link>
    </article>
  );
}
