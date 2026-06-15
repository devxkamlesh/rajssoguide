---
title: Architecture
tags:
  - architecture
  - developers
aliases:
---

# Architecture

A reference for how the codebase is structured and how a page is produced.

## Request lifecycle

```
URL request
   |
   v
proxy.ts (middleware)
   - adds a locale prefix when missing (/ becomes /en)
   - sets an X-Built-By attribution header
   |
   v
app/[locale]/layout.tsx
   - renders <html lang>, <head>, Header, Footer
   - injects global structured data (WebSite, Organization, Person)
   - loads analytics
   |
   v
app/[locale]/<route>/page.tsx
   - reads route params (locale + slug)
   - validates the locale, looks up the entity
   - loads content from data/ and lib/
   - builds page-specific structured data
   - renders shared components
```

Two rules underpin everything:

1. Every URL is locale-prefixed (`/en/...` or `/hi/...`). There is no unprefixed page.
2. Content is data-driven. Pages are thin templates; the text lives in `data/` and `lib/`.

## Folder structure

```
src/
  proxy.ts                 Middleware: locale redirect + attribution header
  app/
    layout.tsx             Root layout (pass-through)
    globals.css            Tailwind and global styles
    robots.ts              Generates /robots.txt
    sitemap.ts             Generates /sitemap.xml
    [locale]/
      layout.tsx           Real <html>/<body>, metadata, chrome, analytics
      page.tsx             Home page
      [guide]/             Core guides (login, registration, forgot, merge)
      exam/[slug]/         Exam detail pages
      exams/               Exams hub
      exam-calendar/       Visual exam calendar
      service/[slug]/      Service detail pages
      services/            Services hub
      scholarship/[category]/  Scholarship detail pages
      scholarships/        Scholarships hub
      city/[slug]/         City detail pages
      cities/              Cities hub
      error/[code]/        SSO error-fix pages
      guides/              Guides hub
      updates/             Updates feed
      search/              Client-side search
      tools/               Tools index plus 6 tools
      about/, contact/, privacy-policy/, terms-of-service/
  components/              Shared and interactive UI components
  data/                    Content sources (JSON and TypeScript)
  dictionaries/            en.json, hi.json (interface strings)
  lib/                     Core logic modules
```

## Routing and internationalization

- `lib/i18n.ts` defines `locales = ["en", "hi"]`, `defaultLocale = "en"`, the `isLocale()` guard, `getDictionary()`, and `hreflangMap` (`en` to `en-IN`, `hi` to `hi-IN`).
- `proxy.ts` is the Next.js middleware (exported as `proxy`, which Next.js 16 requires). It redirects unprefixed paths to the default locale and sets the attribution header. Its matcher skips `_next`, `api`, files with extensions, `sitemap.xml`, and `robots.txt`.
- `app/layout.tsx` is a pass-through; `app/[locale]/layout.tsx` renders the real `<html lang>` so each language has correct markup.
- Every dynamic route exports `generateStaticParams()` to pre-render all locale and slug combinations. Invalid values call `notFound()`.

Language content has two layers:

1. Interface strings (navigation, common labels) in `dictionaries/en.json` and `hi.json`, read with `getDictionary(loc)`.
2. Page content, where each field is keyed by locale (`Record<Locale, string>`), selected with `field[loc]`.

## Data sources

JSON data, accessed through `lib/content.ts`:

| File | Type | Powers |
|------|------|--------|
| exams.json | Exam[] | /exam/[slug] |
| services.json | Service[] | /service/[slug] |
| cities.json | City[] | /city/[slug] |
| scholarships.json | Scholarship[] | /scholarship/[category] |
| errors.json | SsoError[] | /error/[code] |

`content.ts` casts each file to a typed array and provides finder helpers (`getExam`, `getService`, and so on). Bilingual fields use `Localized = Record<Locale, string>`.

TypeScript content modules hold richer structures:

- `data/guides.ts` exports the core guide content (title, intro, body, steps, FAQs, last-verified date).
- `data/home.ts` exports every home-page section.
- `data/updates.ts` exports the dated updates feed, sorted newest-first, with a helper that flags recent items.

## Library modules

| File | Responsibility |
|------|----------------|
| i18n.ts | Locales, types, dictionary loader, hreflang map |
| site.ts | Single source of truth: name, URL, branding, contact, assets |
| content.ts | Typed access to JSON data plus finder helpers |
| schema.ts | JSON-LD builders and SEO URL helpers |
| pageContent.ts | Generates localized prose for service, city, scholarship pages |
| examContent.ts | Detailed hand-written exam content |
| related.ts | Builds "Related" links and "Important Links" rows per page type |
| searchIndex.ts | Builds the flat searchable list of all pages |
| attribution.ts | Developer attribution and Person schema |

## Components

Shared, server-rendered:

- `Header.tsx` (client) — sticky header with dropdown menus, search, language switch, mobile menu.
- `Footer.tsx` — multi-column footer with link groups, contact row, and attribution.
- `Breadcrumbs.tsx`, `RelatedLinks.tsx`, `ImportantLinks.tsx`, `ShareWhatsApp.tsx`, `LatestUpdates.tsx`, `ExamCalendar.tsx`, `FaqSection.tsx`, `HowToSection.tsx`, `GuideArticle.tsx`, `JsonLd.tsx`, `DevBadge.tsx`.

Interactive, client-only, no network calls:

- `AgeCalculator`, `OtrFeeCalculator`, `SsoIdValidator`, `ScholarshipCalculator`, `PhotoResizer`, `JanAadhaarStatusChecker`, `DaysLeft`, `SearchBox`.

## Configuration

- `next.config.ts` sets `images.unoptimized: true` and adds security headers (X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy, and a Content-Security-Policy).
- Analytics components load on every page; Google Analytics loads only when `NEXT_PUBLIC_GA_ID` is set in the environment.

## Related

[[03 - Pages and Flow]] · [[05 - SEO Security Performance]] · [[06 - Maintenance Guide]] · [[README]]
