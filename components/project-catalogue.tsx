"use client";

import { useMemo, useState } from "react";
import {
  getProjectStatusLabel,
  PROJECT_CATEGORIES,
  type Project,
  type ProjectCategory,
  type ProjectStatus
} from "@/data/projects";
import { ProjectCard } from "@/components/project-card";

type StatusFilter = ProjectStatus | "all";
type CategoryFilter = ProjectCategory | "all";

const statusOptions: ProjectStatus[] = [
  "available",
  "in-development",
  "experimental",
  "completed",
  "demo",
  "maintained"
];

export function ProjectCatalogue({
  projects
}: {
  projects: Project[];
}) {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState<StatusFilter>("all");
  const [category, setCategory] = useState<CategoryFilter>("all");

  const filteredProjects = useMemo(() => {
    const query = search.trim().toLocaleLowerCase();

    return projects.filter((project) => {
      const matchesStatus =
        status === "all" || project.status === status;

      const matchesCategory =
        category === "all" || project.categories.includes(category);

      const searchableContent = [
        project.name,
        project.summary,
        ...project.categories
      ].join(" ").toLocaleLowerCase();

      const matchesSearch =
        !query || searchableContent.includes(query);

      return matchesStatus && matchesCategory && matchesSearch;
    });
  }, [projects, search, status, category]);

  const usedCategories = PROJECT_CATEGORIES.filter((candidate) =>
    projects.some((project) => project.categories.includes(candidate))
  );

  const filtersActive =
    search.trim() !== "" || status !== "all" || category !== "all";

  function clearFilters() {
    setSearch("");
    setStatus("all");
    setCategory("all");
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
            placeholder="Search names, descriptions or categories"
          />
        </label>

        <div className="catalogue__selects">
          <label className="catalogue__filter">
            <span>Status</span>
            <select
              value={status}
              onChange={(event) =>
                setStatus(event.target.value as StatusFilter)
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

          <label className="catalogue__filter">
            <span>Category</span>
            <select
              value={category}
              onChange={(event) =>
                setCategory(event.target.value as CategoryFilter)
              }
            >
              <option value="all">All categories</option>
              {usedCategories.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </label>
        </div>
      </div>

      <div className="catalogue__results">
        <p role="status" aria-live="polite">
          {filteredProjects.length}{" "}
          {filteredProjects.length === 1 ? "project" : "projects"}
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
        <div className="catalogue__empty">
          <h3>No matching projects</h3>
          <p>
            Try a different search or clear the filters to see the
            full catalogue.
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