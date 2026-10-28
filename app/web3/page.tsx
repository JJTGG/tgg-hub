
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web3",
  description:
    "Explore TGG HUB's Web3 roots, official Stacks token, NFT collection and future direction.",
  alternates: {
    canonical: "/web3"
  },
  openGraph: {
    title: "Web3 — TGG HUB",
    description:
      "TGG HUB's Web3 roots, official Stacks token and NFT collection.",
    url: "/web3"
  }
};

const tokenUrl =
  "https://stx.city/bonding-curve/SP9C39XV8GD9XBQ41JDYG37ZP7PFPHYHQ89HHRAA.tgg-hub-stxcity-dex/SP9C39XV8GD9XBQ41JDYG37ZP7PFPHYHQ89HHRAA.tgg-hub-stxcity/SP359XMJYWRDY24H7VDYJWKPAGHN75V8M0W1NBF3P";

const nftMarketplaceUrl =
  "https://stacks.gamma.io/collections/tgg-hub";

const nftContractAddress =
  "SP9C39XV8GD9XBQ41JDYG37ZP7PFPHYHQ89HHRAA.tgg-hub";

export default function Web3Page() {
  return (
    <main>
      <section className="page-hero">
        <div className="container page-hero__inner">
          <p className="eyebrow">TGG HUB / Web3</p>
          <h1>Where the journey began.</h1>
          <p>
            Web3 remains part of TGG HUB's identity as the wider
            ecosystem grows across technology. This page brings
            together the community roots and official Stacks assets
            associated with TGG HUB.
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
              The earlier community website and PFP pages remain
              part of that history. The current hub builds on those
              roots while making room for independent products,
              tools and experiments across other areas of technology.
            </p>
          </div>
        </div>
      </section>

      <section className="section editorial-section editorial-section--bordered">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">02 / Stacks</p>
              <h2>Official TGG HUB assets.</h2>
            </div>
            <p className="section-heading__copy">
              Explore the official token's bonding-curve interface
              and the TGG HUB NFT collection.
            </p>
          </div>

          <div className="web3-history-grid">
            <article className="web3-history-item">
              <p className="eyebrow">Official token</p>
              <h3>TGG HUB token</h3>
              <p>
                The official TGG HUB token is available through
                its STX.CITY bonding-curve page. The interface
                provides buy and sell actions for the token.
              </p>
              <p>
                Bonding-curve prices can change with supply
                and demand. Review the token and transaction
                details in your wallet before confirming an action.
              </p>
              <div className="button-row">
                <a
                  className="button button--primary"
                  href={tokenUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Open token on STX.CITY
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </article>

            <article className="web3-history-item">
              <p className="eyebrow">NFT collection</p>
              <h3>TGG HUB NFTs</h3>
              <p>
                The TGG HUB NFT collection is on Stacks.
                Its contract address identifies the collection;
                Gamma provides the public marketplace page.
              </p>
              <p>
                <strong>Collection contract address</strong>
              </p>
              <p>
                <code
                  style={{
                    overflowWrap: "anywhere",
                    whiteSpace: "normal"
                  }}
                >
                  {nftContractAddress}
                </code>
              </p>
              <div className="button-row">
                <a
                  className="button button--primary"
                  href={nftMarketplaceUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  View collection on Gamma
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
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
              TGG HUB may pursue relevant Web3 research,
              technical contributions, project discovery and
              collaborations where there is a clear reason to
              participate.
            </p>
            <p>
              Any new campaign, partnership or reward will be
              presented only when its details and official sources
              have been verified. Existing asset links do not imply
              a new campaign or promise of returns.
            </p>
            <a
              className="text-link"
              href="mailto:tgghub.official@gmail.com?subject=Web3%20collaboration%20enquiry"
            >
              Discuss a Web3 collaboration
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
