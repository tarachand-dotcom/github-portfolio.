# Tarachand — Developer Portfolio

A responsive React portfolio with a dark, editorial visual system, accessible motion, custom project artwork, and a live public GitHub repository feed.

## Requirements

- Node.js 18 or newer
- npm

## Run locally

```bash
npm install
npm run dev
```

Vite prints the local development URL in the terminal.

## Production build

```bash
npm run build
npm run preview
```

The production-ready static site is generated in `dist/`.

## Deploy

Build with `npm run build` and publish the generated `dist/` directory.

- **Netlify:** set the build command to `npm run build` and the publish directory to `dist`.
- **Vercel:** use the Vite preset, build command `npm run build`, and output directory `dist`.
- **GitHub Pages:** publish `dist` with a Pages deployment workflow. For a repository site at `username.github.io/repository-name`, set `base: "/repository-name/"` in `vite.config.js`; use `base: "/"` for a user site at `username.github.io`.

The GitHub activity panel reads public repository metadata from GitHub’s unauthenticated API. No API key or private credential is used. If the API is unavailable or rate-limited, the panel shows an error and a retry action; the profile link remains available.

## Personalize

Update `src/data.js` to edit the portfolio content and links:

- `portfolio.githubUsername` and `portfolio.githubUrl` power the activity panel and GitHub links.
- Add the real `portfolio.linkedinUrl`, `portfolio.email`, and `portfolio.resumeUrl` before publishing to enable those contact actions. Keep any résumé file in `public/` or use a public résumé URL.
- Add verified repository or demo URLs to the corresponding project’s `repoUrl` or `demoUrl`. Projects without a confirmed public URL are intentionally shown without a repository link.
- Edit the education, journey, skills, and project copy there; no dates, metrics, or credentials are fabricated.
