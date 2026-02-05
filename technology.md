# Technology Stack

This document defines the agreed tech stack for the new website (frontend + styling + DX).

## Core
- React 18+
- TypeScript
- Vite

## Styling
- Tailwind CSS
- CSS Variables (design tokens + theming)
- Fonts (Google Fonts)
  - Inter (body)
  - Red Hat Display (titles)  ← matches the brandbook

## UI + Icons
- lucide-react (icons)

## Animation
- CSS transitions/animations (default)
- Framer Motion (optional; only if a UI needs it)

## Tooling (recommended defaults)
- ESLint + TypeScript ESLint (code quality)
- Prettier (formatting)
- PostCSS + Autoprefixer (Tailwind pipeline)

## Commands

### Create project
```bash
npm create vite@latest my-app -- --template react-ts
cd my-app
npm install
