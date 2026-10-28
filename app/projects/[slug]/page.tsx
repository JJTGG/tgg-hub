import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getProjectBySlug,
  getProjectRelationshipLabel,
  getProjectStatusLabel,
  getProjectTypeLabel,
  PROJECTS
} from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return PROJECTS
    .filter((project) => project.detail)
    .map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project?.detail) {
    return { title: "Project not found" };
  }

  return {
    title: project.name,
    description: project.summary,
    alternates: {
      canonical: `/projects/${project.slug}`
    },
    openGraph: {
      title: `${project.name} — TGG HUB`,
      description: project.summary,
      url: `/projects/${project.slug}`
    }
  };
}

export default async function ProjectDetailPage({
  params
}: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project?.detail) {
    notFound();
  }

  return (
    <main>
      <section className="page-hero project-detail-hero">
        <div className="container page-hero__inner">
          <a className="back-link" href="/ecosystem">
            <span aria-hidden="true">←</span> Ecosystem
          </a>

          <div className="project-detail-hero__identity">
            {project.logo ? (
              <img
                className="project-detail-hero__logo"
                src={project.logo}
                alt={`${project.name} logo`}
                width={64}
                height={64}
              />
            ) : (
              <span
                className="project-detail-hero__mark"
                aria-hidden="true"
              >
                {project.mark}
              </span>
            )}

            <div>
              <p className="eyebrow">
                {getProjectRelationshipLabel(
                  project.relationship
                )}
              </p>
              <h1>{project.name}</h1>
            </div>
          </div>

          <div className="project-detail-hero__metadata">
            <span
              className={`status-badge status-badge--${project.status}`}
            >
              {getProjectStatusLabel(project.status)}
            </span>
            <span className="category-label">
              {getProjectTypeLabel(project.type)}
            </span>

            {project.domains.map((domain) => (
              <span className="category-label" key={domain}>
                {domain}
              </span>
            ))}
          </div>

          <p className="project-detail-hero__summary">
            {project.summary}
          </p>
        </div>
      </section>

      {project.coverImage && (
        <section className="container project-cover">
          <img
            src={project.coverImage}
            alt={`${project.name} project visual`}
          />
        </section>
      )}

      <section className="section">
        <div className="container project-detail-layout">
          <aside className="project-detail-sidebar">
            <p className="eyebrow">Project overview</p>
            <p>
              This project maintains its own identity and
              development lifecycle within the TGG HUB ecosystem.
            </p>
          </aside>

          <div className="project-detail-content">
            <p className="project-detail-introduction">
              {project.detail.introduction}
            </p>

            {project.detail.sections.map((section) => (
              <section
                className="project-detail-section"
                key={section.heading}
              >
                <h2>{section.heading}</h2>
                <p>{section.body}</p>
              </section>
            ))}

            {project.destinations &&
              project.destinations.length > 0 && (
                <div className="project-detail-destinations">
                  {project.destinations.map((destination) => (
                    <a
                      className="button button--primary"
                      href={destination.url}
                      key={destination.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {destination.label}{" "}
                      <span aria-hidden="true">↗</span>
                    </a>
                  ))}
                </div>
              )}

            <div className="project-detail-return">
              <a
                className="button button--secondary"
                href="/ecosystem"
              >
                Back to the ecosystem
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}