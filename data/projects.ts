export type ProjectRelationship = "built" | "adopted" | "partner";

export type ProjectStatus =
  | "planned"
  | "available"
  | "in-development"
  | "experimental"
  | "completed"
  | "demo"
  | "maintained"
  | "retired";

export type ProjectType =
  | "product"
  | "tool"
  | "experiment"
  | "infrastructure"
  | "demo"
  | "project";

export type ProjectDomain =
  | "AI"
  | "Automation"
  | "Commerce"
  | "Community & social"
  | "Developer tools"
  | "Education"
  | "Gaming"
  | "Health"
  | "Infrastructure"
  | "Productivity"
  | "Sustainability"
  | "Trading"
  | "Web3";

export type ProjectDestination = {
  label: string;
  url: string;
};

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
  type: ProjectType;
  relationship: ProjectRelationship;
  status: ProjectStatus;
  domains: ProjectDomain[];
  destinations?: ProjectDestination[];
  featured?: boolean;
  logo?: string;
  coverImage?: string;
  detail?: ProjectDetail;
};

export const STATUS_LABELS: Record<ProjectStatus, string> = {
  planned: "Planned",
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

export const PROJECT_TYPE_LABELS: Record<ProjectType, string> = {
  product: "Product",
  tool: "Tool",
  experiment: "Experiment",
  infrastructure: "Infrastructure",
  demo: "Demo project",
  project: "Project"
};

export const PROJECT_DOMAINS: ProjectDomain[] = [
  "AI",
  "Automation",
  "Commerce",
  "Community & social",
  "Developer tools",
  "Education",
  "Gaming",
  "Health",
  "Infrastructure",
  "Productivity",
  "Sustainability",
  "Trading",
  "Web3"
];

export const PROJECTS: Project[] = [
  {
    id: "agore",
    slug: "agore",
    name: "Agoré",
    mark: "AG",
    summary:
      "A social platform for people, public content, discovery and private communication. V1 is complete, and the product is being refined.",
    type: "product",
    relationship: "built",
    status: "completed",
    domains: ["Community & social"],
    destinations: [
      {
        label: "Visit Agoré",
        url: "https://agore.vercel.app/"
      }
    ]
  },
  {
    id: "trading-tools",
    slug: "trading-tools",
    name: "Trading Tools",
    mark: "TT",
    summary:
      "A trading decision-support workspace for learning, analysis, planning, risk management and review.",
    type: "product",
    relationship: "built",
    status: "available",
    domains: ["Trading", "Productivity"],
    destinations: [
      {
        label: "Open Trading Tools",
        url: "https://trading-tools-xi.vercel.app/"
      }
    ],
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
    type: "product",
    relationship: "built",
    status: "available",
    domains: ["AI", "Developer tools"],
    destinations: [
      {
        label: "Open AI Arena",
        url: "https://ai-arena-red.vercel.app/"
      }
    ],
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
    type: "product",
    relationship: "built",
    status: "in-development",
    domains: ["Gaming", "Commerce"],
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
      "An infrastructure initiative in architecture and implementation preparation. Its initial specification is defined, but implementation and production infrastructure have not started.",
    type: "infrastructure",
    relationship: "built",
    status: "planned",
    domains: ["Infrastructure"]
  },
  {
    id: "craftmish",
    slug: "craftmish",
    name: "Craftmish",
    mark: "CM",
    summary:
      "A knowledge and learning system for builders that connects technologies, concepts, skills, learning resources, roadmaps, challenges and projects.",
    type: "project",
    relationship: "built",
    status: "in-development",
    domains: ["Education", "Productivity"],
    destinations: [
      {
        label: "Open Craftmish",
        url: "https://craftmish.vercel.app/"
      }
    ]
  },
  {
    id: "meayu",
    slug: "meayu",
    name: "Meayu",
    mark: "MY",
    summary:
      "A product for turning personal context and selected material into a tailored digital experience. The creator prepares, reviews, approves and shares the result.",
    type: "project",
    relationship: "built",
    status: "in-development",
    domains: ["Productivity"]
  },
  {
    id: "vortyx",
    slug: "vortyx",
    name: "Vortyx",
    mark: "VX",
    summary:
      "An experimental proactivity engine exploring deterministic rules, constraints and replaceable model suggestions.",
    type: "experiment",
    relationship: "built",
    status: "experimental",
    domains: ["Developer tools"],
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
      "A trading automation project with strategy evaluation, indicators, backtesting and Telegram-related components. It remains under development rather than being presented as an established signal service.",
    type: "tool",
    relationship: "built",
    status: "in-development",
    domains: ["Trading", "Automation"]
  },
  {
    id: "testing-ground",
    slug: "testing-ground",
    name: "Testing Ground",
    mark: "TG",
    summary:
      "An evolving environment for testing technologies and ideas under controlled conditions, then preserving observations before treating results as established.",
    type: "experiment",
    relationship: "built",
    status: "in-development",
    domains: ["Developer tools"],
    destinations: [
      {
        label: "Open Testing Ground",
        url: "https://testing-ground-gilt.vercel.app/"
      }
    ]
  },
  {
    id: "fake-os",
    slug: "fake-os",
    name: "Fake OS",
    mark: "OS",
    summary:
      "An operating-system-style interface experiment explored as a standalone project.",
    type: "experiment",
    relationship: "built",
    status: "experimental",
    domains: ["Developer tools"],
    destinations: [
      {
        label: "Open Fake OS",
        url: "https://jjtgg.github.io/fake-os/"
      }
    ]
  },
  {
    id: "auren-store",
    slug: "auren-store",
    name: "AUREN Store",
    mark: "AS",
    summary:
      "A fictional storefront concept exploring product presentation, catalogue discovery and an online shopping experience.",
    type: "demo",
    relationship: "built",
    status: "demo",
    domains: ["Commerce"],
    destinations: [
      {
        label: "View storefront demo",
        url: "https://auren-store-delta.vercel.app/"
      }
    ]
  },
  {
    id: "alder-grove-schools",
    slug: "alder-grove-schools",
    name: "Alder Grove Schools",
    mark: "AGS",
    summary:
      "A fictional school website concept demonstrating a responsive, multi-page educational website. It is a portfolio demo, not an operating school.",
    type: "demo",
    relationship: "built",
    status: "demo",
    domains: ["Education"],
    destinations: [
      {
        label: "View demo",
        url: "https://alder-grove-schools.vercel.app/"
      }
    ]
  },
  {
    id: "havenwell-pharmacy-demo",
    slug: "havenwell-pharmacy-demo",
    name: "Havenwell Pharmacy Demo",
    mark: "HP",
    summary:
      "A fictional pharmacy website concept demonstrating clear service information, accessible navigation and responsible health-related communication. It is not an operating pharmacy.",
    type: "demo",
    relationship: "built",
    status: "demo",
    domains: ["Health"],
    destinations: [
      {
        label: "View demo",
        url: "https://havenwell-pharmacy-demo.vercel.app/"
      }
    ]
  },
  {
    id: "perpetual",
    slug: "perpetual",
    name: "Perpetual",
    mark: "PP",
    summary:
      "An experimental live-data dashboard exploring scheduled refreshes, automated testing, changing layouts and constrained recovery when data feeds or views fail.",
    type: "experiment",
    relationship: "built",
    status: "experimental",
    domains: ["Developer tools", "Infrastructure", "Productivity"],
    destinations: [
      {
        label: "Open dashboard",
        url: "https://perpetual-two.vercel.app/"
      }
    ]
  },
  {
    id: "ecotrack",
    slug: "ecotrack",
    name: "EcoTrack",
    mark: "ET",
    summary:
      "An early carbon-footprint tracking experiment for estimating emissions from everyday activities. Its web prototype and Python implementation remain experimental.",
    type: "experiment",
    relationship: "built",
    status: "experimental",
    domains: ["Productivity", "Sustainability"],
    destinations: [
      {
        label: "Web prototype",
        url: "https://jjtgg.github.io/experiment01.js/"
      },
      {
        label: "Python source",
        url: "https://github.com/JJTGG/EcoTrack.py"
      }
    ]
  },
  {
    id: "cv-generator",
    slug: "cv-generator",
    name: "CV Generator",
    mark: "CV",
    summary:
      "An unfinished CV-generation utility published as an experiment, rather than a completed or production-ready service.",
    type: "experiment",
    relationship: "built",
    status: "experimental",
    domains: ["Productivity"],
    destinations: [
      {
        label: "Open prototype",
        url: "https://cv-generator-dusky-ten.vercel.app/"
      },
      {
        label: "Source repository",
        url: "https://github.com/JJTGG/cv-generator"
      }
    ]
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

    if (!(project.type in PROJECT_TYPE_LABELS)) {
      throw new Error(`Invalid project type for project: ${project.id}`);
    }

    if (
      project.destinations?.some(
        (destination) => !/^https:\/\//i.test(destination.url)
      )
    ) {
      throw new Error(
        `Project destinations must use HTTPS: ${project.id}`
      );
    }

    ids.add(project.id);
    slugs.add(project.slug);
  }
}

validateProjects(PROJECTS);

export function getProjectBySlug(
  slug: string
): Project | undefined {
  return PROJECTS.find((project) => project.slug === slug);
}

export function getProjectStatusLabel(
  status: ProjectStatus
): string {
  return STATUS_LABELS[status];
}

export function getProjectRelationshipLabel(
  relationship: ProjectRelationship
): string {
  return RELATIONSHIP_LABELS[relationship];
}

export function getProjectTypeLabel(
  type: ProjectType
): string {
  return PROJECT_TYPE_LABELS[type];
}