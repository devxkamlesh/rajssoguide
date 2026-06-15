import Link from "next/link";

export interface RelatedLink {
  href: string;
  label: string;
  desc?: string;
}

// "Related" block rendered at the bottom of content pages to raise
// pages-per-session and strengthen internal linking.
export function RelatedLinks({
  title,
  links,
}: {
  title: string;
  links: RelatedLink[];
}) {
  if (links.length === 0) return null;
  return (
    <section className="mt-12 border-t border-zinc-200 pt-6">
      <h2 className="text-lg font-semibold text-zinc-900">{title}</h2>
      <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="rounded-xl border border-zinc-200 p-4 transition hover:border-amber-500 hover:shadow-sm"
          >
            <div className="font-medium text-zinc-900">{link.label}</div>
            {link.desc && (
              <div className="mt-1 text-xs text-zinc-500">{link.desc}</div>
            )}
          </Link>
        ))}
      </div>
    </section>
  );
}
