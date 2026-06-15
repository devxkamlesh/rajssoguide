---
title: Pages and Flow
tags: [pages, navigation]
---

# Pages and Flow

The current live structure of the site, the page types, and how visitors move through them.

## Site map

```
/[locale]                         Home
  /search                         Client-side instant search (not indexed)
  /updates                        Dated news feed
  /guides                         Guides hub
    /sso-id-login
    /sso-id-registration
    /forgot-sso-id
    /merge-sso-id
  /exams                          Exams hub
    /exam-calendar                Visual calendar + date table
    /exam/rpsc-cet
    /exam/rsmssb-ldc
    /exam/patwari
  /services                       Services hub
    /service/paymanager
    /service/rajkaj
    /service/jan-aadhaar
  /scholarships                   Scholarships hub
    /scholarship/sc, /st, /obc, /ews, /minority
    /scholarship  -> redirects to /scholarships
  /cities                         Cities hub
    /city/<12 cities>
    /city  -> redirects to /cities
  /tools                          Tools hub
    /tools/otr-fee-calculator
    /tools/age-calculator
    /tools/sso-id-validator
    /tools/scholarship-calculator
    /tools/photo-resizer
    /tools/jan-aadhaar-status
  /error/<6 error-fix pages>
  /about  /contact  /privacy-policy  /terms-of-service

SEO files: /sitemap.xml  /robots.txt  /humans.txt
```

## Hub and spoke model

The site uses a hub-and-spoke structure. A hub is a category listing page; a spoke is an individual detail page.

```
HUB (listing)            SPOKES (detail pages)
/exams        ------->    /exam/rpsc-cet
                          /exam/rsmssb-ldc
                          /exam/patwari
```

Hubs target broad search terms and funnel visitors to specific detail pages. Detail pages link back to their hub and to related pages, which increases pages per session and internal link strength.

## Navigation

The header contains:

- Standalone links: Updates (with a "New" marker) and Calendar.
- Dropdown menus: Guides, Exams, Services, Tools, Help (Help includes About, Contact, Cities, Sitemap, Privacy, Terms).
- A search icon and a language switch.

The footer contains grouped link columns (Guides, Explore, Help and Info), a contact row (email, WhatsApp, official portal), social links, and the attribution badge.

Every content page also shows a breadcrumb trail.

## Page types and their blocks

| Page type | Main blocks |
|-----------|-------------|
| Home | Hero, quick links, latest updates, explainer, categories, steps, internal links, FAQ, safety tips, contact call-to-action |
| Guide | Official-portal call-to-action, steps, FAQ, WhatsApp share, Important Links, Related |
| Exam | Fee cards, detailed content, linked services, Important Links, Related |
| Exam Calendar | Visual month calendar (last dates and exam dates), date table with live countdown |
| Service | Purpose, content, Important Links, Related |
| Scholarship | Eligibility, application steps, Important Links, Related |
| City | Local intro, call-to-action, content, Related |
| Updates | Full dated feed, WhatsApp share |
| Search | Instant client-side search across all pages |
| Hub pages | Card grid of all items, plus ItemList structured data |

## Typical user journeys

```
"RPSC CET last date"
  -> /exam/rpsc-cet -> Important Links -> official portal
                    -> Related -> /exam-calendar

Browsing exams
  -> Exams menu -> /exams -> pick an exam -> calendar -> countdown

"Forgot my SSO ID"
  -> /forgot-sso-id -> steps -> WhatsApp share -> official portal

Quick lookup
  -> search icon -> type "patwari" -> jump to the page
```

## Related

[[02 - Architecture]] · [[04 - Content Inventory]] · [[README]]
