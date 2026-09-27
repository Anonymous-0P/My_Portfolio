# Prakash Karekar — Portfolio

A responsive React + Vite portfolio with GSAP/ScrollTrigger, Lenis, and Lucide icons.

## Run locally

    npm install
    npm run dev

## Production

    npm run build
    npm run preview

Deploy the generated `dist` directory to any static host. This application uses section anchors and needs no server-side API or credentials.

## Content

Edit `src/data/portfolio.js` to update profile details, experience, projects, skills, and achievements. The GitHub link is intentionally hidden until `profile.github` contains your actual profile URL. Project visuals are custom HTML/CSS concept mockups, not screenshots of the live products.

`public/Prakash-Karekar-Resume.pdf` is generated from the supplied portfolio information. Replace it with an existing resume if preferred, or run `node scripts/verify.mjs` to regenerate it. The verification script uses locally installed Chrome on Windows and a running Vite server at http://localhost:5173.

## Motion and accessibility

Motion respects `prefers-reduced-motion`; smooth scrolling and custom pointer behavior are disabled for that preference. Pointer effects are limited to fine pointers. Navigation supports keyboard focus, Escape to close the mobile menu, active section indicators, and a skip link. GSAP contexts, media queries, event listeners, and Lenis are cleaned up on unmount.

## Social sharing

The title, description, and Open Graph metadata are in `index.html`. A PNG social card and its vector source are included. Set `og:image` to its absolute deployed URL once your domain is known.
