import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: ["Googlebot", "Bingbot", "DuckDuckBot", "Slurp", "*"],
        allow: ["/", "/_next/static/"],
        disallow: ["/api/", "/*/not-found"],
      },
      {
        userAgent: ["GPTBot", "ChatGPT-User", "CCBot", "anthropic-ai", "Claude-Web"],
        disallow: "/",
      },
    ],
    sitemap: "https://rajssoidguide.in/sitemap.xml",
  };
}
