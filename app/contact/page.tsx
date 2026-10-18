import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact TGG HUB at tgghub.official@gmail.com for general enquiries about the ecosystem and its projects.",
  alternates: {
    canonical: "/contact"
  },
  openGraph: {
    title: "Contact — TGG HUB",
    description:
      "Contact TGG HUB for general enquiries about the ecosystem and its projects.",
    url: "/contact"
  }
};

export default function ContactPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container page-hero__inner">
          <p className="eyebrow">Contact</p>
          <h1>Start a conversation.</h1>
          <p>
            For general enquiries about TGG HUB, the ecosystem, or the
            projects listed here, reach us through our official email.
          </p>
        </div>
      </section>

      <section className="section contact-content">
        <div className="container contact-content__inner">
          <div className="contact-note">
            <p className="eyebrow">Official email</p>
            <h2>Reach TGG HUB directly.</h2>
            <p>
              For general questions about the hub, project listings, or
              potential collaborations, send us an email.
            </p>
            <a
              className="button button--primary"
              href="mailto:tgghub.official@gmail.com"
            >
              tgghub.official@gmail.com
              <span aria-hidden="true">↗</span>
            </a>
            <p>
              Each project operates independently, so product-specific
              support may need to go through that project's own contact
              channel.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}