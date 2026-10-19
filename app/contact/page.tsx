import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact TGG HUB for general enquiries, collaboration opportunities, feedback, and ecosystem project updates.",
  alternates: {
    canonical: "/contact"
  },
  openGraph: {
    title: "Contact — TGG HUB",
    description:
      "Get in touch with TGG HUB about the ecosystem, collaborations, project listings, and feedback.",
    url: "/contact"
  }
};

export default function ContactPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container page-hero__inner">
          <p className="eyebrow">Contact</p>
          <h1>Let's start a conversation.</h1>
          <p>
            Have a question about TGG HUB, an idea to share, or an
            opportunity worth exploring? Reach us through our official
            contact channel.
          </p>
        </div>
      </section>

      <section className="section contact-content">
        <div className="container">
          <div className="editorial-layout">
            <div className="editorial-heading">
              <p className="eyebrow">Official contact</p>
              <h2>Reach TGG HUB directly.</h2>
            </div>

            <div className="editorial-copy">
              <p>
                For general questions about the hub and its ecosystem,
                collaboration proposals, project listing updates, or
                feedback, send us an email.
              </p>

              <p>
                <a
                  className="button button--primary"
                  href="mailto:tgghub.official@gmail.com"
                >
                  tgghub.official@gmail.com
                  <span aria-hidden="true">↗</span>
                </a>
              </p>

              <p>
                Include the relevant project name and enough context
                for us to understand your message.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="editorial-section editorial-section--bordered">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">What can you contact us about?</p>
              <h2>Make the right connection.</h2>
            </div>
          </div>

          <div className="principle-grid">
            <article>
              <span>01 / ENQUIRIES</span>
              <h3>General questions</h3>
              <p>
                Learn more about TGG HUB, its purpose, the ecosystem,
                or the projects featured on the site.
              </p>
            </article>

            <article>
              <span>02 / COLLABORATION</span>
              <h3>Partnerships and ideas</h3>
              <p>
                Share a collaboration proposal, a relevant opportunity,
                or an idea involving TGG HUB and its wider ecosystem.
              </p>
            </article>

            <article>
              <span>03 / FEEDBACK</span>
              <h3>Project listings and feedback</h3>
              <p>
                Report outdated ecosystem information, suggest a
                listing correction, or share feedback about the hub.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="editorial-section editorial-section--bordered">
        <div className="container">
          <div className="editorial-layout">
            <div className="editorial-heading">
              <p className="eyebrow">Independent products</p>
              <h2>The hub isn't every product's support desk.</h2>
            </div>

            <div className="editorial-copy">
              <p>
                Projects featured on TGG HUB retain their own identity,
                websites, technical systems, and development lifecycles.
                TGG HUB connects the ecosystem without merging those
                independent products into one service.
              </p>

              <p>
                For a product-specific issue, use that product's own
                official contact channel when one is available. For
                questions about its listing or its relationship with
                the wider ecosystem, contact TGG HUB.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}