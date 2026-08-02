import type { Metadata } from "next";

import { ProjectCard } from "@/components/project-card";
import { projects } from "@/data/projects.mjs";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected product, interface, and creative technology work from Nosiah Studios.",
};

export default function WorkPage() {
  return (
    <main id="main-content" className="interior-page">
      <section className="section-shell archive-hero" aria-labelledby="archive-title">
        <p className="eyebrow">Archive / All coordinates</p>
        <h1 id="archive-title">
          Selected work,{" "}
          <span>archived with intent.</span>
        </h1>
        <div className="archive-intro">
          <p>
            A growing record of products, systems, and experiments created under
            Nosiah Studios. Each entry is designed to hold the thinking behind the work.
          </p>
          <span>{String(projects.length).padStart(2, "0")} entries · 2026—ongoing</span>
        </div>
      </section>

      <section className="section-shell archive-list" aria-label="Project archive">
        {projects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} />
        ))}
      </section>
    </main>
  );
}
