# TGG HUB

**Different projects. Shared direction.**

TGG HUB is an evolving technology ecosystem that connects independent products, tools, experiments and digital initiatives without forcing them into a single application or codebase.

Each project can retain its own purpose, identity, repository, technology, deployment and development lifecycle. TGG HUB provides the shared public presence and discovery layer.

## What TGG HUB does

The website provides:

- An overview of the ecosystem and its direction.
- A searchable project catalogue with filters for type, domain, lifecycle and relationship.
- Project overview pages for entries with detailed project information.
- A Web3 page that distinguishes historical activity from current, verified opportunities.
- An overview of digital services.
- About and contact pages.
- Page metadata, canonical URLs, sitemap generation, robots rules and legacy route redirects.

The site is designed to describe the ecosystem accurately. A project being listed does not imply that it is finished, commercially available, integrated with the Hub or operated as a service by TGG HUB.

## Website

The revamp is built with Next.js and exported as a static website for Cloudflare Pages.

- **Framework:** Next.js
- **UI:** React
- **Language:** TypeScript
- **Rendering:** Static export
- **Hosting preview:** Cloudflare Pages
- **Build automation:** GitHub Actions

The current preview is available at:

https://revamp-preview.tgg-hub-revamp-preview.pages.dev/

The preview is separate from the production website. The revamp branch has not been merged into `main`, and the preview workflow is not intended to deploy the production site.

## Routes

| Route | Purpose |
| --- | --- |
| `/` | Homepage and ecosystem introduction |
| `/ecosystem` | Searchable and filterable project catalogue |
| `/projects/[slug]` | Detailed overview for projects with detail content |
| `/web3` | Web3 history, context and future direction |
| `/services` | Digital service areas and enquiry routes |
| `/about` | TGG HUB background and approach |
| `/contact` | Contact routes for enquiries and corrections |

The application also generates `sitemap.xml` and `robots.txt`.

Legacy `.html` paths are redirected through the static hosting configuration where supported.

## Project catalogue

The project's central catalogue is maintained in:

`data/projects.ts`

Each project can define:

- A stable ID and URL slug.
- A name and short description.
- A type, such as product, tool, experiment, infrastructure or demo.
- A relationship to TGG HUB.
- A lifecycle status.
- One or more domains.
- Optional external destinations.
- Optional detailed overview content.
- Optional featured placement.

The catalogue validates duplicate IDs and slugs, slug formatting, required descriptions, project types and HTTPS destinations.

### Lifecycle statuses

The status should reflect the project's actual stage rather than imply more maturity than has been established.

| Status | Meaning |
| --- | --- |
| Planned | Defined or specified, but implementation has not started |
| In development | Active implementation or product development |
| Experimental | Exploratory work whose scope or maturity is not yet that of a finished product |
| Available | A product that is publicly accessible |
| V1 completed | The defined first version is complete; further refinement may continue |
| Demo | An illustrative implementation, not necessarily an operating service |
| Maintained | An existing project receiving maintenance |
| Retired | A discontinued project |

A destination link is not, by itself, proof that a product is production-ready. Descriptions, lifecycle states and destinations should be reviewed as projects evolve.

## Architecture

The Hub and its listed projects are separate systems.

```text
TGG HUB
  |
  +-- Homepage and public information
  |
  +-- Project catalogue
  |     |
  |     +-- Trading Tools
  |     +-- AI Arena
  |     +-- ClutchTopUp
  |     +-- Agoré
  |     +-- Other listed projects
  |
  +-- Web3 history and direction
  |
  +-- Digital services and contact
```

The individual product codebases remain in their respective repositories. Listing a product in TGG HUB does not require transferring its implementation into this repository or introducing a shared backend.

Future integrations should be introduced only when a concrete use case justifies them.

## Repository structure

```text
tgg-hub/
├── .github/
│   └── workflows/
│       └── cl.yml
├── app/
│   ├── about/
│   ├── contact/
│   ├── ecosystem/
│   ├── projects/
│   ├── services/
│   ├── web3/
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   ├── robots.ts
│   └── sitemap.ts
├── components/
│   ├── project-card.tsx
│   ├── project-catalogue.tsx
│   ├── site-footer.tsx
│   └── site-header.tsx
├── data/
│   └── projects.ts
├── lib/
│   └── site.ts
├── public/
│   ├── _headers
│   └── _redirects
├── next.config.ts
├── package.json
├── package-lock.json
└── tsconfig.json
```

The tree above shows the primary application structure; it is not an exhaustive listing of every repository file.

## Development

### Requirements

- Node.js 22 is used by the preview workflow.
- npm, with dependencies installed from the committed lockfile.
- Access to the repository to change code or project data.

### Install dependencies

```bash
npm ci
```

### Start the development server

```bash
npm run dev
```

### Run TypeScript checks

```bash
npm run typecheck
```

### Build the site

```bash
npm run build
```

The build script runs TypeScript checking before creating the Next.js production build. The static export is written to `out/`.

Before committing changes, review the diff and make sure generated build output and local dependency files are not included.

## Preview deployment

The workflow is defined in:

`.github/workflows/cl.yml`

A push to `revamp/tgg-hub-v2` triggers the preview workflow. It:

1. Checks out the repository and configures Node.js.
2. Normalizes the pinned Wrangler version and TypeScript JSX configuration.
3. Generates or refreshes the dependency lockfile.
4. Installs the locked dependencies.
5. Runs the production build.
6. Commits dependency or configuration normalization when needed.
7. Verifies the working tree is clean.
8. Deploys the static export to the Cloudflare Pages preview project.

The workflow requires these GitHub Actions secrets:

- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`

The preview deployment uses the Cloudflare Pages project `tgg-hub-revamp-preview` and a preview deployment branch named `revamp-preview`.

The preview workflow is not a production release workflow. Production deployment and any merge into `main` require a separate release decision.

## Site URL and metadata

The configured site URL is managed in `lib/site.ts`.

The environment variable is:

`TGG_HUB_SITE_URL`

It is used to construct canonical URLs, sitemap entries and related site metadata. The current code has a fallback value of `https://tgg-hub.vercel.app`.

**Before a production release, configure `TGG_HUB_SITE_URL` to the intended canonical production domain and verify the generated metadata and sitemap.** The fallback is not confirmation that this is the final production domain.

## Contact behaviour

The contact page uses `mailto:` links to open an email draft in the visitor's configured email application.

It does not currently submit a form to a TGG HUB backend or store contact submissions. The website should not claim otherwise.

Product-specific support remains the responsibility of each project's own support channel where one exists.

## Security and data boundaries

The current public website is a static export and does not require a shared application database or authentication system for its catalogue and informational pages.

The repository includes baseline response-header configuration and redirects for static hosting. Hosting behaviour should be verified after deployment.

External project links lead to independently operated destinations. Their availability, security, privacy practices and operational status are not guaranteed by TGG HUB merely because they appear in the catalogue.

## Release readiness

Before promoting the revamp to production:

- Confirm the canonical production URL and hosting configuration.
- Verify route navigation, project links and legacy redirects.
- Check responsive layouts and keyboard accessibility.
- Review page metadata, canonical URLs, sitemap and robots output.
- Validate public project descriptions and lifecycle statuses.
- Finalize any required privacy and service terms based on actual operational practices.
- Verify the production deployment and rollback path.
- Keep production unchanged until the release has been deliberately approved.

## Guiding principles

**Independence** — Products retain the freedom to evolve according to their own purpose.

**Utility** — Projects should solve a real problem, provide value or create a useful experience.

**Accuracy** — Public descriptions distinguish implemented capabilities from plans and experiments.

**Evolution** — The ecosystem should grow by adding meaningful pieces, not by forcing every project to become the same thing.

Build independently. Connect intentionally. Keep evolving.

---

TGG HUB