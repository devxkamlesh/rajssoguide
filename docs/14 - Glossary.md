---
title: 14 · Glossary
aliases: [Glossary, Terms, Definitions]
tags: [glossary, reference]
updated: 2026-06-27
---

# 14 · Glossary

> [!abstract] SSO domain terms and project/tech terms used throughout this vault.

## 🏛️ Rajasthan SSO domain

| Term | Meaning |
|------|---------|
| **SSO ID** | Single Sign-On account for Rajasthan; one username/password for 100+ services at `sso.rajasthan.gov.in`. |
| **DoITC** | Department of Information Technology & Communication, Government of Rajasthan — runs the SSO portal (since 2013). |
| **Jan Aadhaar** | Rajasthan family ID + service-delivery platform; a registration method for SSO. |
| **e-Mitra** | Citizen-service platform / physical kiosks for bill payments, certificates, and in-person SSO help. |
| **PayManager** | Salary/payroll portal for state employees (salary slips, GA-55). |
| **RajKaj** | Government-employee portal (leave, ACR). |
| **SIPF** | State Insurance & Provident Fund — pension/PF records. |
| **OTR** | One-Time Registration — pay a recruitment fee once, apply to many exams (RPSC/RSSB). |
| **RPSC** | Rajasthan Public Service Commission (exams like CET). |
| **RSMSSB / RSSB** | Rajasthan Staff/Subordinate & Ministerial Services Selection Board (LDC, Patwari). |
| **SJE** | Social Justice & Empowerment Department — scholarship portal. |
| **Chiranjeevi** | Rajasthan health-insurance scheme. |
| **`RJ SSO` → 9223166166** | SMS shortcut to recover a forgotten SSO ID from the registered mobile number. |

## 🧑‍💻 Project & tech

| Term | Meaning |
|------|---------|
| **SSG** | Static Site Generation — pages pre-rendered at build time. |
| **OpenNext** | `@opennextjs/cloudflare` adapter that turns a Next build into a Cloudflare Worker. |
| **Wrangler** | Cloudflare's CLI for building/deploying Workers. |
| **Hub / Spoke** | Hub = category listing page; spoke = individual detail page. |
| **hreflang** | Tells search engines which language/region a page targets (`en-IN`, `hi-IN`, `x-default`). |
| **Canonical** | The single "official" URL for a page, to avoid duplicate-content issues. |
| **JSON-LD** | Structured-data format Google reads for rich results; built in `lib/schema.ts`. |
| **`@graph`** | A JSON-LD document holding multiple linked schema nodes for one page. |
| **GEO** | Generative-Engine Optimization — signals (author, dates, sources, `speakable`) that help AI answer engines. |
| **E-E-A-T** | Experience, Expertise, Authoritativeness, Trust — Google quality signals. |
| **AEO** | Answer-Engine Optimization — structuring content for featured snippets / direct answers. |
| **CSP** | Content-Security-Policy header limiting where scripts/styles/connections may load from. |
| **Localized field** | A value shaped `Record<Locale, T>` with both `en` and `hi`. |
| **D1 / KV / R2** | Cloudflare's SQLite / key-value / object-storage services (see [[11 - Backend and Database]]). |
| **Speakable** | Schema.org marking of page regions suitable for voice/AI reading. |

---

## 🔗 Related

[[01 - Overview]] · [[04 - Data Model]] · [[06 - SEO and Structured Data]] · [[README]]
