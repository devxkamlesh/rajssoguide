// Developer attribution badge - visible dofollow backlink
import { ATTRIBUTION } from "@/lib/attribution";

export function DevBadge() {
  return (
    <a
      href={ATTRIBUTION.url}
      target="_blank"
      rel="noopener"
      className="inline-flex items-center gap-1.5 text-xs text-zinc-500 hover:text-amber-700 transition-colors"
      title={`Designed & Developed by ${ATTRIBUTION.name}`}
    >
      <svg
        className="h-3.5 w-3.5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      </svg>
      <span>
        Designed & Developed by <strong>{ATTRIBUTION.handle}</strong>
      </span>
    </a>
  );
}
