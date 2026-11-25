# AgentCrew landing page

The site at [agentcrew.dev](https://agentcrew.dev/). Static HTML, CSS, and a small script, built with Vite and published to GitHub Pages.

## Preview

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
npm run preview
```

## Deploy

GitHub Pages serves the `gh-pages` branch at the domain in `public/CNAME` (`agentcrew.dev`).

```bash
npm run deploy
```

That builds `dist/` and pushes it to `gh-pages`, including dotfiles such as `.nojekyll`. Files in `public/` are copied into the build, which keeps these URLs working:

- `/install.sh` and `/install.ps1` — the installers linked from the AgentCrew README
- `/agents/*.toml` — agent definitions already published on the domain
- `/CNAME` — the custom domain

## Stack

Vite only. The page is server-rendered HTML (no client framework) so the pitch, commands, and links are in the document. Feature films load when they scroll into view. On viewports under 860px those sections use the square cuts.

Product facts come from the [AgentCrew repository](https://github.com/saigontechnology/AgentCrew). Fonts are Outfit and JetBrains Mono, both under the SIL Open Font License (see `public/fonts/`).
