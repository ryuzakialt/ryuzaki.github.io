# Ryuzaki — personal website

React 19 + Vite + Tailwind CSS v4.

## Run
    npm install
    npm run dev       # local dev server
    npm run build     # production build in dist/

## Edit your content
All copy, projects, experience, email and social links live in `src/data/site.js`.
Social links with an empty `href` are hidden. Replace the sample projects and the
email address before publishing, and update the URLs in `index.html` (canonical, og:url, og:image)
to your real domain.

## Design tokens
Defined in `src/index.css` under `@theme`: 8px spacing rhythm, one radius, one heading
font (Instrument Serif), one body font (Inter), a six-colour palette.
