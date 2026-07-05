import Link from "next/link";

export interface LinkAction {
  text: string;
  href: string;
  /** external official links open in a new tab + nofollow */
  external?: boolean;
}

export interface ImportantLinkRow {
  label: string;
  actions: LinkAction[];
}

// "Important Links" action box — the signature element of Sarkari-style
// portals. A bordered table of direct actions (login, apply, download,
// official site) that answers user intent at a glance.
export function ImportantLinks({
  title,
  rows,
}: {
  title: string;
  rows: ImportantLinkRow[];
}) {
  if (rows.length === 0) return null;
  return (
    <section className="mt-10 overflow-hidden rounded-2xl border border-amber-200">
      <h2 className="bg-amber-700 px-5 py-3 text-base font-semibold text-white">
        {title}
      </h2>
      <table className="w-full border-collapse text-sm">
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              className={i % 2 === 0 ? "bg-white" : "bg-amber-50/40"}
            >
              <th
                scope="row"
                className="w-1/2 border-b border-amber-100 px-5 py-3 text-left font-medium text-zinc-700"
              >
                {row.label}
              </th>
              <td className="w-1/2 border-b border-amber-100 px-5 py-3">
                <div className="flex flex-wrap gap-x-4 gap-y-1">
                  {row.actions.map((a) =>
                    a.external ? (
                      <a
                        key={a.href}
                        href={a.href}
                        target="_blank"
                        rel="nofollow noopener"
                        className="font-medium text-amber-800 underline underline-offset-2 hover:text-amber-900"
                      >
                        {a.text} ↗
                      </a>
                    ) : (
                      <Link
                        key={a.href}
                        href={a.href}
                        className="font-medium text-amber-800 underline underline-offset-2 hover:text-amber-900"
                      >
                        {a.text}
                      </Link>
                    ),
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
