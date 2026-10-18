
export type ProjectRelationship =
  | "built"
  | "adopted"
  | "partner";

export type ProjectStatus =
  | "available"
  | "in-development"
  | "experimental"
  | "completed"
  | "demo"
  | "maintained"
  | "retired";

export type ProjectCategory =
  | "Product"
  | "Trading"
  | "AI"
  | "Gaming"
  | "Commerce"
  | "Developer tools"
  | "Experiments"
  | "Automation"
  | "Productivity";

export type ProjectDetail = {
  introduction: string;
  sections: {
    heading: string;
    body: string;
  }[];
};

export type Project = {
  id: string;
  slug: string;
  name: string;
  mark: string;
  summary: string;
  relationship: ProjectRelationship;
  status: ProjectStatus;
  categories: ProjectCategory[];
  featured?: boolean;
  logo?: string;
  coverImage?: string;
  detail?: ProjectDetail;
};

export const STATUS_LABELS: Record<ProjectStatus, string> = {
  available: "Available",
  "in-development": "In development",
  experimental: "Experimental",
  completed: "V1 completed",
  demo: "Demo",
  maintained: "Maintained",
  retired: "Retired"
};

export const RELATIONSHIP_LABELS: Record<ProjectRelationship, string> = {
  built: "Built under TGG",
  adopted: "Adopted by TGG HUB",
  partner: "Partner project"
};

export const PROJECT_CATEGORIES: ProjectCategory[] = [
  "AI",
  "Automation",
  "Commerce",
  "Developer tools",
  "Experiments",
  "Gaming",
  "Product",
  "Productivity",
  "Trading"
];

export const PROJECTS: Project[] = [
  {
    id: "agore",
    slug: "agore",
    name: "Agoré",
    mark: "AG",
    summary:
      "The first version of Agoré is complete. Its product description and public destination need to be verified before a fuller public presentation.",
    relationship: "built",
    status: "completed",
    categories: ["Product"]
  },
  {
    id: "trading-tools",
    slug: "trading-tools",
    name: "Trading Tools",
    mark: "TT",
    summary:
      "A trading decision-support workspace for learning, analysis, planning, risk management and review.",
    relationship: "built",
    status: "available",
    categories: ["Trading", "Productivity"],
    featured: true,
    detail: {
      introduction:
        "Trading Tools is a standalone workspace built to support a more structured trading decision process. It brings education, analysis, planning and review into one coherent workflow.",
      sections: [
        {
          heading: "A structured workflow",
          body:
            "Learn, calculate, analyze, plan, manage risk, decide, record, review and improve. The workflow encourages traders to reason through decisions rather than treating individual calculations as complete answers."
        },
        {
          heading: "Independent product",
          body:
            "Trading Tools maintains its own product direction and technical architecture. Its development does not depend on TGG HUB becoming a backend platform."
        }
      ]
    }
  },
  {
    id: "ai-arena",
    slug: "ai-arena",
    name: "AI Arena",
    mark: "AI",
    summary:
      "A multi-model AI workspace designed to bring different model experiences into one place.",
    relationship: "built",
    status: "available",
    categories: ["AI", "Developer tools"],
    featured: true,
    detail: {
      introduction:
        "AI Arena is an independent AI workspace. It explores how people can work with multiple models through a single product experience.",
      sections: [
        {
          heading: "Model flexibility",
          body:
            "The product is designed around a bring-your-own-key approach where supported, keeping model-provider credentials and usage separate from TGG HUB itself."
        },
        {
          heading: "Independent architecture",
          body:
            "AI Arena keeps its own interface and implementation. Listing it in TGG HUB does not require moving its code into the ecosystem repository."
        }
      ]
    }
  },
  {
    id: "clutchtopup",
    slug: "clutchtopup",
    name: "ClutchTopUp",
    mark: "CTU",
    summary:
      "A game top-up platform under development, focused on a dependable purchase and fulfillment experience.",
    relationship: "built",
    status: "in-development",
    categories: ["Gaming", "Commerce"],
    detail: {
      introduction:
        "ClutchTopUp is a standalone product being developed for game top-ups, with its own catalog, ordering, payments and fulfillment lifecycle.",
      sections: [
        {
          heading: "Product focus",
          body:
            "The experience is being designed around making a purchase understandable to the customer and ensuring that order status, payment confirmation and fulfillment are handled consistently."
        },
        {
          heading: "Independent product",
          body:
            "ClutchTopUp retains its own repository, deployment, integrations and release lifecycle. TGG HUB provides its ecosystem presence rather than replacing those systems."
        }
      ]
    }
  },
  {
    id: "nexvarin",
    slug: "nexvarin",
    name: "NEXVARIN",
    mark: "NX",
    summary:
      "An independent product currently under development within the TGG HUB ecosystem.",
    relationship: "built",
    status: "in-development",
    categories: ["Product"]
  },
  {
    id: "craftmish",
    slug: "craftmish",
    name: "Craftmish",
    mark: "CM",
    summary:
      "A standalone project under development, with its own product direction and technical choices.",
    relationship: "built",
    status: "in-development",
    categories: ["Product"]
  },
  {
    id: "meayu",
    slug: "meayu",
    name: "Meayu",
    mark: "MY",
    summary:
      "An independent product being developed within the TGG HUB ecosystem.",
    relationship: "built",
    status: "in-development",
    categories: ["Product"]
  },
  {
    id: "vortyx",
    slug: "vortyx",
    name: "Vortyx",
    mark: "VX",
    summary:
      "An experimental proactivity engine exploring deterministic rules, constraints and replaceable model suggestions.",
    relationship: "built",
    status: "experimental",
    categories: ["Developer tools", "Experiments"],
    detail: {
      introduction:
        "Vortyx is an experimental system-behavior playground for a proactivity engine. It explores how deterministic behavior can govern where model-generated suggestions are permitted to act.",
      sections: [
        {
          heading: "Deterministic control",
          body:
            "Explicit rules and hard constraints can take precedence over suggestions produced by replaceable language models. The model is not treated as the final authority on system behavior."
        },
        {
          heading: "An experiment, not a finished product",
          body:
            "Vortyx remains an experimental project. Its presence in the ecosystem describes what is being explored, not a claim that it is a finished commercial product."
        }
      ]
    }
  },
  {
    id: "trading-signal-dropper",
    slug: "trading-signal-dropper",
    name: "Trading Signal Dropper",
    mark: "TSD",
    summary:
      "A bot project focused on publishing trading signals through its intended channels.",
    relationship: "built",
    status: "in-development",
    categories: ["Trading", "Automation"]
  },
  {
    id: "testing-ground",
    slug: "testing-ground",
    name: "Testing Ground",
    mark: "TG",
    summary:
      "An experimental environment for testing ideas and behavior before treating them as finished products.",
    relationship: "built",
    status: "experimental",
    categories: ["Experiments", "Developer tools"]
  },
  {
    id: "fake-os",
    slug: "fake-os",
    name: "Fake OS",
    mark: "OS",
    summary:
      "An operating-system-style interface experiment explored as a standalone project.",
    relationship: "built",
    status: "experimental",
    categories: ["Experiments", "Developer tools"]
  },
  {
    id: "auren-store",
    slug: "auren-store",
    name: "AUREN Store",
    mark: "AS",
    summary:
      "A storefront demo exploring the presentation and flow of an online shopping experience.",
    relationship: "built",
    status: "demo",
    categories: ["Commerce", "Experiments"]
  }
];

function validateProjects(projects: readonly Project[]): void {
  const ids = new Set<string>();
  const slugs = new Set<string>();

  for (const project of projects) {
    if (ids.has(project.id)) {
      throw new Error(`Duplicate project id: ${project.id}`);
    }

    if (slugs.has(project.slug)) {
      throw new Error(`Duplicate project slug: ${project.slug}`);
    }

    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(project.slug)) {
      throw new Error(`Invalid project slug: ${project.slug}`);
    }

    if (!project.name.trim() || !project.summary.trim()) {
      throw new Error(`Missing name or summary for project: ${project.id}`);
    }

    if (project.categories.length === 0) {
      throw new Error(`Project has no categories: ${project.id}`);
    }

    ids.add(project.id);
    slugs.add(project.slug);
  }
}

validateProjects(PROJECTS);

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((project) => project.slug === slug);
}

export function getProjectStatusLabel(status: ProjectStatus): string {
  return STATUS_LABELS[status];
}

export function getProjectRelationshipLabel(
  relationship: ProjectRelationship
): string {
  return RELATIONSHIP_LABELS[relationship];
}
