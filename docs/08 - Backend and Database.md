---
title: Backend and Database
tags: [backend, database, planning]
---

# Backend and Database

This document analyses what changes if you add a backend and a database to RajSSO Guide. It explains the current setup, the situations that justify a backend, the realistic options, and a balanced list of pros and cons, followed by a recommendation.

## Current setup

Today the site has no backend and no database. Every page is generated at build time and served as static files from Vercel's edge. Content lives in the repository as data files. The only runtime logic is a lightweight middleware for language routing. The interactive tools run entirely in the browser.

This is the simplest, fastest, cheapest, and most secure possible architecture for an informational site. A backend should only be added if a specific feature genuinely requires it.

## What a backend or database would enable

A backend (server-side code) and a database (persistent storage) become useful when you need to store or change data after the site is built, or react to individual users. Concrete examples for this project:

1. A working contact or feedback form that stores submissions, instead of relying on email and WhatsApp links.
2. User accounts, saved exams, or personalised reminders.
3. Comments, ratings, or question-and-answer sections on pages.
4. An admin panel so non-developers can publish updates and edit content without touching code or redeploying.
5. Dynamic, frequently changing data such as live exam notifications pulled from an external source.
6. Newsletter or push-notification subscriptions.
7. Server-side search across a very large content set.
8. Storing analytics or engagement data you fully own.

If none of these are needed, a backend adds cost and risk with no benefit.

## Options if you decide to add one

You do not have to run a traditional server. Common approaches, from lightest to heaviest:

- **Serverless functions (Vercel functions or API routes).** Small pieces of server code for one task, such as handling a form submission. No always-on server.
- **Backend-as-a-service (Supabase, Firebase).** A managed database plus authentication, storage, and APIs, with little server code to maintain. Supabase provides Postgres; Firebase provides a document store.
- **Headless CMS (Sanity, Contentful, Strapi, or a Git-based CMS).** Lets non-developers manage content. Pairs well with a static site through scheduled or on-demand rebuilds, so you can keep most of the speed benefits.
- **Full custom backend with a database (Node plus Postgres or MongoDB).** Maximum control, maximum responsibility. Rarely justified for a content site of this size.

For this project, the lightest option that solves the actual need is almost always the right one. A headless or Git-based CMS for editing, or a serverless function plus a managed database for forms, would cover the most likely needs without abandoning the static model.

## Pros of adding a backend and database

- **Dynamic content without redeploys.** Editors can publish updates, exam dates, and notices instantly.
- **User-specific features.** Accounts, saved items, reminders, and personalised content become possible.
- **Owned data.** Form submissions, subscriptions, and engagement data are stored under your control.
- **Non-developer editing.** A CMS or admin panel lets a content team work without code.
- **Interactivity.** Comments, ratings, and community features can increase return visits.
- **Scale of search and filtering.** Server-side queries handle very large datasets that would be slow in the browser.

## Cons of adding a backend and database

- **Higher cost.** Databases, server functions, and managed services have ongoing fees; static hosting is often free or near-free.
- **More complexity.** More moving parts to build, deploy, monitor, and debug.
- **Slower pages, potentially.** Server-rendered or database-backed pages are usually slower than pre-built static files, which matters for low-end mobile users.
- **Security and privacy burden.** Storing user data brings responsibilities: authentication, access control, encryption, backups, and compliance with the privacy commitments already published on the site.
- **Maintenance and uptime.** A backend can fail or need patching; static files essentially cannot go down in the same way.
- **SEO risk if done carelessly.** Moving content from pre-rendered pages to client-side fetching can hurt crawlability unless server rendering is preserved.
- **Operational overhead.** Migrations, environment variables, secrets management, and scaling all become your concern.

## Recommendation

Keep the static architecture as the default. It directly serves the project's goals: speed on cheap phones, low cost, strong SEO, and minimal risk.

Add backend capability only for a specific, justified need, and add the smallest piece that solves it:

- To let a non-developer manage updates and content, adopt a Git-based or headless CMS that triggers a rebuild. This keeps the static speed.
- To accept form submissions or subscriptions, add a single serverless function plus a managed database such as Supabase, rather than a full server.
- Defer accounts, comments, and personalisation until there is clear user demand and steady traffic, because they carry the most cost and privacy responsibility.

A staged path keeps today's advantages while leaving room to grow. There is no need to add a database now; the current design is appropriate for the site's purpose and stage.

## Related

[[01 - Overview]] · [[02 - Architecture]] · [[07 - Launch Review]] · [[README]]
