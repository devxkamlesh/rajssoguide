# RajSSO Guide

Bilingual (Hindi/English) SEO-first information portal for the **Rajasthan SSO ID** portal — login, registration, recovery, government exams, linked services, scholarships, and free utility tools.

Built with Next.js (App Router) + TypeScript + Tailwind CSS. Independent guide — **not** affiliated with the Government of Rajasthan, and it never asks for or stores any login credentials.

🌐 Domain: `rajssoidguide.in`

---

## Features

- **Bilingual** — every page in Hindi and English under `/hi` and `/en`, with reciprocal `hreflang` and canonical URLs.
- **Programmatic pages** — exams, services, cities, error fixes, and scholarships generated from JSON data.
- **Structured data (JSON-LD)** — WebSite, Organization, Person, FAQPage, HowTo, and BreadcrumbList for rich snippets.
- **Auto sitemap + robots** with locale alternates.
- **Working tools** — e.g. OTR Fee Calculator (client-side).
- **EEAT** — About page, editorial "last verified" dates, and a clear non-affiliation/privacy stance.
- **Light theme** tuned for the brand logos on white backgrounds.

## Tech stack

| Layer | Choice |
|---|---|
| Framework | Next.js (App Router), React, TypeScript |
| Styling | Tailwind CSS |
| i18n | Locale-prefixed routing + dictionaries |
| SEO | Native Metadata API, JSON-LD utilities, dynamic sitemap/robots |
| Hosting | Vercel (native Next.js) |

## Project structure

```
src/
  app/
    [locale]/            # locale-scoped routes (en, hi)
      [guide]/           # core guides: login, registration, forgot, merge
      exam/[slug]/       # programmatic exam pages
      service/[slug]/    # programmatic service pages
      city/[slug]/       # district pages
      error/[code]/      # troubleshooting pages
      scholarship/[category]/
      tools/             # tools index + individual tools
      about/             # EEAT page
    sitemap.ts
    robots.ts
  components/             # Header, Footer, FAQ, HowTo, JSON-LD, tools
  data/                  # exams, services, cities, errors, scholarships, guides
  dictionaries/          # en.json, hi.json
  lib/                   # site config, i18n, schema builders, content access
  proxy.ts               # middleware: redirects "/" -> default locale
public/RajSSO/           # brand assets (logos, OG images, favicons)
```

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint     # eslint
```

## Deployment — Vercel

Vercel runs Next.js 16 natively, so no adapter or static-export workaround is needed. The locale redirect uses Next.js middleware (`proxy.ts`).

1. Import the GitHub repo at [vercel.com/new](https://vercel.com/new).
2. Vercel auto-detects Next.js — no build settings to change.
3. Deploy. Pushes to `main` deploy automatically.

| Setting | Value |
|---|---|
| Framework preset | Next.js (auto-detected) |
| Build command | `next build` (default) |
| Output | `.next` (default) |

This setup is ready for ISR/SSR and a future database layer (e.g. Supabase) without changing hosts.

## Content & data

All content lives in `src/data/*.json` and `src/dictionaries/*.json`. Adding a new exam, service, city, error, or scholarship is a JSON edit — the page, metadata, schema, and sitemap entry are generated automatically.

## Disclaimer

RajSSO Guide is an independent informational website. For official services, always use the government portal at [sso.rajasthan.gov.in](https://sso.rajasthan.gov.in). We never request or store SSO IDs, passwords, or OTPs.
