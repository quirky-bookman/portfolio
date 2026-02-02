import type { NextConfig } from "next";

const repoName = "portfolio";

const nextConfig: NextConfig = {
  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}/`,
  output: "export",
  images: {
    unoptimized: true
  }
};

export default nextConfig;
