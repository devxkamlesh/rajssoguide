---
title: Cloudflare Deployment
tags: [deployment, cloudflare]
---

# Cloudflare Deployment

The project is configured to deploy to Cloudflare Workers using the OpenNext adapter (`@opennextjs/cloudflare`). This note covers the exact settings needed for Git-connected Workers Builds, and how to deploy manually.

## The common failure

If the deploy log shows:

```
ERROR Could not find compiled Open Next config, did you run the build command?
Failed: error occurred while running deploy command
```

it means the deploy step ran **without** the OpenNext build step. The deploy command (`wrangler deploy`) expects `.open-next/worker.js` to already exist, which is produced by `opennextjs-cloudflare build`.

The fix is to set the correct **Build command** in the Cloudflare dashboard.

## Correct Workers Builds settings (Git integration)

In the Cloudflare dashboard: Workers & Pages, open the project, then Settings, then Build.

| Setting | Value |
|---------|-------|
| Build command | `npx opennextjs-cloudflare build` |
| Deploy command | `npx wrangler deploy` (default) |
| Root directory | `/` (the repo root is the Next.js app) |
| Branch | `cloudflare-deploy` (or `main` once merged) |

Notes:
- The build command must be `npx opennextjs-cloudflare build`. The default `npm run build` only runs `next build`, which produces `.next`, not `.open-next`, so deploy fails.
- The default deploy command `npx wrangler deploy` works because it detects the OpenNext output. Alternatively set the deploy command to `npx opennextjs-cloudflare deploy`.
- Wrangler reads `wrangler.jsonc` at the repo root for the worker name, compatibility date, and the `nodejs_compat` flag.

### Single-command alternative

If you prefer one command, set:
- Build command: leave empty (or `echo skip`)
- Deploy command: `npm run deploy`

`npm run deploy` is defined in `package.json` as `opennextjs-cloudflare build && opennextjs-cloudflare deploy`, which builds and deploys in one step.

## Manual deploy from your machine

```
npm run deploy
```

This builds the OpenNext worker and deploys it. You must be logged in to Wrangler (`npx wrangler login`) and have access to the Cloudflare account.

To preview the Workers runtime locally before deploying:

```
npm run preview
```

## Environment variables

- Set `NEXT_PUBLIC_GA_ID` in the Cloudflare project's environment variables (Settings, Variables) if Google Analytics is wanted in production.
- `.dev.vars` holds local-only variables (currently `NEXTJS_ENV=development`) and is gitignored.

## Why there is no middleware

Next.js 16's proxy (formerly middleware) runs only on the Node.js runtime, which Cloudflare Workers do not support for middleware. The locale redirect was therefore moved to `redirects()` in `next.config.ts`, and the attribution header to `headers()`. This keeps the app deployable on both Cloudflare and Vercel.

## Related

[[02 - Architecture]] · [[07 - Launch Review]] · [[README]]
