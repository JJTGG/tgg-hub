import type { Metadata } from "next";
import { ProjectCatalogue } from "@/components/project-catalogue";
import { PROJECTS } from "@/data/projects";

export const metadata: Metadata = {
  title: "Ecosystem",
  description:
    "Explore independent products, tools and experiments connected to TGG HUB by type, domain and lifecycle.",
  alternates: {
    canonical: "/ecosystem"
  },
  openGraph: {
    title: "Ecosystem — TGG HUB",
    description:
      "Browse the products, tools and experiments connected to TGG HUB.",
    url: "/ecosystem"
  }
};

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

      <section className="section catalogue-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Project index</p>
              <h2>Find the work.</h2>
            </div>
            <p className="section-heading__copy">
              Search by name or description, then narrow the
              results by type, domain or current lifecycle.
            </p>
          </div>

          <ProjectCatalogue projects={PROJECTS} />
        </div>
      </section>
    </main>
  );
}