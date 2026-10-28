import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about TGG HUB's evolution from a Web3 community presence into a wider technology ecosystem.",
  alternates: {
    canonical: "/about"
  },
  openGraph: {
    title: "About — TGG HUB",
    description:
      "TGG HUB connects independent projects while preserving their identities and lifecycles.",
    url: "/about"
  }
};

export default function AboutPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container page-hero__inner">
          <p className="eyebrow">About TGG HUB</p>
          <h1>A wider ecosystem, built from an earlier community.</h1>
          <p>
            TGG HUB has expanded beyond its original Web3 community
            presence into a home for independent products, tools,
            experiments and technology initiatives.
          </p>
        </div>
      </section>

      <section className="section editorial-section">
        <div className="container editorial-layout">
          <div className="editorial-heading">
            <p className="eyebrow">01 / The beginning</p>
            <h2>Community, learning and genuine connections.</h2>
          </div>

          <div className="editorial-copy">
            <p>
              TGG HUB began in the Web3 community era, with
              participation, project discovery, insights, personal
              growth and connections among people who shared an
              interest in the space. Its earlier online presence
              also included PFP-related work and community pages.
            </p>
            <p>
              That history matters. The current ecosystem builds
              on the experience without pretending every old
              initiative remains active or recreating the earlier
              website as its technical foundation.
            </p>
          </div>
        </div>
      </section>

      <section className="section editorial-section editorial-section--bordered">
        <div className="container editorial-layout">
          <div className="editorial-heading">
            <p className="eyebrow">02 / The evolution</p>
            <h2>Growing beyond one technology domain.</h2>
          </div>

          <div className="editorial-copy">
            <p>
              The ecosystem now spans independent products,
              technical tools, experiments and digital solutions.
              Web3 remains part of the identity, but it is one
              domain among several—not a limit on the work that
              may belong here.
            </p>
            <p>
              Each project can maintain its own purpose,
              repository, deployment and development lifecycle.
              The hub connects the work without requiring every
              initiative to become a single application.
            </p>
          </div>
        </div>
      </section>

      <section className="principles-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">03 / The operating model</p>
              <h2>Connected, not combined.</h2>
            </div>
          </div>

          <div className="principle-grid">
            <article>
              <span>01</span>
              <h3>Independence</h3>
              <p>
                Projects retain their own purpose, repository,
                deployment and technical choices.
              </p>
            </article>

            <article>
              <span>02</span>
              <h3>Utility</h3>
              <p>
                Products and experiments should have a clear
                reason to exist.
              </p>
            </article>

            <article>
              <span>03</span>
              <h3>Evolution</h3>
              <p>
                The ecosystem can grow without forcing every
                initiative into one application.
              </p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}