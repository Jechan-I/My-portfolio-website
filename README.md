# Personal Portfolio Website

This repository contains a clean, responsive personal portfolio website built with React and Vite. The site is designed to showcase projects, skills, and contact information with a modern, minimal aesthetic.

## Theme

- Clean, modern portfolio layout
- Sections: Hero, About, Skills, Projects, Contact, Footer
- Responsive design with a focus on legibility and project presentation

## Tech stack

- React 19
- Vite for fast development and build
- Plain CSS organized per-component in `src/styles/`

## Project structure (important files)

- `index.html` — App entry HTML
- `src/index.jsx` — React entry and mount
- `src/App.jsx` — App root composing components
- `src/components/` — Main UI components (Header, Hero, About, Projects, Skills, Contact, Footer)
- `src/data/portfolioData.js` — Project and skills data (edit this to customize content)
- `src/Assets/` — Local images used by components

## Local development

1. Install dependencies

```powershell
npm install
```

2. Start the dev server

```powershell
npm run dev
```

The site will usually be available at `http://localhost:5173/` (check the terminal output).

### Fix asset filenames automatically

If your local assets still use spaces (for example `Portfolio img.jpg`), run the helper script to rename them to space-free names expected by imports:

```powershell
npm run rename-assets
```

This will rename `src/Assets/Portfolio img.jpg` → `src/Assets/portfolio.jpg` if the old file exists.

## Customizing projects & skills

- Edit `src/data/portfolioData.js` and replace placeholder projects and skill icons with your own data.
- For local images used in components (for example the About image), import them with an ES module import and reference the imported variable in JSX:

```jsx
import myImage from '../Assets/portfolio.jpg';
...
<img src={myImage} alt="..." />
```

## Contact form

- The current contact form opens the user's email client with a `mailto:` link. To collect messages on the server, swap it out for a server or a form service (Formspree, Netlify Forms, etc.).

## Deployment

- Build the site:

```powershell
npm run build
```

- Serve the `dist/` folder on any static hosting provider (Netlify, Vercel, GitHub Pages, etc.). Vite's preview can be used to test the production build locally:

```powershell
npm run preview
```

## Troubleshooting

- If the page goes blank after edits, open DevTools Console and the terminal running Vite to view runtime or HMR errors. Common causes are:
	- Missing or incorrectly imported modules
	- ReferenceError from undefined globals
	- Syntax errors introduced during editing

## Suggestions

- Avoid spaces in asset filenames (use `portfolio.jpg` rather than `Portfolio img.jpg`).
- Use real `liveUrl` and `codeUrl` entries in `src/data/portfolioData.js` for project links to be active.


