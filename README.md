# Portfolio Website

A personal portfolio built with React + Vite to showcase projects, experience and contact information.

## Live demo

Add link to live site here (e.g. GitHub Pages, Netlify, Vercel).

## Features

-   Multi-section single-page layout (About, Projects, Experience, Contact)
-   Fixed left navigation for quick section jumps
-   Responsive layout with Tailwind CSS
-   Smooth scrolling
-   Easy to extend with new projects or sections

## Tech stack

-   React
-   Vite
-   Tailwind CSS
-   JavaScript (ESNext)
-   Optional: deploy to Netlify / Vercel / GitHub Pages

## Project structure

-   src/
    -   components/ — React components (Intro, Projects, About, Contact, Experience, ...)
    -   index.css — Tailwind + global styles
    -   App.jsx — main layout and routing anchors
    -   main.jsx — app entry
-   public/ — static assets

## Setup (Windows)

1. Install dependencies

    - npm install

2. Run dev server

    - npm run dev
    - Open the URL shown by Vite (usually http://localhost:5173)

3. Build for production
    - npm run build
    - Preview production build locally:
        - npm run preview

## Notes

-   Ensure html and body heights are set to 100% (index.css) so full-height containers work as expected.
-   Left sidebar uses fixed positioning; main content should have appropriate left margin (matching the sidebar width).

## Customization

-   Update colors and typography in Tailwind config or index.css.
-   Add/modify components in src/components.
-   Replace demo/live link and contact info before publishing.

## Contributing

PRs welcome. For bug reports or feature requests, open an issue.

## License

Specify your license (e.g. MIT) or remove this section if not applicable.

## Contact

Add your email, LinkedIn or other preferred contact method.
