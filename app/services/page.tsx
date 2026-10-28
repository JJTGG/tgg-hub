import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Website development and digital solutions from TGG HUB, with scope and expectations agreed before work begins.",
  alternates: {
    canonical: "/services"
  },
  openGraph: {
    title: "Services — TGG HUB",
    description:
      "Explore website development and digital services with a clear project scope.",
    url: "/services"
  }
};

const contactEmail = "tgghub.official@gmail.com";

const serviceGroups = [
  {
    heading: "Websites and landing pages",
    intro:
      "For focused launches, personal presence and campaign-specific needs.",
    services: [
      {
        name: "Landing Page",
        description:
          "A focused page for a product, service, offer or campaign."
      },
      {
        name: "Portfolio / Personal Website",
        description:
          "A structured professional or personal presence."
      },
      {
        name: "Event / Campaign Website",
        description:
          "A dedicated destination for an event, launch or campaign."
      },
      {
        name: "Website Redesign",
        description:
          "An improvement to an existing website, based on an agreed scope."
      }
    ]
  },
  {
    heading: "Business and commerce",
    intro:
      "For organizations that need a clearer digital presence or defined online sales workflows.",
    services: [
      {
        name: "Business Website",
        description:
          "A multi-page website that explains a business, its offer and how to engage."
      },
      {
        name: "Growth Website",
        description:
          "A broader website scope with additional content, structure or integrations."
      },
      {
        name: "WhatsApp Catalog Storefront",
        description:
          "A catalogue-led storefront designed around a WhatsApp-oriented sales journey."
      },
      {
        name: "Booking / Appointment Website",
        description:
          "A booking-oriented website whose scope depends on scheduling rules and integrations."
      },
      {
        name: "E-commerce Store",
        description:
          "An online storefront with an agreed product catalogue, checkout and operational workflow."
      }
    ]
  },
  {
    heading: "Custom digital systems",
    intro:
      "For requirements that need discovery before the appropriate architecture and scope can be quoted.",
    services: [
      {
        name: "Custom Web Application / Portal",
        description:
          "A tailored application for defined users, workflows, data and access rules."
      }
    ]
  }
] as const;

const addOns = [
  "Additional standard pages and unique page templates",
  "CMS or blog setup",
  "Product catalogue entry support",
  "Standard payment gateway integration",
  "Simple third-party booking integration",
  "Technical SEO and analytics setup",
  "Copywriting for standard pages",
  "Additional revision rounds"
];

function serviceEnquiryUrl(serviceName: string) {
  return `mailto:${contactEmail}?subject=${encodeURIComponent(
    `Enquiry: ${serviceName}`
  )}`;
}

export default function ServicesPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container page-hero__inner">
          <p className="eyebrow">
            Digital services and business development
          </p>
          <h1>Let's build something useful.</h1>
          <p>
            Website development and tailored digital solutions,
            with scope, responsibilities and delivery expectations
            agreed before work begins.
          </p>

          <div className="button-row">
            <a
              className="button button--primary"
              href={`mailto:${contactEmail}?subject=Digital%20services%20enquiry`}
            >
              Discuss a project
              <span aria-hidden="true">↗</span>
            </a>
          </div>

          <p className="service-contact-fallback">
            Prefer to email directly?{" "}
            <a href={`mailto:${contactEmail}`}>
              {contactEmail}
            </a>
          </p>
        </div>
      </section>

      <section className="section service-groups-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Service areas</p>
              <h2>Choose a starting point.</h2>
            </div>
            <p className="section-heading__copy">
              The service label is only a starting point. The
              final scope is agreed in writing before work begins.
            </p>
          </div>

          <div className="service-groups">
            {serviceGroups.map((group, index) => (
              <section
                className="service-group"
                key={group.heading}
              >
                <div className="service-group__heading">
                  <span>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3>{group.heading}</h3>
                    <p>{group.intro}</p>
                  </div>
                </div>

                <div className="service-list">
                  {group.services.map((service) => (
                    <article
                      className="service-item"
                      key={service.name}
                    >
                      <div>
                        <h4>{service.name}</h4>
                        <p>{service.description}</p>
                      </div>

                      <a
                        href={serviceEnquiryUrl(service.name)}
                        aria-label={`Enquire about ${service.name}`}
                      >
                        Enquire
                        <span aria-hidden="true">↗</span>
                      </a>
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className="section editorial-section editorial-section--bordered">
        <div className="container editorial-layout">
          <div className="editorial-heading">
            <p className="eyebrow">Optional additions</p>
            <h2>Extend the scope when needed.</h2>
          </div>

          <div className="editorial-copy">
            <p>
              A project may need supporting work beyond its core
              package. Any add-on, dependency or third-party cost
              is confirmed in the written proposal rather than
              assumed to be included.
            </p>

            <ul className="plain-list">
              {addOns.map((addOn) => (
                <li key={addOn}>{addOn}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section editorial-section editorial-section--bordered">
        <div className="container editorial-layout">
          <div className="editorial-heading">
            <p className="eyebrow">Ongoing care</p>
            <h2>Maintenance with clear boundaries.</h2>
          </div>

          <div className="editorial-copy">
            <p>
              Maintenance can cover routine health checks and a
              defined amount of minor updates. It does not
              automatically cover new features, major redesigns,
              third-party expenses or unlimited emergency support.
              The chosen plan and included time are documented
              in the agreement.
            </p>
            <p>
              Maintenance is available where the project setup,
              access and ownership arrangements allow the work
              to be carried out safely.
            </p>
          </div>
        </div>
      </section>

      <section className="closing-section">
        <div className="container closing-section__inner">
          <div>
            <p className="eyebrow">The process</p>
            <h2>Scope first. Agreement next. Then the build.</h2>
            <p>
              Share the goal, relevant requirements and deadline.
              The next step is a discovery conversation and a
              written proposal—not a commitment to an undefined
              scope.
            </p>
          </div>

          <a
            className="button button--on-blue"
            href={`mailto:${contactEmail}?subject=Digital%20services%20enquiry`}
          >
            Enquire about a project
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>
    </main>
  );
}