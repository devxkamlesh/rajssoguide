import { site } from "@/lib/site";
import type { Locale } from "@/lib/i18n";

// WhatsApp share button. Uses the wa.me deep link so it works on both
// mobile and WhatsApp Web with no client-side JavaScript.
export function ShareWhatsApp({
  path,
  title,
  locale,
}: {
  path: string; // path including locale prefix, e.g. "/en/sso-id-login"
  title: string;
  locale: Locale;
}) {
  const url = `${site.url}${path}`;
  const text = encodeURIComponent(`${title}\n${url}`);
  const href = `https://wa.me/?text=${text}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener"
      className="inline-flex items-center gap-2 rounded-full bg-green-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-green-800"
      aria-label={locale === "hi" ? "व्हाट्सएप पर शेयर करें" : "Share on WhatsApp"}
    >
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm5.8 14.01c-.24.68-1.42 1.31-1.96 1.36-.5.05-.96.24-3.23-.67-2.72-1.07-4.45-3.86-4.59-4.04-.13-.18-1.1-1.46-1.1-2.79 0-1.33.7-1.98.95-2.25.24-.27.53-.34.71-.34.18 0 .36 0 .51.01.16.01.39-.06.6.46.24.56.81 1.93.88 2.07.07.14.12.3.02.48-.09.18-.14.3-.27.46-.14.16-.29.36-.41.48-.14.14-.28.28-.12.55.16.27.71 1.17 1.53 1.9 1.05.94 1.94 1.23 2.21 1.37.27.14.43.12.59-.07.16-.18.68-.79.86-1.06.18-.27.36-.23.6-.14.24.09 1.55.73 1.81.86.27.14.45.2.51.31.07.11.07.64-.17 1.32z" />
      </svg>
      {locale === "hi" ? "शेयर करें" : "Share"}
    </a>
  );
}
