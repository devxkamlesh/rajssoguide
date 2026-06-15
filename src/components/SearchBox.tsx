"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { SearchItem } from "@/lib/searchIndex";

export function SearchBox({
  index,
  placeholder,
  emptyLabel,
  promptLabel,
}: {
  index: SearchItem[];
  placeholder: string;
  emptyLabel: string;
  promptLabel: string;
}) {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (q.length < 2) return [];
    return index
      .filter(
        (it) =>
          it.title.toLowerCase().includes(q) ||
          it.category.toLowerCase().includes(q),
      )
      .slice(0, 20);
  }, [query, index]);

  return (
    <div>
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
        autoFocus
        className="w-full rounded-xl border border-zinc-300 px-4 py-3 text-base outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
      />

      <div className="mt-5">
        {query.trim().length < 2 ? (
          <p className="text-sm text-zinc-500">{promptLabel}</p>
        ) : results.length === 0 ? (
          <p className="text-sm text-zinc-500">{emptyLabel}</p>
        ) : (
          <ul className="divide-y divide-zinc-100 overflow-hidden rounded-xl border border-zinc-200">
            {results.map((r) => (
              <li key={r.path}>
                <Link
                  href={r.path}
                  className="flex items-center justify-between gap-3 px-4 py-3 hover:bg-amber-50"
                >
                  <span className="text-sm font-medium text-zinc-800">
                    {r.title}
                  </span>
                  <span className="rounded bg-zinc-100 px-2 py-0.5 text-xs text-zinc-500">
                    {r.category}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
