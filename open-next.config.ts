import { defineCloudflareConfig } from "@opennextjs/cloudflare";

// Minimal config for a static-first Next.js site on Cloudflare Workers.
// No R2 incremental cache is configured because pages are statically
// generated; add one later if ISR/on-demand revalidation is introduced.
export default defineCloudflareConfig({});
