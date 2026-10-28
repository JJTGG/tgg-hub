"use client";

import { useMemo, useState } from "react";
import {
  getProjectRelationshipLabel,
  getProjectStatusLabel,
  getProjectTypeLabel,
  PROJECT_DOMAINS,
  PROJECT_TYPE_LABELS,
  type Project,
  type ProjectDomain,
  type ProjectRelationship,
  type ProjectStatus,
  type ProjectType
} from "@/data/projects";
import { ProjectCard } from "@/components/project-card";

type Filter<T> = T | "all";

const statusOrder: ProjectStatus[] = [
  "available",
  "in-development",
  "planned",
  "experimental",
  "completed",
  "demo",
  "maintained",
  "retired"
];

const relationshipOrder: ProjectRelationship[] = [
  "built",
  "adopted",
  "partner"
];

function normalizeSearchText(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLocaleLowerCase();
}

export function ProjectCatalogue({
  projects
}: {
  projects: Project[];
}) {
  const [search, setSearch] = useState("");
  const [status, setStatus] =
    useState<Filter<ProjectStatus>>("all");
  const [type, setType] =
    useState<Filter<ProjectType>>("all");
  const [domain, setDomain] =
    useState<Filter<ProjectDomain>>("all");
  const [relationship, setRelationship] =
    useState<Filter<ProjectRelationship>>("all");

  const usedDomains = PROJECT_DOMAINS.filter((candidate) =>
    projects.some((project) =>
      project.domains.includes(candidate)
    )
  );

  const typeOptions = (
    Object.keys(PROJECT_TYPE_LABELS) as ProjectType[]
  ).filter((candidate) =>
    projects.some((project) => project.type === candidate)
  );

  const statusOptions = statusOrder.filter((candidate) =>
    projects.some((project) => project.status === candidate)
  );

  const relationshipOptions = relationshipOrder.filter(
    (candidate) =>
      projects.some(
        (project) => project.relationship === candidate
      )
  );

  const filteredProjects = useMemo(() => {
    const query = normalizeSearchText(search.trim());

    return projects.filter((project) => {
      const matchesStatus =
        status === "all" || project.status === status;

      const matchesType =
        type === "all" || project.type === type;

      const matchesDomain =
        domain === "all" || project.domains.includes(domain);

      const matchesRelationship =
        relationship === "all" ||
        project.relationship === relationship;

      const searchableContent = normalizeSearchText(
        [
          project.name,
          project.summary,
          getProjectTypeLabel(project.type),
          getProjectStatusLabel(project.status),
          getProjectRelationshipLabel(project.relationship),
          ...project.domains
        ].join(" ")
      );

      return (
        matchesStatus &&
        matchesType &&
        matchesDomain &&
        matchesRelationship &&
        (!query || searchableContent.includes(query))
      );
    });
  }, [
    projects,
    search,
    status,
    type,
    domain,
    relationship
  ]);

  const filtersActive =
    Boolean(search.trim()) ||
    status !== "all" ||
    type !== "all" ||
    domain !== "all" ||
    relationship !== "all";

  function clearFilters() {
    setSearch("");
    setStatus("all");
    setType("all");
    setDomain("all");
    setRelationship("all");
  }

  return (
    <div className="catalogue">
      <div className="catalogue__controls">
        <label className="catalogue__search">
          <span>Search projects</span>
          <input
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Try Agore, AI, trading or gaming"
            autoComplete="off"
          />
        </label>

        <div className="catalogue__selects">
          <label className="catalogue__filter">
            <span>Type</span>
            <select
              value={type}
              onChange={(event) =>
                setType(
                  event.target.value as Filter<ProjectType>
                )
              }
            >
              <option value="all">All types</option>
              {typeOptions.map((item) => (
                <option key={item} value={item}>
                  {getProjectTypeLabel(item)}
                </option>
              ))}
            </select>
          </label>

          <label className="catalogue__filter">
            <span>Domain</span>
            <select
              value={domain}
              onChange={(event) =>
                setDomain(
                  event.target.value as Filter<ProjectDomain>
                )
              }
            >
              <option value="all">All domains</option>
              {usedDomains.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </label>

          <label className="catalogue__filter">
            <span>Lifecycle</span>
            <select
              value={status}
              onChange={(event) =>
                setStatus(
                  event.target.value as Filter<ProjectStatus>
                )
              }
            >
              <option value="all">All statuses</option>
              {statusOptions.map((item) => (
                <option key={item} value={item}>
                  {getProjectStatusLabel(item)}
                </option>
              ))}
            </select>
          </label>

          {relationshipOptions.length > 1 && (
            <label className="catalogue__filter">
              <span>Relationship</span>
              <select
                value={relationship}
                onChange={(event) =>
                  setRelationship(
                    event.target.value as Filter<ProjectRelationship>
                  )
                }
              >
                <option value="all">All relationships</option>
                {relationshipOptions.map((item) => (
                  <option key={item} value={item}>
                    {getProjectRelationshipLabel(item)}
                  </option>
                ))}
              </select>
            </label>
          )}
        </div>
      </div>

      <div className="catalogue__results">
        <p
          id="catalogue-results"
          role="status"
          aria-live="polite"
        >
          {filteredProjects.length === projects.length
            ? `${projects.length} projects`
            : `Showing ${filteredProjects.length} of ${projects.length} projects`}
        </p>

        {filtersActive && (
          <button
            className="text-button"
            type="button"
            onClick={clearFilters}
          >
            Clear filters
          </button>
        )}
      </div>

      {filteredProjects.length > 0 ? (
        <div className="project-grid">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>
      ) : (
        <div className="catalogue__empty" role="status">
          <h3>No matching projects</h3>
          <p>
            Try a different search or clear the filters to see
            the full catalogue.
          </p>
          <button
            className="button button--secondary"
            type="button"
            onClick={clearFilters}
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
}