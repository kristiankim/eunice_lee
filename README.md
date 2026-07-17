# Journey 2 Grow Therapy

Website for Eunice Lee, LCSW and Journey 2 Grow Therapy. The site introduces the practice, explains areas of support and treatment approach, covers fees and session options, and provides a consultation inquiry flow for prospective clients in New York and New Jersey.

## Features

- Responsive single-page experience for desktop, tablet, and mobile
- Home, booking, and journal routes
- Areas of support presented in a responsive illustration card grid
- Practice credentials, fees, insurance guidance, office hours, and session logistics
- Consultation form with client-side validation and configurable form submission
- Reduced-motion support, visible focus states, semantic structure, and crisis guidance
- Local Gambarino font assets and responsive `1x`/`2x` imagery

## Tech stack

- React 19
- Vite 7
- CSS
- Lenis smooth scrolling
- Phosphor Icons

## Getting started

Prerequisites:

- Node.js 20.19+ or 22.12+
- npm

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Vite will print the local development URL in the terminal.

## Available scripts

```bash
npm run dev      # Start the Vite development server
npm run build    # Create a production build in dist/
npm run preview  # Preview the production build locally
```

## Form configuration

Set `VITE_FORM_ENDPOINT` in `.env.local` to connect the consultation form to a form service or API endpoint:

```bash
VITE_FORM_ENDPOINT=https://example.com/form-endpoint
```

The form submits `multipart/form-data` with a `POST` request. When the variable is not configured, the interface uses a simulated successful submission for local development.

Do not commit `.env.local` or secrets to the repository.

## Project structure

```text
src/
  App.jsx          Application routes and page components
  main.jsx         React entry point
  styles.css       Global styles and responsive layouts
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

Deploy the generated `dist/` directory to a static hosting provider. Because the app handles `/booking` and `/blog` client-side, configure the host to rewrite unknown routes to `index.html`.

Before launch, configure `VITE_FORM_ENDPOINT` in the hosting environment and verify the consultation form against the production endpoint.

## Content and safety notes

- The consultation form is not intended for emergencies or highly sensitive medical details.
- Crisis guidance displayed by the site directs visitors to call or text 988, or call 911 when there is immediate danger.
- Insurance participation and expected costs should be verified for each prospective client and plan.

## License

The website source and brand assets are proprietary to Journey 2 Grow Therapy. Third-party fonts and packages remain subject to their respective licenses.
