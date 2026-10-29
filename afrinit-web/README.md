# Afrinit Web

The official marketing website for **Afrinit** — a technology company co-founded in 2026 that designs and builds high-impact web platforms, mobile apps, and custom business systems for companies across Africa.

Built from scratch using Next.js (App Router), TypeScript, Tailwind CSS v4, Zod, and clsx. Built entirely with handcrafted semantic components—no third-party UI kits or component libraries.

---

## Table of Contents

- [Features](#features)
- [Design System & Palette](#design-system--palette)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Development Server](#development-server)
  - [Linting](#linting)
  - [Production Build](#production-build)
- [Project Structure](#project-structure)
- [Content Management (`site.ts`)](#content-management-sitets)
- [Placeholders To Complete](#placeholders-to-complete)
- [Git & Branching Workflow](#git--branching-workflow)
- [Accessibility & SEO Standards](#accessibility--seo-standards)

---

## Features

- **Semantic App Router Architecture**: Clean route grouping, zero bloat, strict TypeScript typings, and zero `any` usage.
- **Rhythmic Dark & Light Section Palette**: High-contrast, warm dark brown foundation (`brown-950`) alternating with pure `#FFFFFF` light sections and vibrant orange accents.
- **Handcrafted Component System**: Accessible UI primitives (`Container`, `Section`, `Eyebrow`, `Heading`, `Button`, `Card`) without external component library dependencies.
- **Dynamic Case Studies**: Static generation (`generateStaticParams`) for project case studies with flat geometric visuals.
- **Accessible Contact Form**: Accessible client-side validation powered by Zod, `aria-describedby` error associations, keyboard focus management, and server-side route handler `/api/contact`.
- **Lighthouse 95+ Ready**: Built-in Open Graph metadata, dynamically generated icons (`icon.tsx`, `apple-icon.tsx`, `opengraph-image.tsx`), automated `robots.txt` and `sitemap.xml`, skip-to-content landmark, and WCAG AA contrast compliance.

---

## Design System & Palette

| Token | Hex Value | Description |
| :--- | :--- | :--- |
| `brown-950` | `#1F130C` | Page background & dark foundation |
| `brown-900` | `#2A1A10` | Raised dark surfaces & process band |
| `brown-800` | `#3A2518` | Dark cards & border divider lines |
| `brown-600` | `#6B4A33` | Outline button borders & secondary lines |
| `brown-500` | `#6B3E1F` | Decorative shapes & mid-tone fills |
| `white` | `#FFFFFF` | Light section surfaces & cards |
| `neutral-200` | `#E5E1DC` | Light section borders |
| `sand-100` | `#F6EDE3` | Primary text on dark surfaces |
| `sand-300` | `#D9C8B6` | Body text on dark surfaces |
| `ink-700` | `#5A4333` | Body text on white sections |
| `ink-900` | `#2A1A10` | Headings on white sections |
| `orange-500` | `#E8741E` | Primary accent, CTA buttons, decorative visuals |
| `orange-700` | `#A8480A` | High-contrast orange text on white surfaces (≥ 4.5:1) |
| `orange-100` | `#FCE3CF` | Icon badge background on white surfaces |
| `green-500` | `#5E9B4A` | Small decorative accents |
| `green-400` | `#7DB364` | Eyebrow labels & small text on dark surfaces |
| `green-700` | `#2F6B1F` | Small text & eyebrow labels on white surfaces |
| `green-100` | `#DCEBD3` | Icon badge background on white surfaces |

### Typography

- **Headings & Wordmark**: `Bricolage Grotesque` (weights 500, 700, 800) via `next/font/google`
  - Hero heading: `clamp(40px, 6vw, 68px)`
  - Section headings: `clamp(32px, 4.4vw, 48px)`
- **Body & Controls**: `DM Sans` (weights 400, 500, 700) via `next/font/google`
  - Body: 16px to 19px with `1.6` line height
  - Eyebrows: 14px, uppercase, bold, letter-spaced

---

## Getting Started

### Prerequisites

- Node.js 18+ (tested on Node v22)
- npm 9+

### Installation

Clone the repository and install dependencies:

```bash
cd afrinit-web
npm install
```

### Development Server

Run the development server with Turbopack:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Linting

Run ESLint to check for code standards and syntax correctness:

```bash
npm run lint
```

### Production Build

Create an optimized production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run start
```

---

## Project Structure

```
afrinit-web/
├── .env.example                    # Sample environment variables
├── .gitignore                      # Git ignore rules (node_modules, .next, etc.)
├── eslint.config.mjs               # ESLint configuration
├── next.config.ts                  # Next.js configuration
├── package.json                    # Project dependencies and scripts
├── tsconfig.json                   # TypeScript configuration
├── README.md                       # Documentation & instructions
└── src/
    ├── app/
    │   ├── api/
    │   │   └── contact/
    │   │       └── route.ts        # Server-side contact submission handler
    │   ├── work/
    │   │   └── [slug]/
    │   │       └── page.tsx        # Dynamic static-generated case study route
    │   ├── apple-icon.tsx          # Dynamic Apple Touch Icon (180x180)
    │   ├── favicon.ico             # Standard fallback favicon
    │   ├── globals.css             # Tailwind v4 theme definitions and base styles
    │   ├── icon.tsx                # Dynamic standard app icon (32x32)
    │   ├── layout.tsx              # Root layout with fonts, metadata, skip-link
    │   ├── opengraph-image.tsx     # Dynamic Open Graph sharing card (1200x630)
    │   ├── page.tsx                # Marketing home page
    │   ├── robots.ts               # Automated robots.txt generation
    │   └── sitemap.ts              # Automated XML sitemap generation
    ├── components/
    │   ├── contact/
    │   │   └── ContactForm.tsx     # Client-side validated accessible contact form
    │   ├── layout/
    │   │   ├── Footer.tsx          # Site footer
    │   │   ├── Header.tsx          # Sticky navigation bar
    │   │   ├── Logo.tsx            # Handcrafted brand logo & wordmark
    │   │   ├── MobileMenu.tsx      # Accessible keyboard-navigable drawer
    │   │   └── index.ts            # Layout exports
    │   ├── sections/
    │   │   ├── About.tsx           # Company story and 4 value cards
    │   │   ├── CapabilityStrip.tsx # Core capabilities band
    │   │   ├── Contact.tsx         # 2-column contact section
    │   │   ├── Hero.tsx            # Hero section with 4x3 geometric grid
    │   │   ├── Process.tsx         # 4-step execution process with top accents
    │   │   ├── Services.tsx        # 6 service cards with inline SVG icons
    │   │   ├── Team.tsx            # Team cards with initial avatars
    │   │   ├── Work.tsx            # Selected work portfolio section
    │   │   └── index.ts            # Section exports
    │   ├── ui/
    │   │   ├── Button.tsx          # Primary, outline, and solid-dark variants
    │   │   ├── Card.tsx            # Dark and white card containers
    │   │   ├── Container.tsx       # 1200px responsive container
    │   │   ├── Eyebrow.tsx         # 14px uppercase label primitive
    │   │   ├── Heading.tsx         # Fluid clamped heading primitive
    │   │   ├── Section.tsx         # Section wrapper with rhythm background
    │   │   └── index.ts            # UI primitive exports
    │   └── work/
    │       └── GeometricVisual.tsx # Handcrafted geometric visual banners
    ├── content/
    │   └── site.ts                 # Single source of truth for copy and data
    └── lib/
        └── validations/
            └── contact.ts          # Zod contact form validation schema
```

---

## Content Management (`site.ts`)

All user-facing copy, links, placeholders, navigation items, capabilities, services, portfolio case studies, values, team details, and contact information are strictly consolidated in:

```
src/content/site.ts
```

**How to update content:**
1. Open `src/content/site.ts`.
2. Locate the corresponding section object (e.g. `siteConfig.hero`, `siteConfig.work`, `siteConfig.team`, `siteConfig.contact`).
3. Edit copy, add team members, or adjust case study details.
4. Run `npm run build` to verify types and re-generate static routes automatically. No component code needs to be modified.

---

## Placeholders To Complete

When actual project and company data is ready, replace the following bracketed placeholders in `src/content/site.ts`:

1. **Founders' Background**:
   - `siteConfig.about.paragraph2`: `"[Add one line about your founders' background.]"`
2. **Selected Work Case Studies**:
   - Project 1: `title: "[PROJECT NAME]"`, `summary: "[One sentence on the client, the problem and the result you delivered.]"`, plus `challenge`, `solution`, and `result`.
   - Project 2: `title: "[PROJECT NAME]"`, `summary: "[One sentence on the client, the problem and the result you delivered.]"`, plus `challenge`, `solution`, and `result`.
   - Project 3: `title: "[PROJECT NAME]"`, `summary: "[One sentence on the client, the problem and the result you delivered.]"`, plus `challenge`, `solution`, and `result`.
3. **Team Members**:
   - `siteConfig.team.members`: Replace `"[FOUNDER NAME]"` and `"[TEAM MEMBER]"` with actual team names and `"[Role]"` with their roles. Optionally provide photo paths in the `image` field.
4. **Contact Details**:
   - `siteConfig.contact.paragraph`: `"[RESPONSE TIME]"` (e.g., `24 hours`)
   - `siteConfig.contact.info.email`: `"[EMAIL]"` (e.g., `hello@afrinit.com`)
   - `siteConfig.contact.info.phone`: `"[PHONE]"` (e.g., `+254 700 000 000`)
   - `siteConfig.contact.info.location`: `"[LOCATION]"` (e.g., `Nairobi, Kenya`)

---

## Git & Branching Workflow

This project followed a strict, isolated feature branch workflow from start to finish:

1. **Clean Root Scaffold**: Initial commit on `main` containing Next.js scaffold, TypeScript, ESLint, Tailwind CSS, `.env.example`, and `.gitignore`.
2. **Feature Branching**: Each feature was created on its own dedicated branch off the latest `main`:
   - `feat/design-system`
   - `feat/layout-nav-footer`
   - `feat/hero`
   - `feat/services`
   - `feat/work-portfolio`
   - `feat/process-about-team`
   - `feat/contact-form`
   - `feat/seo-a11y-perf`
   - `chore/polish-docs`
3. **Commit Granularity**: Several small, meaningful Conventional Commits (`feat:`, `style:`, `chore:`, `docs:`) per branch.
4. **Verification Gate**: `npm run lint` and `npm run build` were verified and passed before every merge.
5. **No-Fast-Forward Merges**: Branches were merged using `git merge --no-ff` so the full historical context remains visible, followed by deleting the merged feature branch.

---

## Accessibility & SEO Standards

- **Semantic Landmarks**: Uses `<header>`, `<nav>`, `<main id="main-content">`, `<section>`, `<aside>`, and `<footer>`.
- **Keyboard Navigation**:
  - Visible focus indicators on all interactive elements (`focus-visible:outline-2 focus-visible:outline-orange-500`).
  - Mobile menu supports <kbd>Esc</kbd> to close, manages focus trapping, and restores focus to the menu trigger button upon dismissal.
  - Skip-to-content anchor provided at the very top of DOM.
- **Accessible Form Controls**:
  - Input labels explicitly connected via `htmlFor` and `id`.
  - Accessible error messages linked directly via `aria-describedby` and `aria-invalid`.
  - Live region (`role="status"` / `aria-live="polite"`) for submission confirmation.
- **Motion Sensitivity**: Respects `prefers-reduced-motion: reduce` by disabling smooth scroll and transitions.
- **WCAG AA Contrast**:
  - Text on dark surfaces (`sand-100`, `sand-300`, `green-400`, `orange-500` on `brown-950`/`brown-900`) achieves ≥ 4.5:1 (up to 14.5:1).
  - Text on light surfaces (`ink-900`, `ink-700`, `green-700`, `orange-700` on `white`) achieves ≥ 4.5:1.
  - Button text on `orange-500` is `brown-950` (~6.2:1 contrast).
