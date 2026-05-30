# Cinematic Website

Immersive dark-mode landing page with 3D rolodex hero, case studies grid, pricing section, and price calculator.

## Stack

- Vite + React + TypeScript
- Tailwind CSS v4
- GSAP (cube rotation + scroll-linked hero text)

## Development

```bash
npm install
npm run dev
```

## Images

Hero cube and case study images are bundled under `public/images/` (high-res JPEGs). Replace files in `public/images/cube/` or `public/images/projects/` and keep filenames in sync with `src/data/siteContent.ts`.

## Typography

Uses **Syne** as a stand-in for Aspekta. To use Aspekta, add `.woff2` files to `public/fonts/` and update `@font-face` rules in `src/index.css`.

## Build

```bash
npm run build
npm run preview
```
