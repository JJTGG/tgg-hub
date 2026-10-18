
import {
  getProjectRelationshipLabel,
  getProjectStatusLabel,
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
  return (
    <article
      className={[
        "project-card",
        featured ? "project-card--featured" : ""
      ].filter(Boolean).join(" ")}
    >
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
            <span className="project-card__mark" aria-hidden="true">
              {project.mark}
            </span>
          )}

          <div className="project-card__labels">
            <span className="project-card__relationship">
              {getProjectRelationshipLabel(project.relationship)}
            </span>
            <span className={`status-badge status-badge--${project.status}`}>
              {getProjectStatusLabel(project.status)}
            </span>
          </div>
        </div>

        {featured && (
          <span className="project-card__featured-label">Selected</span>
        )}
      </div>

      <div className="project-card__content">
        <h3 className="project-card__title">
          {project.detail ? (
            <a href={`/projects/${project.slug}`}>
              {project.name}
            </a>
          ) : (
            project.name
          )}
        </h3>

        <p className="project-card__summary">{project.summary}</p>
      </div>

      <div className="project-card__bottom">
        <div className="project-card__categories" aria-label="Project categories">
          {project.categories.slice(0, 2).map((category) => (
            <span className="category-label" key={category}>
              {category}
            </span>
          ))}
        </div>

        {project.detail && (
          <a
            className="text-link"
            href={`/projects/${project.slug}`}
            aria-label={`Read the ${project.name} overview`}
          >
            Project overview <span aria-hidden="true">↗</span>
          </a>
        )}
      </div>
    </article>
  );
}
