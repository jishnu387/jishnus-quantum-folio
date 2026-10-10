# Jishnu R. — Personal Portfolio

A dark, interactive portfolio with seven pages, live Three.js neural-network artwork, tsParticles, Framer Motion, accessible project details and filtering.

## Run locally

```sh
bun install
bun run dev
```

Open the URL printed by Vite. For production, use `bun run build`. Tests: `bun run test`.

## Stack

React 19, Vite, JavaScript/JSX portfolio components, CSS3, Lucide, Framer Motion, Three.js, React Three Fiber, Drei, and tsParticles. The managed Lovable platform requires TanStack Start/Router (rather than React Router); route adapters remain TypeScript. No other frontend framework is used.

## Customize

Edit `src/data/portfolio.js` for biography data, project descriptions, technology lists, article data and genuine profile URLs. Empty URLs remain unavailable. No fake statistics or repository links are supplied.

- Social URLs: `profile.socials`.
- Coding profile URLs: `profile.coding`.
- Contact address: `profile.email`.
- Projects: add real `github` and `demo` URLs when available.
- Articles: supply `title`, `thumbnail`, `date`, `description`, `tags` and `url`. Until then the page displays Coming Soon.

### Resume

Place the actual resume at `public/resume/Jishnu_R_Resume.pdf`. The download button checks for a successful PDF response and is disabled when it is missing. The link uses `download` and opens a new tab as a browser fallback. No PDF was supplied with the original request.

### Contact

No email service or address is configured. The form validates input and explicitly reports that nothing was sent. Add the real contact email to enable the mailto handoff, which opens the user's email app without claiming delivery. For direct delivery, connect Lovable Cloud and configure an email provider; never put secret keys in browser code.

## Structure

- `src/routes/`: seven typed TanStack route adapters with distinct social metadata.
- `src/components/portfolio/Pages.jsx`: page content.
- `src/components/portfolio/Shared.jsx`: navigation, footer, cards, transitions and accessible project details.
- `HeroScene.jsx`, `ParticlesBackground.jsx`: lazy-loaded browser artwork.
- `src/hooks/useHeroScene.js`: WebGL and reduced-motion detection.
- `src/data/portfolio.js`: centralized real content and optional links.
- `src/styles.css`: semantic tokens and global styling.
- `src/styles/`: responsive and animation rules.

## Accessibility & performance

Reduced motion disables live 3D and particles. WebGL failure shows a labeled geometric fallback. 3D rendering caps pixel density at 1.5; particles cap at 30 FPS and reduce density on mobile. Navigation supports keyboard focus, a skip link, Escape to dismiss mobile navigation and dialogs, and a dialog focus trap. Form feedback never falsely claims success.

## Deployment

Publish through Lovable for the managed TanStack Start runtime. Vite configuration and application bootstrap are preserved for platform compatibility. Custom hosting must support TanStack Start's server output; this is not a React Router static SPA. Review actual contact/profile URLs and upload the resume before publication.
