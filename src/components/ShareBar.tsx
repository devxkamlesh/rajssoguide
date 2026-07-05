import { site } from "@/lib/site";
import type { Locale } from "@/lib/i18n";

// Social share bar. Uses plain share deep-links so it works with no
// client-side JavaScript and renders the same on server and client.
export function ShareBar({
  path,
  title,
  label,
  locale,
}: {
  path: string; // path including locale prefix, e.g. "/en"
  title: string;
  label: string;
  locale: Locale;
}) {
  const url = `${site.url}${path}`;
  const encUrl = encodeURIComponent(url);
  const encText = encodeURIComponent(title);

  const links = [
    {
      name: "WhatsApp",
      href: `https://wa.me/?text=${encodeURIComponent(`${title} ${url}`)}`,
      className: "bg-green-600 hover:bg-green-700",
      label: locale === "hi" ? "व्हाट्सएप पर शेयर करें" : "Share on WhatsApp",
      icon: (
        <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm5.8 14.01c-.24.68-1.42 1.31-1.96 1.36-.5.05-.96.24-3.23-.67-2.72-1.07-4.45-3.86-4.59-4.04-.13-.18-1.1-1.46-1.1-2.79 0-1.33.7-1.98.95-2.25.24-.27.53-.34.71-.34.18 0 .36 0 .51.01.16.01.39-.06.6.46.24.56.81 1.93.88 2.07.07.14.12.3.02.48-.09.18-.14.3-.27.46-.14.16-.29.36-.41.48-.14.14-.28.28-.12.55.16.27.71 1.17 1.53 1.9 1.05.94 1.94 1.23 2.21 1.37.27.14.43.12.59-.07.16-.18.68-.79.86-1.06.18-.27.36-.23.6-.14.24.09 1.55.73 1.81.86z" />
      ),
    },
    {
      name: "X",
      href: `https://twitter.com/intent/tweet?text=${encText}&url=${encUrl}&via=${site.social.twitter.replace("@", "")}`,
      className: "bg-black hover:bg-zinc-800",
      label: locale === "hi" ? "X पर शेयर करें" : "Share on X",
      icon: (
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      ),
    },
    {
      name: "Telegram",
      href: `https://t.me/share/url?url=${encUrl}&text=${encText}`,
      className: "bg-sky-500 hover:bg-sky-600",
      label: locale === "hi" ? "टेलीग्राम पर शेयर करें" : "Share on Telegram",
      icon: (
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
      ),
    },
    {
      name: "LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encUrl}`,
      className: "bg-[#0077b5] hover:bg-[#005e8c]",
      label: locale === "hi" ? "लिंक्डइन पर शेयर करें" : "Share on LinkedIn",
      icon: (
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      ),
    },
  ];

  return (
    <div className="flex flex-wrap items-center gap-2.5" aria-label={label}>
      <span className="text-xs font-medium text-zinc-500">{label}</span>
      {links.map((l) => (
        <a
          key={l.name}
          href={l.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={l.label}
          className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-semibold text-white transition ${l.className}`}
        >
          <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            {l.icon}
          </svg>
          {l.name}
        </a>
      ))}
    </div>
  );
}
