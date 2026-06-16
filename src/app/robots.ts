import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: ["Googlebot", "Bingbot", "DuckDuckBot", "Slurp", "*"],
        allow: "/",
        disallow: ["/_next/", "/api/", "/*.json$", "/*/not-found"],
      },
      {
        userAgent: ["GPTBot", "ChatGPT-User", "CCBot", "anthropic-ai", "Claude-Web"],
        disallow: "/",
      },
    ],
    sitemap: "https://rajssoguide.online/sitemap.xml",
  };
}
