import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  basePath: "/quentin-bender.io",
  output: "export",  // <=== enables static exports
  images: {
    unoptimized: true, // This disables image optimization for GitHub Pages
  },
};

export default nextConfig;
