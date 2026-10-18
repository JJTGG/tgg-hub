
import type { MetadataRoute } from "next";
import { PROJECTS } from "@/data/projects";
import { SITE_URL } from "@/lib/site";

const staticRoutes = [
  "",
  "/ecosystem",
  "/about",
  "/contact"
];

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${SITE_URL}${route}`,
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7
  }));

  const projectPages: MetadataRoute.Sitemap = PROJECTS
    .filter((project) => project.detail)
    .map((project) => ({
      url: `${SITE_URL}/projects/${project.slug}`,
      changeFrequency: "monthly",
      priority: 0.5
    }));

  return [...pages, ...projectPages];
}
