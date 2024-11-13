import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true, // This disables image optimization for GitHub Pages
  },
  basePath: "/github-portfoliov2",
  output: "export",  // <=== enables static exports
  reactStrictMode: true,
};

export default nextConfig;
