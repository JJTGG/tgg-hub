import type { Metadata } from "next";
import { ProjectCard } from "@/components/project-card";
import { PROJECTS } from "@/data/projects";
import {
  SITE_DESCRIPTION,
  SITE_URL
} from "@/lib/site";

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

const featuredProjects = PROJECTS.filter(
  (project) => project.featured
);

export default function HomePage() {
  return (
    <main>
      <section className="home-hero">
        <div className="container home-hero__grid">
          <div className="home-hero__content">
            <p className="eyebrow">
              An evolving technology ecosystem
            </p>

            <h1>
              Different projects.
              <span> Shared direction.</span>
            </h1>

            <p className="home-hero__description">
              TGG HUB connects independent products, tools and
              experiments across Web3 and wider technology, without
              forcing them into one product or codebase.
            </p>

            <div className="button-row">
              <a
                className="button button--primary"
                href="/ecosystem"
              >
                Explore the ecosystem{" "}
                <span aria-hidden="true">↗</span>
              </a>
            </div>

            <div
              className="home-path-links"
              aria-label="Other ways to explore TGG HUB"
            >
              <a href="/web3">
                Explore our Web3 roots{" "}
                <span aria-hidden="true">↗</span>
              </a>
              <a href="/services">
                Work with TGG HUB{" "}
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          <aside
            className="home-hero__rail"
            aria-label="How the ecosystem works"
          >
            <div className="hero-rail-item">
              <span>01 / INDEPENDENCE</span>
              <p>
                Projects retain their own purpose, technology and
                lifecycle.
              </p>
            </div>
            <div className="hero-rail-item">
              <span>02 / USEFUL WORK</span>
              <p>
                Products and experiments should have a clear reason
                to exist.
              </p>
            </div>
            <div className="hero-rail-item">
              <span>03 / ROOM TO EVOLVE</span>
              <p>
                The ecosystem can grow without making everything
                one thing.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Selected projects</p>
              <h2>Explore the work.</h2>
            </div>

            <a className="text-link" href="/ecosystem">
              View all projects{" "}
              <span aria-hidden="true">↗</span>
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

      <section className="editorial-section editorial-section--bordered home-origin">
        <div className="container editorial-layout">
          <div className="editorial-heading">
            <p className="eyebrow">The roots</p>
            <h2>
              Built from community. Growing across technology.
            </h2>
          </div>

          <div className="editorial-copy">
            <p>
              TGG HUB began with Web3 community activity, insights,
              personal growth and genuine connections. The ecosystem
              has since expanded into independent products, technical
              experiments and digital solutions.
            </p>
            <p>
              Web3 remains part of the story—not the boundary of
              what TGG HUB can build or explore.
            </p>
            <a className="text-link" href="/web3">
              Read the Web3 story{" "}
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>

      <section className="home-services-strip">
        <div className="container home-services-strip__inner">
          <div>
            <p className="eyebrow">Digital services</p>
            <h2>Have something worth building?</h2>
            <p>
              Explore website development and digital solutions
              with scope agreed before work begins.
            </p>
          </div>

          <a
            className="button button--secondary"
            href="/services"
          >
            Explore services{" "}
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>
    </main>
  );
}