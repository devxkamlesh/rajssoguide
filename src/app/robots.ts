import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        // Main crawlers — allow all content, block internals.
        userAgent: ["Googlebot", "Bingbot", "DuckDuckBot", "Slurp", "*"],
        allow: ["/"],
        disallow: [
          "/_next/",
          "/api/",
          "/*.json$",
          "/*/not-found",
        ],
      },
      {
        // Block AI training scrapers that don't respect content licensing.
        userAgent: [
          "GPTBot",
          "ChatGPT-User",
          "CCBot",
          "anthropic-ai",
          "Claude-Web",
        ],
        disallow: ["/"],
      },
    ],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
