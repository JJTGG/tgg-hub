import {
  getProjectRelationshipLabel,
  getProjectStatusLabel,
  getProjectTypeLabel,
  type Project
} from "@/data/projects";

type ProjectCardProps = {
  project: Project;
  featured?: boolean;
};

export function ProjectCard({
  project,
  featured = false
}: ProjectCardProps) {
  const cardClassName = [
    "project-card",
    featured ? "project-card--featured" : ""
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <article className={cardClassName}>
      <div className="project-card__top">
        <div className="project-card__identity">
          {project.logo ? (
            <img
              className="project-card__logo"
              src={project.logo}
              alt={`${project.name} logo`}
              width={48}
              height={48}
            />
          ) : (
            <span
              className="project-card__mark"
              aria-hidden="true"
            >
              {project.mark}
            </span>
          )}

          <div className="project-card__labels">
            <span className="project-card__relationship">
              {getProjectRelationshipLabel(project.relationship)}
            </span>
            <span
              className={`status-badge status-badge--${project.status}`}
            >
              {getProjectStatusLabel(project.status)}
            </span>
          </div>
        </div>

        {featured && (
          <span className="project-card__featured-label">
            Selected
          </span>
        )}
      </div>

      <div className="project-card__content">
        <p className="project-type-label">
          {getProjectTypeLabel(project.type)}
        </p>

        <h3 className="project-card__title">
          {project.detail ? (
            <a href={`/projects/${project.slug}`}>
              {project.name}
            </a>
          ) : (
            project.name
          )}
        </h3>

        <p className="project-card__summary">
          {project.summary}
        </p>
      </div>

      <div className="project-card__bottom">
        <div
          className="project-card__categories"
          aria-label="Project domains"
        >
          {project.domains.length > 0 ? (
            project.domains.map((domain) => (
              <span
                className="category-label"
                key={domain}
              >
                {domain}
              </span>
            ))
          ) : (
            <span className="category-label category-label--muted">
              Domain review pending
            </span>
          )}
        </div>

        <div className="project-card__actions">
          {project.detail && (
            <a
              className="text-link"
              href={`/projects/${project.slug}`}
            >
              Project overview{" "}
              <span aria-hidden="true">↗</span>
            </a>
          )}

          {project.destinations?.map((destination) => (
            <a
              className="text-link"
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
      </div>
    </article>
  );
}