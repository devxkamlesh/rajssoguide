import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { locales } from "@/lib/i18n";
import { guides } from "@/data/guides";
import { exams, services, cities, errors, scholarships } from "@/lib/content";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = [
    "",
    "/about",
    "/tools",
    "/tools/otr-fee-calculator",
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

  return locales.flatMap((locale) =>
    allPaths.map((path) => ({
      url: `${site.url}/${locale}${path}`,
      lastModified: new Date(),
      alternates: {
        languages: Object.fromEntries(
          locales.map((l) => [l, `${site.url}/${l}${path}`]),
        ),
      },
    })),
  );
}
