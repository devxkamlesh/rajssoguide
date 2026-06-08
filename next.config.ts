import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fully static site (all pages are SSG). Static export deploys cleanly to
  // Cloudflare Pages with no adapter and best edge performance.
  output: "export",
  // Static export requires the built-in image optimizer to be disabled.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
