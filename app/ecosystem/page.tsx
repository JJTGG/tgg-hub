
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
      <section className="page-hero page-hero--catalogue">
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

      <section className="section catalogue-section catalogue-section--compact">
        <div className="container">
          <ProjectCatalogue projects={PROJECTS} />
        </div>
      </section>
    </main>
  );
}
