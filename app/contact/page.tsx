import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact TGG HUB for general enquiries, digital services, Web3 collaboration and project listing corrections.",
  alternates: {
    canonical: "/contact"
  },
  openGraph: {
    title: "Contact — TGG HUB",
    description:
      "Choose the right contact route for TGG HUB and its ecosystem.",
    url: "/contact"
  }
};

const contactRoutes = [
  {
    title: "General enquiries",
    description:
      "Questions about TGG HUB, its purpose or the wider ecosystem.",
    subject: "General enquiry"
  },
  {
    title: "Digital services",
    description:
      "New projects, discovery conversations and service proposals.",
    subject: "Digital services enquiry"
  },
  {
    title: "Web3 collaboration",
    description:
      "Relevant community, research, technical or collaboration ideas.",
    subject: "Web3 collaboration enquiry"
  },
  {
    title: "Project listing correction",
    description:
      "Report a broken destination or an outdated public project detail.",
    subject: "Project listing correction"
  }
];

export default function ContactPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container page-hero__inner">
          <p className="eyebrow">Contact</p>
          <h1>Start with the right conversation.</h1>
          <p>
            Choose the topic that best matches your message.
            Each route opens an email with a relevant subject;
            the website does not store a submission or claim
            to send a form.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-route-grid">
            {contactRoutes.map((route) => (
              <article
                className="contact-route"
                key={route.subject}
              >
                <p className="eyebrow">TGG HUB</p>
                <h2>{route.title}</h2>
                <p>{route.description}</p>
                <a
                  className="text-link"
                  href={`mailto:tgghub.official@gmail.com?subject=${encodeURIComponent(route.subject)}`}
                >
                  Compose email{" "}
                  <span aria-hidden="true">↗</span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section editorial-section editorial-section--bordered">
        <div className="container editorial-layout">
          <div className="editorial-heading">
            <p className="eyebrow">Independent products</p>
            <h2>The hub is not every product's support desk.</h2>
          </div>

          <div className="editorial-copy">
            <p>
              Projects in the ecosystem retain their own systems,
              interfaces and release cycles. For a product-specific
              issue, use that product's own official support channel
              where one is available. Contact TGG HUB about its
              public listing, general ecosystem questions or
              collaboration.
            </p>
            <p>
              Direct email:{" "}
              <a href="mailto:tgghub.official@gmail.com">
                tgghub.official@gmail.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}