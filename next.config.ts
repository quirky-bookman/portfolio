import type { NextConfig } from "next";

const repoName = "portfolio";
const isProduction = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  basePath: isProduction ? `/${repoName}` : "",
  assetPrefix: isProduction ? `/${repoName}/` : "",
  output: "export",
  images: {
    unoptimized: true
  }
};

export default nextConfig;
