# Deployment Branches

This project maintains two separate deployment branches:

## 🟢 Main Branch (Vercel)
**Branch:** `main`  
**Platform:** Vercel  
**URL:** TBD (configure in Vercel dashboard)

### Configuration:
- Standard Next.js build (`next build`)
- Vercel Analytics enabled
- Vercel Speed Insights enabled
- No Cloudflare dependencies

### Key Files:
- `package.json`: Uses `@vercel/analytics` and `@vercel/speed-insights`
- `next.config.ts`: Standard Next.js config, CSP allows Vercel domains
- `src/app/[locale]/layout.tsx`: Includes `<Analytics />` and `<SpeedInsights />`

### Deploy Command:
```bash
npm run build
```
Or push to GitHub and connect to Vercel for auto-deployment.

---

## 🟠 Cloudflare Branch (Cloudflare Workers)
**Branch:** `cloudflare`  
**Platform:** Cloudflare Workers  
**URL:** https://rajssoguide.devxkamlesh.workers.dev

### Configuration:
- Webpack build (`next build --webpack`)
- OpenNext Cloudflare adapter
- Cloudflare Insights support
- No Vercel dependencies

### Key Files:
- `package.json`: Uses `@opennextjs/cloudflare@^1.19.11` and `wrangler@^4.86.0`
- `next.config.ts`: Includes `initOpenNextCloudflareForDev()`, CSP allows Cloudflare domains
- `wrangler.jsonc`: Cloudflare Workers configuration with Durable Objects
- `open-next.config.ts`: OpenNext adapter configuration
- `src/app/[locale]/layout.tsx`: No Vercel components

### Deploy Commands:
```bash
# Build the project
npm run build

# Preview locally
npm run preview

# Deploy to Cloudflare Workers
npm run deploy

# Alternative: Deploy assets separately
npm run upload
```

---

## Branch Differences Summary

| Feature | Main (Vercel) | Cloudflare |
|---------|---------------|------------|
| Build Command | `next build` | `next build --webpack` |
| Analytics | Vercel Analytics | Google Analytics only |
| Adapter | None (native) | `@opennextjs/cloudflare` |
| CSP Domains | `va.vercel-scripts.com`, `vitals.vercel-insights.com` | `static.cloudflareinsights.com`, `cloudflareinsights.com` |
| Wrangler | ❌ | ✅ |
| Auto-deploy | Via Vercel GitHub integration | Manual via `npm run deploy` |

---

## Switching Branches

To work on Vercel deployment:
```bash
git checkout main
npm install
```

To work on Cloudflare deployment:
```bash
git checkout cloudflare
npm install
```

**Important:** Always run `npm install` after switching branches due to different dependencies.

---

## Domain Configuration

Both deployments should point to: **rajssoguide.online**

- **Vercel:** Configure custom domain in Vercel dashboard
- **Cloudflare:** Configure custom domain in Cloudflare Workers settings

---

Last Updated: June 16, 2026
