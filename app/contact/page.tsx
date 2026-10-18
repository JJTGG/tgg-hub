
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact information for TGG HUB.",
  alternates: {
    canonical: "/contact"
  },
  openGraph: {
    title: "Contact — TGG HUB",
    description: "Contact information for TGG HUB.",
    url: "/contact"
  }
};

export default function ContactPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container page-hero__inner">
          <p className="eyebrow">Contact</p>
          <h1>Make the right connection.</h1>
          <p>
            TGG HUB is continuing to evolve. Public contact channels
            will be listed here when a verified channel is established.
          </p>
        </div>
      </section>

      <section className="section contact-content">
        <div className="container contact-content__inner">
          <div className="contact-note">
            <p className="eyebrow">Current availability</p>
            <h2>No unverified contact details.</h2>
            <p>
              This page intentionally avoids placeholder email addresses,
              inactive forms and links that do not lead to a real contact
              channel.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
