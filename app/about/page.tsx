
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about TGG HUB and its approach to independent products, useful experiments and a growing ecosystem.",
  alternates: {
    canonical: "/about"
  },
  openGraph: {
    title: "About — TGG HUB",
    description:
      "Learn about TGG HUB and its approach to independent products, useful experiments and a growing ecosystem.",
    url: "/about"
  }
};

export default function AboutPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container page-hero__inner">
          <p className="eyebrow">About TGG HUB</p>
          <h1>A home for independent work.</h1>
          <p>
            TGG HUB is the ecosystem layer connecting the products,
            tools and experiments being built under TGG.
          </p>
        </div>
      </section>

      <section className="section editorial-section">
        <div className="container editorial-layout">
          <div className="editorial-heading">
            <p className="eyebrow">01 / The evolution</p>
            <h2>From early community roots to an ecosystem.</h2>
          </div>
          <div className="editorial-copy">
            <p>
              TGG HUB has evolved from its earlier online community roots
              into a broader home for independent products and projects.
              The work is no longer defined by one website or a single
              application.
            </p>
            <p>
              The ecosystem grows as ideas turn into experiments, products
              become usable, and projects find their own direction.
            </p>
          </div>
        </div>
      </section>

      <section className="section editorial-section editorial-section--bordered">
        <div className="container editorial-layout">
          <div className="editorial-heading">
            <p className="eyebrow">02 / The model</p>
            <h2>Connected, not combined.</h2>
          </div>
          <div className="editorial-copy">
            <p>
              Projects connected to TGG HUB can maintain their own
              repositories, domains, interfaces, technologies and
              development lifecycles.
            </p>
            <p>
              TGG HUB provides the shared ecosystem presence without
              requiring every project to use the same stack or become
              part of one codebase. Projects can also be adopted or
              supported without implying that TGG HUB originally
              created them.
            </p>
          </div>
        </div>
      </section>

      <section className="principles-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">03 / Principles</p>
              <h2>Built with intent.</h2>
            </div>
          </div>

          <div className="principle-grid">
            <article>
              <span>01</span>
              <h3>Independence</h3>
              <p>
                Give each project room to evolve according to its own
                purpose and needs.
              </p>
            </article>
            <article>
              <span>02</span>
              <h3>Utility</h3>
              <p>
                Prioritize products and experiments that have a clear
                purpose and meaningful value.
              </p>
            </article>
            <article>
              <span>03</span>
              <h3>Evolution</h3>
              <p>
                Grow the ecosystem by adding meaningful pieces without
                making everything one thing.
              </p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
