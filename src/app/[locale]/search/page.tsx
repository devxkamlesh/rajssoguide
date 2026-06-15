import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SearchBox } from "@/components/SearchBox";
import { getDictionary, isLocale, locales, type Locale } from "@/lib/i18n";
import { buildSearchIndex } from "@/lib/searchIndex";
import { alternates, canonicalFor } from "@/lib/schema";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return {
    title:
      locale === "hi" ? "खोजें — RajSSO Guide" : "Search — RajSSO Guide",
    description:
      locale === "hi"
        ? "एसएसओ गाइड्स, परीक्षाएं, सेवाएं, छात्रवृत्ति और टूल्स खोजें।"
        : "Search SSO guides, exams, services, scholarships and tools.",
    robots: { index: false },
    alternates: {
      canonical: canonicalFor(locale, "/search"),
      ...alternates("/search"),
    },
  };
}

export default async function SearchPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const loc = locale as Locale;
  const t = getDictionary(loc);
  const base = `/${loc}`;
  const index = buildSearchIndex(loc);

  return (
    <div className="mx-auto max-w-2xl">
      <Breadcrumbs
        items={[
          { name: t.common.home, href: base },
          { name: loc === "hi" ? "खोजें" : "Search" },
        ]}
      />
      <h1 className="text-3xl font-bold tracking-tight">
        {loc === "hi" ? "खोजें" : "Search"}
      </h1>
      <p className="mt-3 text-zinc-600">
        {loc === "hi"
          ? "गाइड्स, परीक्षाएं, सेवाएं, छात्रवृत्ति, शहर और टूल्स खोजें।"
          : "Find guides, exams, services, scholarships, cities and tools."}
      </p>

      <div className="mt-6">
        <SearchBox
          index={index}
          placeholder={
            loc === "hi"
              ? "जैसे: लॉगिन, पटवारी, छात्रवृत्ति..."
              : "e.g. login, patwari, scholarship..."
          }
          promptLabel={
            loc === "hi"
              ? "खोजने के लिए कम से कम 2 अक्षर टाइप करें।"
              : "Type at least 2 characters to search."
          }
          emptyLabel={
            loc === "hi" ? "कोई परिणाम नहीं मिला।" : "No results found."
          }
        />
      </div>
    </div>
  );
}
