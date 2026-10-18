
import type { Metadata } from "next";
import { ProjectCard } from "@/components/project-card";
import { PROJECTS } from "@/data/projects";
import { SITE_DESCRIPTION, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Different projects. Shared direction.",
  description: SITE_DESCRIPTION,
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "TGG HUB — Different projects. Shared direction.",
    description: SITE_DESCRIPTION,
    url: SITE_URL
  }
};

const featuredProjects = PROJECTS.filter((project) => project.featured);

export default function HomePage() {
  return (
    <main>
      <section className="home-hero">
        <div className="container home-hero__grid">
          <div className="home-hero__content">
            <p className="eyebrow">An evolving ecosystem</p>

            <h1>
              Different projects.
              <span> Shared direction.</span>
            </h1>

            <p className="home-hero__description">
              TGG HUB brings independent products, tools and experiments
              together without taking away what makes each one distinct.
            </p>

            <div className="button-row">
              <a className="button button--primary" href="/ecosystem">
                Explore the ecosystem <span aria-hidden="true">↗</span>
              </a>
              <a className="button button--secondary" href="/about">
                About TGG HUB
              </a>
            </div>
          </div>

          <aside className="home-hero__rail" aria-label="TGG HUB principles">
            <div className="hero-rail-item">
              <span>01 / INDEPENDENCE</span>
              <p>Products retain their own identity and direction.</p>
            </div>
            <div className="hero-rail-item">
              <span>02 / UTILITY</span>
              <p>Build things that provide meaningful value.</p>
            </div>
            <div className="hero-rail-item">
              <span>03 / EVOLUTION</span>
              <p>Make room for new ideas without merging every project.</p>
            </div>
          </aside>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Selected projects</p>
              <h2>Work worth exploring.</h2>
            </div>
            <a className="text-link" href="/ecosystem">
              View the ecosystem <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div className="project-grid project-grid--featured">
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

      <section className="principles-section">
        <div className="container">
          <div className="principles-section__intro">
            <p className="eyebrow">The approach</p>
            <h2>A shared ecosystem, not a single application.</h2>
            <p>
              Projects can use different technologies, maintain separate
              repositories and evolve at different speeds. The hub connects
              the ecosystem without forcing every project into the same
              architecture or identity.
            </p>
          </div>

          <div className="principle-grid">
            <article>
              <span>01</span>
              <h3>Independence</h3>
              <p>
                Each product keeps its own purpose, interface and lifecycle.
              </p>
            </article>
            <article>
              <span>02</span>
              <h3>Utility</h3>
              <p>
                Products should solve real problems or create useful
                experiences.
              </p>
            </article>
            <article>
              <span>03</span>
              <h3>Evolution</h3>
              <p>
                The ecosystem can grow by adding meaningful projects rather
                than combining everything into one codebase.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="closing-section">
        <div className="container closing-section__inner">
          <div>
            <p className="eyebrow">Explore what's being built</p>
            <h2>Many directions. One ecosystem.</h2>
          </div>
          <a className="button button--on-blue" href="/ecosystem">
            Browse projects <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>
    </main>
  );
}
