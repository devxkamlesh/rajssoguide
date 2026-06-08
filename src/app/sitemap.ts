import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { locales, hreflangMap, defaultLocale } from "@/lib/i18n";
import { guides } from "@/data/guides";
import { exams, services, cities, errors, scholarships } from "@/lib/content";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = [
    "",
    "/about",
    "/tools",
    "/tools/otr-fee-calculator",
    "/tools/age-calculator",
    "/tools/sso-id-validator",
    ...guides.map((g) => `/${g.slug}`),
  ];
  const dynamicPaths = [
    ...exams.map((e) => `/exam/${e.slug}`),
    ...services.map((s) => `/service/${s.slug}`),
    ...cities.map((c) => `/city/${c.slug}`),
    ...errors.map((e) => `/error/${e.slug}`),
    ...scholarships.map((s) => `/scholarship/${s.slug}`),
  ];
  const allPaths = [...staticPaths, ...dynamicPaths];
  const lastModified = new Date();

  // Reciprocal hreflang alternates (en-IN, hi-IN, x-default) for each path.
  const languagesFor = (path: string) => ({
    ...Object.fromEntries(
      locales.map((l) => [hreflangMap[l], `${site.url}/${l}${path}`]),
    ),
    "x-default": `${site.url}/${defaultLocale}${path}`,
  });

  return locales.flatMap((locale) =>
    allPaths.map((path) => ({
      url: `${site.url}/${locale}${path}`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : 0.7,
      alternates: { languages: languagesFor(path) },
    })),
  );
}
