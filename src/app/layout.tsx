import type { ReactNode } from "react";
import "./globals.css";

// Root layout is a pass-through. The real <html>/<body> with the correct
// lang attribute is rendered by src/app/[locale]/layout.tsx so each locale
// gets the right markup for SEO.
export default function RootLayout({ children }: { children: ReactNode }) {
  return children;
}
