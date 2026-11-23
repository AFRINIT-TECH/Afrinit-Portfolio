# Changelog

All notable changes to the Afrinit Portfolio project.

## [unreleased]

### Migrated — Next.js → React + Vite

- Replaced Next.js 15 with React 19 + Vite 6 + React Router DOM
- Converted all components from TypeScript (.tsx/.ts) to JavaScript (.jsx/.js)
- Replaced Next.js routing with SPA page-view navigation and fade transitions
- Replaced `next/link` with standard `<a>` tags
- Replaced `next/image` with standard `<img>` elements
- Migrated Google Fonts from `next/font/google` to `<link>` tags in `index.html`
- Moved metadata from Next.js `metadata` API to static `<meta>` tags in `index.html`
- Configured Tailwind CSS v4 with `@tailwindcss/vite` plugin
- Removed Next.js-specific features: dynamic routes, OG image generation, sitemap/robots APIs, app icons

### Redesigned — Figma Design Implementation

- Reimplemented all pages matching Figma design (https://palm-dish-91422623.figma.site)
- Added exact Figma design tokens: #231c17, #9c6849, #f5efe4, #dcbf77, #d7c4ae, #79513a
- Created page-view SPA navigation with fade transitions
- Added smooth scroll behavior and panel entrance animations

### Added — New Sections & Features

- **Hero**: Figma-accurate layout with grayscale image, gold card, and stats overlay
- **About**: Mission and vision content
- **Solutions**: Expandable accordion panels
- **Impact**: Stats and testimonials
- **People**: Values and team member grid
- **Contact**: Form and info panel
- **Projects**: Card grid with pagination (6 projects per page)
- **FAQ**: Accordion with smooth expand/collapse animation
- **Partners**: Dedicated partnership page with interactive track selector, qualification matrix, and partnership inquiry form
- **Mobile Menu Refinements**: Keyboard navigation (Escape key), click/touch outside dismissal, and animated dropdown transitions
- **Centralized Pre-Footer CTA**: Consolidated pre-footer callout inside global Footer to eliminate duplicate sections across individual pages
- **Maintenance Announcement Marquee**: Continuous right-to-left ticker alerting visitors that the platform is under maintenance and placeholders are temporary

### Added — Company Logo

- Added company logo image (1254×1254 JPEG) as `src/assets/logo.jpg`
- Logo component renders image with CSS invert for dark backgrounds

### Removed — Next.js Artifacts

- Removed all Next.js app directory files (layout, page, API routes, dynamic routes, icons, OG images)
- Removed all Next.js TypeScript components (Header, Footer, Logo, MobileMenu, Hero, About, Services, Work, Process, Team, Contact, CapabilityStrip, ContactForm, GeometricVisual, UI primitives)
- Removed Next.js config files (next.config.ts, tsconfig.json, eslint.config.mjs)
- Removed Next.js content and library files (site.ts, contact validation)

### Updated — Configuration

- Updated `package.json` with React 19, Vite 6, Tailwind CSS v4 dependencies
- Updated `.gitignore` for Vite build artifacts
- Updated `.env.example` for Vite environment variables
- Updated Backend Go module dependencies (go.mod, go.sum)
