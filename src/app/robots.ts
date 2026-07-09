import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        // Traditional search + AI search-and-cite crawlers.
        // AI bots are allowed so ChatGPT, Perplexity, Claude, and Google's
        // AI features (AI Overviews / Gemini) can read and CITE the guides.
        userAgent: [
          "Googlebot",
          "Bingbot",
          "DuckDuckBot",
          "Slurp",
          "GPTBot",
          "ChatGPT-User",
          "PerplexityBot",
          "ClaudeBot",
          "Google-Extended",
          "*",
        ],
        allow: ["/", "/_next/static/"],
        disallow: ["/api/", "/*/not-found"],
      },
      {
        // Training-only scraper (Common Crawl) — no citation benefit, so blocked.
        userAgent: "CCBot",
        disallow: "/",
      },
    ],
    sitemap: "https://rajssoidguide.in/sitemap.xml",
  };
}
