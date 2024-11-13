import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  basePath: "/github-portfoliov2",
  output: "export",  // <=== enables static exports
  images: {
    unoptimized: true, // This disables image optimization for GitHub Pages
  },
};

export default nextConfig;
