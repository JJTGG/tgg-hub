
# TGG HUB

**Different projects. Shared direction.**

TGG HUB is an evolving technology ecosystem connecting independent products, tools, experiments and digital initiatives without forcing them into a single application or codebase.

Each project can retain its own purpose, identity, repository, technology, deployment and development lifecycle. TGG HUB provides the shared public presence and discovery layer.

## What TGG HUB does

The website provides:

- An overview of the ecosystem and its direction.
- A searchable project catalogue with filters for type, domain, lifecycle and relationship.
- Detailed overview pages for projects with supporting content.
- A Web3 page covering TGG HUB's roots, official Stacks token, NFT collection and future direction.
- An overview of digital services.
- About and contact pages.
- Page metadata, canonical URLs, sitemap generation, robots rules and legacy route redirects.

The site is designed to describe the ecosystem accurately. A project being listed does not imply that it is finished, commercially available, integrated with the Hub or operated as a service by TGG HUB.

## Website

The revamp uses Next.js and is exported as a static website for Cloudflare Pages.

- **Framework:** Next.js
- **UI:** React
- **Language:** TypeScript
- **Rendering:** Static export
- **Preview hosting:** Cloudflare Pages
- **Build automation:** GitHub Actions

The preview is available at:

https://revamp-preview.tgg-hub-revamp-preview.pages.dev/

The preview is separate from production. Work takes place on `revamp/tgg-hub-v2`; production branch `main` remains unchanged until a separate release decision is made.

The preview's canonical URL and `noindex`/`nofollow` metadata must remain configured for the preview hostname. The preview is not the production site.

## Routes

| Route | Purpose |
| --- | --- |
| `/` | Homepage and ecosystem introduction |
| `/ecosystem` | Searchable and filterable project catalogue |
| `/projects/[slug]` | Detailed overview for projects with detail content |
| `/web3` | Web3 roots, official Stacks assets and future direction |
| `/services` | Digital service areas and enquiry routes |
| `/about` | TGG HUB background and approach |
| `/contact` | Contact routes for enquiries and corrections |

The application generates `robots.txt` and `sitemap.xml` through Next.js metadata route handlers in `app/robots.ts` and `app/sitemap.ts`.

Legacy `.html` paths are redirected through the static hosting configuration where supported.

## Project catalogue

The central catalogue is maintained in:

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

Statuses should reflect each project's actual stage rather than imply more maturity than has been established.

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
  +-- Web3 roots, assets and direction
  |
  +-- Digital services and contact
```

Individual product codebases remain in their respective repositories. Listing a product in TGG HUB does not require transferring its implementation into this repository or introducing a shared backend.

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

This tree shows the primary application structure; it is not an exhaustive listing of every repository file.

## Development

### Requirements

- Node.js 22, as used by the preview workflow.
- npm and the committed dependency lockfile.
- Access to the repository to make code and content changes.

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

The build script runs TypeScript checking before creating the Next.js build. Static export output is written to `out/`.

Before committing changes, review the diff and ensure generated build output and local dependency files have not been included.

## Preview deployment

The workflow is defined in:

`.github/workflows/cl.yml`

A push to `revamp/tgg-hub-v2` triggers the Cloudflare Pages preview workflow. It:

1. Checks out the committed repository state without persisting checkout credentials.
2. Sets up Node.js 22 and npm dependency caching.
3. Installs dependencies using `npm ci` from the committed lockfile.
4. Builds the static site with the preview canonical URL and `TGG_HUB_NOINDEX=true`.
5. Verifies the generated metadata and SEO files in the static output.
6. Deploys the `out/` directory to the Cloudflare Pages preview project.

The metadata verification checks that public HTML output has `noindex` and `nofollow` directives, canonical URLs match the expected preview origin and generated `robots.txt` and `sitemap.xml` reference the correct preview domain.

The workflow excludes the internal `404.html` and `_not-found.html` outputs from the public-page metadata checks.

The workflow does not normalize or rewrite project configuration, regenerate the lockfile, or commit repository changes automatically. It builds and deploys the committed state.

### Required GitHub Actions secrets

The workflow uses:

- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`

It deploys to the Cloudflare Pages project `tgg-hub-revamp-preview`, using `revamp-preview` as the Cloudflare deployment branch alias.

The workflow is for preview deployment only. It does not deploy the production site or merge changes into `main`.

## Site URL and metadata

The configured site URL is managed in:

`lib/site.ts`

The environment variable is:

`TGG_HUB_SITE_URL`

It is used to construct canonical URLs, sitemap entries and related metadata. The code's fallback URL is `https://tgg-hub.vercel.app`; this is not confirmation that the hostname has been approved as the final production domain.

The preview workflow explicitly sets the preview hostname during the build. This keeps preview canonical URLs and generated sitemap links aligned with the preview deployment.

Before production release:

- Confirm the intended production hostname and hosting configuration.
- Configure `TGG_HUB_SITE_URL` for that hostname.
- Verify canonical URLs, robots output and sitemap contents against the production domain.
- Remove preview-only indexing directives only as part of an approved production configuration.

## Contact behaviour

The contact page uses `mailto:` links to open an email draft in the visitor's configured email application.

It does not currently submit a form to a TGG HUB backend or store contact submissions. The website should not claim otherwise.

Product-specific support remains the responsibility of each project's own support channel where one exists.

## Security and data boundaries

The current public website is a static export and does not require a shared application database or authentication system for its catalogue and informational pages.

The repository includes baseline response-header configuration and redirects for static hosting. Their behaviour must be verified against the deployed site rather than inferred from configuration alone.

External project links lead to independently operated destinations. Their availability, security, privacy practices and operational status are not guaranteed by TGG HUB merely because they appear in the catalogue.

## Release readiness

Before promoting the revamp to production:

- Confirm the production hostname, canonical URL and hosting configuration.
- Verify route navigation, project links and legacy redirects.
- Check responsive layouts and keyboard accessibility.
- Review page metadata, canonical URLs, sitemap and robots output.
- Validate public project descriptions, lifecycle statuses and destinations.
- Finalize any required privacy and service terms based on actual operational practices.
- Verify production deployment and rollback procedures.
- Explicitly approve the release before changing production.

A successful build or preview deployment is not, by itself, evidence that the website is production-ready.

## Guiding principles

**Independence** — Products retain the freedom to evolve according to their own purpose.

**Utility** — Projects should solve a real problem, provide value or create a useful experience.

**Accuracy** — Public descriptions distinguish implemented capabilities from plans and experiments.

**Evolution** — The ecosystem should grow by adding meaningful pieces, not by forcing every project to become the same thing.

Build independently. Connect intentionally. Keep evolving.

---

TGG HUB
