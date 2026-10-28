import type { Metadata } from "next";
import { ProjectCard } from "@/components/project-card";
import { ProjectCatalogue } from "@/components/project-catalogue";
import { PROJECTS } from "@/data/projects";

export const metadata: Metadata = {
  title: "Ecosystem",
  description:
    "Explore independent products, tools and experiments connected to TGG HUB by type, domain, lifecycle and relationship.",
  alternates: {
    canonical: "/ecosystem"
  },
  openGraph: {
    title: "Ecosystem — TGG HUB",
    description:
      "Browse TGG HUB's projects by type, domain, lifecycle and relationship.",
    url: "/ecosystem"
  }
};

const featuredProjects = PROJECTS.filter(
  (project) => project.featured
);

export default function EcosystemPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container page-hero__inner">
          <p className="eyebrow">The ecosystem</p>
          <h1>Independent work, in one place.</h1>
          <p>
            Explore products, tools and experiments connected
            to TGG HUB. Each project keeps its own purpose,
            identity and development path.
          </p>
        </div>
      </section>

      {featuredProjects.length > 0 && (
        <section className="section section--compact">
          <div className="container">
            <div className="section-heading">
              <div>
                <p className="eyebrow">Selected projects</p>
                <h2>Start here.</h2>
              </div>
            </div>

            <div className="project-grid">
              {featuredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  featured
                />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section catalogue-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Browse all</p>
              <h2>The project catalogue</h2>
            </div>
            <p className="section-heading__copy">
              Search by name or description, or narrow the
              catalogue by type, domain, lifecycle or relationship.
            </p>
          </div>

          <ProjectCatalogue projects={PROJECTS} />
        </div>
      </section>
    </main>
  );
}