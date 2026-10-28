import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web3",
  description:
    "Explore TGG HUB's Web3 roots, historical work and approach to future research and collaboration.",
  alternates: {
    canonical: "/web3"
  },
  openGraph: {
    title: "Web3 — TGG HUB",
    description:
      "Web3 remains part of TGG HUB's identity as the ecosystem grows across technology.",
    url: "/web3"
  }
};

export default function Web3Page() {
  return (
    <main>
      <section className="page-hero">
        <div className="container page-hero__inner">
          <p className="eyebrow">TGG HUB / Web3</p>
          <h1>Where the journey began.</h1>
          <p>
            Web3 remains part of TGG HUB's identity while the wider
            ecosystem grows into other areas of technology. This page
            separates the history from current activity and future
            possibilities.
          </p>
        </div>
      </section>

      <section className="section editorial-section">
        <div className="container editorial-layout">
          <div className="editorial-heading">
            <p className="eyebrow">01 / The roots</p>
            <h2>Community, insight and connection.</h2>
          </div>

          <div className="editorial-copy">
            <p>
              TGG HUB's earlier presence grew around the Web3
              community: participation, project discovery, insights,
              learning, personal growth and genuine connections.
            </p>
            <p>
              The Wapka-era site, including its community and PFP
              pages, is historical context. This revamp is not a
              recreation of that implementation or a claim that
              every earlier activity remains active today.
            </p>
          </div>
        </div>
      </section>

      <section className="section editorial-section editorial-section--bordered">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">02 / Historical record</p>
              <h2>What remains part of the story.</h2>
            </div>
          </div>

          <div className="web3-history-grid">
            <article className="web3-history-item">
              <p className="eyebrow">Community history</p>
              <h3>Earlier community and PFP work</h3>
              <p>
                These initiatives belong to TGG HUB's earlier
                online history. They are not presented as a
                currently operating PFP service or an active
                community programme without fresh confirmation.
              </p>
              <span className="status-note">
                Historical activity
              </span>
            </article>

            <article className="web3-history-item">
              <p className="eyebrow">Solana</p>
              <h3>Former TGG HUB token</h3>
              <p>
                The former Solana token was burned and is not an
                active TGG HUB offering. It is retained here only
                as historical context; no revival, sale or new
                utility is being announced.
              </p>
              <span className="status-note">
                Historical only · not offered
              </span>
            </article>

            <article className="web3-history-item">
              <p className="eyebrow">Stacks</p>
              <h3>TGG NFTs</h3>
              <p>
                The separate NFT collection on Stacks still exists.
                Its existence does not imply current sales, new
                drops or an active NFT business.
              </p>
              <span className="status-note">
                Separate collection · current activity unverified
              </span>
            </article>
          </div>
        </div>
      </section>

      <section className="section editorial-section editorial-section--bordered">
        <div className="container editorial-layout">
          <div className="editorial-heading">
            <p className="eyebrow">03 / What comes next</p>
            <h2>Participation should be real, relevant and verified.</h2>
          </div>

          <div className="editorial-copy">
            <p>
              TGG HUB may pursue relevant Web3 research, project
              discovery, community relationships, collaborations
              and technical contributions where there is a clear
              reason to participate.
            </p>
            <p>
              Opportunity listings will only appear when they have
              been verified. No current campaign, allowlist,
              presale, partnership or reward is implied by this page.
            </p>

            <div className="opportunity-empty" role="status">
              <strong>
                No verified active listings are being published
                here yet.
              </strong>
              <span>
                When suitable opportunities are confirmed, they
                can be added with a source, review date and
                official destination.
              </span>
            </div>

            <a
              className="text-link"
              href="mailto:tgghub.official@gmail.com?subject=Web3%20collaboration%20enquiry"
            >
              Discuss a Web3 collaboration{" "}
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}