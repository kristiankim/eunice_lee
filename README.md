# Journey 2 Grow Therapy

Website for Eunice Lee, LCSW and Journey 2 Grow Therapy. The site introduces the practice, explains areas of support and treatment approach, covers fees and session options, and provides a consultation inquiry flow for prospective clients in New York and New Jersey.

## Features

- Responsive static site for desktop, tablet, and mobile
- Astro-generated home, booking, and journal routes
- Sanity-powered blog with a separately deployable authoring Studio
- Areas of support presented in a responsive illustration card grid
- Practice credentials, fees, insurance guidance, office hours, and session logistics
- Consultation form with client-side validation and configurable form submission
- Reduced-motion support, visible focus states, semantic structure, and crisis guidance
- Local Gambarino font assets and responsive `1x`/`2x` imagery

## Tech stack

- Astro 7
- React 19 islands
- Sanity Studio and Content Lake
- Portable Text
- CSS
- Lenis smooth scrolling
- Phosphor Icons

## Getting started

Prerequisites:

- Node.js 22.12+
- npm

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Astro will print the local development URL in the terminal.

## Available scripts

```bash
npm run dev           # Start the Astro development server
npm run studio:dev    # Start Sanity Studio on port 3333
npm run studio:build  # Build the Studio
npm run studio:deploy # Deploy the Studio to Sanity
npm run build         # Create the Astro production build
npm run preview       # Preview the Astro build locally
npm run check         # Validate Astro and TypeScript files
```

## Form configuration

Set `PUBLIC_FORM_ENDPOINT` in `.env.local` to connect the consultation form to a form service or API endpoint:

```bash
PUBLIC_FORM_ENDPOINT=https://example.com/form-endpoint
```

The form submits `multipart/form-data` with a `POST` request. When the variable is not configured, the interface uses a simulated successful submission for local development.

Do not commit `.env.local` or secrets to the repository.

## Sanity blog configuration

The blog is connected to Sanity, with the authoring Studio kept in the separate `studio/` workspace. Without Sanity environment variables, the site continues to build and shows the journal’s coming-soon state.

1. Create or select a Sanity project at [sanity.io/manage](https://sanity.io/manage).
2. The repository defaults to project `cubrqt5i` and the `production` dataset. Copy `.env.example` to `.env.local`, and `studio/.env.example` to `studio/.env`, only when you need local overrides.
3. The optional overrides use these values:

```bash
# .env.local
PUBLIC_SANITY_PROJECT_ID=your-project-id
PUBLIC_SANITY_DATASET=production

# studio/.env
SANITY_STUDIO_PROJECT_ID=your-project-id
SANITY_STUDIO_DATASET=production
```

4. Install Studio dependencies with `npm --prefix studio install`.
5. In the Sanity project’s API settings, add `http://localhost:3333` as a CORS origin with credentials allowed. Add the deployed Studio domain the same way before launch.
6. Run `npm run studio:dev` and sign in at `http://localhost:3333`.

The Studio includes schemas for posts, authors, categories, SEO fields, rich text, links, and accessible images. Publishing a post adds it to `/blog` and creates `/blog/[slug]` during the next Astro build.

Because the frontend is statically generated, configure a Sanity webhook to trigger a Vercel deployment whenever published content changes.

The website and Studio are deployed as separate Vercel projects from the same repository:

- Website root directory: repository root
- Studio root directory: `studio`

The Studio’s `vercel.json` builds the authoring application and preserves client-side routes such as `/structure`. After deployment, add the Studio’s public Vercel URL to the Sanity project’s Studios page and CORS origins.

## Project structure

```text
src/
  App.jsx          Shared React page components and interactions
  layouts/         Shared Astro document layout and metadata
  pages/           File-based Astro routes
  sanity/          Sanity client, queries, and image helpers
  styles.css       Global styles and responsive layouts
studio/
  schemaTypes/     Studio schemas for posts, authors, and categories
  sanity.config.ts Studio configuration
public/
  images/          Production imagery and support illustrations
  Gambarino_Complete/
                    Self-hosted display font and its license
asset/             Source brand assets used during development
```

## Production deployment

Create the production bundle with:

```bash
npm run build
```

Deploy the generated `dist/` directory to a static hosting provider. Astro generates dedicated HTML for `/`, `/booking`, and `/blog`, so no client-side route rewrite is required.

Before launch, configure `PUBLIC_FORM_ENDPOINT`, `PUBLIC_SANITY_PROJECT_ID`, and `PUBLIC_SANITY_DATASET` in the website’s hosting environment. Verify the consultation form and a published post against the production deployment, then deploy the Studio from the `studio/` directory as its own Vercel project.

## Content and safety notes

- The consultation form is not intended for emergencies or highly sensitive medical details.
- Crisis guidance displayed by the site directs visitors to call or text 988, or call 911 when there is immediate danger.
- Insurance participation and expected costs should be verified for each prospective client and plan.

## License

The website source and brand assets are proprietary to Journey 2 Grow Therapy. Third-party fonts and packages remain subject to their respective licenses.
