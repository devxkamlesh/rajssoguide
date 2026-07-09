// Content review dates per section (ISO yyyy-mm-dd). These drive the visible
// "Last verified" line on programmatic pages and the per-URL <lastmod> in the
// sitemap. Bump a value when that section's content is reviewed/updated.
//
// Note: exam dates/fees are intentionally NOT stamped here until the figures
// are verified against the current official RPSC/RSSB notifications.
export const reviewed = {
  cities: "2026-07-06",
  scholarships: "2026-07-06",
  services: "2026-07-06",
  errors: "2026-07-06",
} as const;
