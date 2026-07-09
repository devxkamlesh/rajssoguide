---
title: 13 · Changelog
aliases: [Changelog, History, Release Notes]
tags: [changelog]
updated: 2026-06-27
---

# 13 · Changelog

> [!abstract] Notable changes, newest first. Keep this in sync with deploys and the [[README]] status table.

## 2026-07-08 — SSO ID Portal page, nav rebuild, author links → devxkamlesh.com

> [!info] Code complete — pending deploy
> - **New `/sso-id-portal` guide** (`guides.ts`, en + hi, ~1000+ words each) targeting the surging head term `sso id portal` (~50k/mo, +9900% YoY). Scoped to the portal itself — dashboard, service categories, access, the app, safety — so it complements rather than cannibalises `/sso-id-login`. Article + HowTo + FAQ schema; cross-linked via `relatedForGuide`, footer, and the guides hub (site now 122 pages).
> - **Header & footer rebuilt** with the new pages: SSO Helpdesk + SSO ID Portal under Guides, Changelog under Help.
> - **Author links now point to devxkamlesh.com** (not the LinkedIn profile) across the home byline/bio, About, and Contact pages, and `article:author`. Schema `sameAs` still lists LinkedIn for entity disambiguation.
> - Added the **`ponytail` steering file** (lazy-senior-dev coding mode) to project steering after reviewing it for safety.

## 2026-07-08 — Helpdesk page, keyword targeting, email directory, date bump

> [!info] Code complete — pending deploy
> **New page (keyword-driven)**
> - **`/sso-id-helpdesk`** added as a data-driven guide (`guides.ts`) targeting the helpdesk/customer-care cluster from the keyword CSV (`sso id helpdesk`, `rajsso helpdesk`, `sso id customer care number`). Bilingual, with Article + HowTo + FAQ schema, official helpline table, a fake-customer-care safety section, and honest "independent, not a call centre" framing. Cross-linked via `relatedForGuide` and the sitewide footer; auto-added to sitemap + guides hub (site now 118 pages).
>
> **Keyword targeting**
> - Added the surging `sso id portal` (+9900% YoY) and `RajSSO` to the home keyword set (en + hi).
>
> **Emails**
> - Added a purpose-based email directory to `site.ts` (`contact`, `editor`, `legal`, `privacy`, `grievance`). Contact page now lists all five by purpose. Privacy Policy points privacy/data requests to `privacy@` and adds a Grievance Officer (`grievance@`, India IT Rules 2021). Terms already used `legal@`.
>
> **Public changelog + freshness signals**
> - **New public `/changelog` page** (data-driven, `data/changelog.ts` + `[locale]/changelog`): a user-facing, dated record of site updates for YMYL transparency. Distinct from the news-style `/updates` feed. Bilingual, WebPage + Breadcrumb schema, in the sitemap and footer (site now 120 pages).
> - **Visible "Last verified" dates** added to city, scholarship, and error detail pages (via `lib/reviewed.ts`) to match the dates guides/services already show. Exam pages intentionally left unstamped until fees/dates are verified.
> - **Per-URL sitemap `<lastmod>`**: guides use their own `lastVerified`; cities/scholarships/services/errors use `lib/reviewed.ts`; changelog uses its newest entry date. Other paths fall back to build time.
> - Home review dates bumped **27 June 2026 → 8 July 2026** (badge, `modified`, About review date, sources "last verified").
> - **exam-calendar** enriched: added supporting prose + a 4-question FAQ with FAQPage schema.
> - **SSO login guide CTA** now links to the direct sign-in page `sso.rajasthan.gov.in/signin` (via `site.officialSignin` + a `portalUrl` prop on `GuideArticle`); other guides keep the portal home.

## 2026-07-06 — SEO audit fixes: crawlers, schema, OG, internal links, bespoke services

> [!info] Code complete — pending deploy
> **Technical / crawlability**
> - **`robots.ts`:** unblocked the AI search-and-cite crawlers (GPTBot, ChatGPT-User, PerplexityBot, ClaudeBot, Google-Extended); kept CCBot (training-only) blocked. Enables AI Overview / ChatGPT / Perplexity citation.
> - **Home `datePublished`** corrected from placeholder `2024-01-01` to the real first-commit date `2026-06-08` (`homeMeta.published`) — removes an E-E-A-T date mismatch.
>
> **Internal linking**
> - **Error pages were orphans** (no inbound links). Added a "Step-by-step fixes" link block under the home troubleshooting table linking to all `/error/*` pages, and added a `RelatedLinks` block + localized breadcrumb on the error page itself (`relatedForError`).
>
> **Metadata / social**
> - New **`socialMeta()`** helper in `schema.ts`; applied per-page Open Graph + Twitter cards to every hub, detail, tool, about, and contact page (previously only the home page had per-page cards).
>
> **Structured data**
> - Added **FAQPage** schema + on-page FAQ to city and scholarship detail pages (`cityFaqs`, `scholarshipFaqs`).
> - Added **WebPage** JSON-LD to `/privacy-policy` and `/terms-of-service`.
>
> **Content**
> - **Bespoke `rajkaj` and `jan-aadhaar` service pages** (en + hi) added to `serviceContent.ts`, matching the paymanager depth (intro, quick-reference table, step blocks, issue tables, FAQs) — they no longer fall back to the generic `serviceBody()` template, and now emit HowTo + FAQ schema.
> - **3 new error pages** added to `errors.json` (en + hi): `otp-not-received`, `session-timeout`, `name-mismatch`. Auto-flow into the sitemap, home "Step-by-step fixes" links, and static params (site now 116 static pages).
> - **`SoftwareApplication` (WebApplication) schema** added to all 7 tool pages via `softwareAppSchema()` — marked truthfully free (price 0 / isAccessibleForFree).
> - Fixed the "SJE/SCholarship" typo on scholarship pages; unique readable meta descriptions for city + scholarship pages (replacing keyword-list descriptions); fixed the privacy-page contact-email inconsistency (`privacy@` → `contact@`).

## 2026-06-27 — Exam-season cluster link + new FAQs + Twitter handle

> [!success] Deployed
> - **New bilingual "Why searches for SSO ID spike around exam season" section** on the home page with a **contextual in-body link to `/exam-calendar`** — connects the homepage hub to the calendar spoke for topical clustering (`homeMeta.examSeason`).
> - **6 new FAQ entries** appended to `home.ts` `faqs` (en + fresh hi): out-of-state SSO ID, Bhamashah legacy accounts, name-vs-Aadhaar mismatch, phone-vs-computer, SSO ID vs Jan Aadhaar, moving city. They flow into the **existing single `FAQPage`** node — no duplicate schema.
> - **Twitter handle** unified to `@devxkamlesh` (`site.social.twitter`) → affects `twitter:site`, Organization `sameAs`, and ShareBar `via`.

## 2026-06-27 — Hindi GEO localization + OG images + docs rebuild

> [!success] Deployed
> - **Localized machine-readable SEO for `/hi`:** `article:section` → `सरकारी सेवाएं`, localized `article:tag`, Hindi `keywords`, Hindi OG/Twitter image `alt`, and a locale-aware `GovernmentService` schema (`ssoGovernmentService(locale)`).
> - **New OG images wired in:** `site.assets.ogImage` now points at `/RajSSO/sso-id-rajasthan-2026-og-image-en.webp` and `-hi.webp` (used by both OpenGraph and Twitter cards, per locale).
> - Bumped home "last updated" to **27 June 2026** across `homeMeta.ts` (badge, `article:modified_time`, WebPage `dateModified`, OG `modifiedTime`).
> - **Documentation vault fully rebuilt** (this `docs/` folder) and corrected against the live source.

## 2026-06-26 — Rich Results fix + full home upgrade

> [!success] Deployed
> - **Fixed Google "Multiple ListItem elements defined on page":** removed the **four** `ItemList` nodes from the home `@graph`. `ItemList` now lives only on the dedicated hubs (`/exams`, `/scholarships`, `/services`, `/cities`).
> - **Home page content upgrade:** quick-action table, SMS recovery callout (`RJ SSO` → 9223166166), direct-answer box (`#what-is-sso`), "About This Guide" E-E-A-T block with **9 cited `.gov.in` sources**, author byline + last-updated badge, top & bottom share bars.
> - **Schema additions:** `webPageSchema` (dates, author, `reviewedBy`, `speakable`), `ssoGovernmentService` as the WebPage `about`; consolidated `personSchema` to the **real author** (Kamlesh Choudhary) with `sameAs`; added LinkedIn/GitHub to Organization `sameAs`.
> - **Metadata:** OpenGraph `type: article` + `publishedTime`/`modifiedTime` + `secureUrl`, `twitter:creator`, `keywords`, geo tags (`geo.*` + `ICBM` from `site.geo`), `revisit-after`, enhanced `bingbot`, `alternateLocale`.
> - **Fixed the Hinglish English meta description** and removed the misleading "official guide" claim → "independent informational guide."
> - New components/data: `ShareBar.tsx`, `data/homeMeta.ts`.

> [!bug] Deploy gotcha encountered & documented
> A leftover `workerd` process locked `.open-next` on Windows (`EPERM`). Resolved by stopping the process before rebuild — now documented in [[08 - Cloudflare Deployment#🐞 Troubleshooting]].

## Baseline (pre-June 2026)

- Next.js 16 App Router site on Cloudflare Workers via OpenNext.
- Bilingual `/en` + `/hi`, ~108 static pages, hub-and-spoke structure.
- Per-page metadata, hreflang, sitemap, robots (AI-scraper block), security headers + CSP.
- Data-driven content; interactive tools run client-side.

---

## 🔗 Related

[[06 - SEO and Structured Data]] · [[08 - Cloudflare Deployment]] · [[12 - Roadmap and Improvements]] · [[README]]
