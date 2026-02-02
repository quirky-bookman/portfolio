import type { NextConfig } from "next";

const repoName = "portfolio";

const nextConfig: NextConfig = {
  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}`,
  output: "export",
  images: {
    qualities: [25, 50, 75, 80, 100]
  }
};

export default nextConfig;
