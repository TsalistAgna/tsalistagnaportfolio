# Tsalist Agna — portfolio

A responsive React + Tailwind portfolio focused on product design, project management, and technical implementation.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL shown by Vite. `npm run build` writes a production build to `dist/`.
The ZIP does not include `node_modules`, so run `npm install` in the extracted `portfolio-react` folder before the first `npm run dev`.

## Structure

- `src/App.jsx` — home, project indexes, and case study routes.
- `src/components/` — reusable navigation, project previews, media, footer, and content renderer.
- `src/data/projects.json` — the seven product projects in portfolio order.
- `src/data/caseStudies.json` — case study sidebar facts and links to other product projects.
- `src/content/*.html` — the five preserved original tech case studies, plus B-Side and Rawrndry. The preserved articles keep their text and image references intact. Edit the appropriate content file to update a case study.
- `src/styles.css` — Tailwind theme tokens, shared layouts, and long-form case study styles.
- `public/image/rawrndry/` — the three original Rawrndry images supplied for this case study.
- `public/image/bside/` — the three B-Side images supplied for this case study.

## Images needed

The supplied HTML and `Archive.zip` contain no `image/` directory for the older projects. The B-Side and Rawrndry images are included. Add the other original images at `public/image/` to restore those projects' visuals. `missing-assets.txt` lists the 21 still missing local image paths. Until then, missing images show an accessible visual placeholder, and the page content remains readable. Some preserved source references literally say `YOUR_IMAGE_HERE`; replace those placeholders only when the correct assets are available.

The source portfolio used `js/script.js` on the index pages, but that script was not included. Mobile navigation is implemented in React. The site supports keyboard focus, semantic headings, alt text, and reduced motion.

For static hosting, configure requests such as `/work/kiddly` to serve `index.html` (the included `public/_redirects` handles this on hosts that use that convention).
