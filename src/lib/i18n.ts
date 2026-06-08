// Lightweight i18n for the App Router. Locale-prefixed routing with
// dictionaries. Designed so next-intl can be layered on later without
// changing the URL structure or hreflang behaviour.
import en from "@/dictionaries/en.json";
import hi from "@/dictionaries/hi.json";

export const locales = ["en", "hi"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

const dictionaries = { en, hi } as const;

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function getDictionary(locale: Locale) {
  return dictionaries[locale] ?? dictionaries[defaultLocale];
}

// BCP-47 language tags for hreflang.
export const hreflangMap: Record<Locale, string> = {
  en: "en-IN",
  hi: "hi-IN",
};
