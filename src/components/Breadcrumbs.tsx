import Link from "next/link";

export interface Crumb {
  name: string;
  href?: string;
}

// Visible breadcrumb trail. Pair with breadcrumbSchema() for the JSON-LD.
export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-5 text-sm text-zinc-500">
      <ol className="flex flex-wrap items-center gap-1.5">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={i} className="flex items-center gap-1.5">
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="hover:text-amber-700 hover:underline"
                >
                  {item.name}
                </Link>
              ) : (
                <span
                  className="font-medium text-zinc-700"
                  aria-current={isLast ? "page" : undefined}
                >
                  {item.name}
                </span>
              )}
              {!isLast && <span className="text-zinc-300">/</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
