import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";

import { projects } from "@/data/projects.mjs";

type Project = (typeof projects)[number];

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const projectStyle = {
    "--project-accent": project.accent,
    "--project-accent-soft": project.accentSoft,
  } as CSSProperties;

  return (
    <article className="project-card" style={projectStyle}>
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
          <div>
            <p>{project.discipline}</p>
            <h3>{project.title}</h3>
          </div>
          <p className="project-summary">{project.summary}</p>
          <div className="project-meta">
            <span>{project.year}</span>
            <span className="project-arrow" aria-hidden="true">↗</span>
          </div>
        </div>
      </Link>
    </article>
  );
}
