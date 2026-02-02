import type { NextConfig } from "next";

const repoName = "portfolio";
const isDeployment = process.env.DEPLOY_ENV === "github-pages" || process.env.NEXT_PUBLIC_DEPLOY_ENV === "github-pages";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true
  },
  basePath: isDeployment ? `/${repoName}` : "",
  assetPrefix: isDeployment ? `/${repoName}/` : ""
};

export default nextConfig;
