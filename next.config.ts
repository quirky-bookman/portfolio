import type { NextConfig } from "next";

const repoName = "portfolio";
const isDeployment = process.env.DEPLOY_ENV === "github-pages";

const nextConfig: NextConfig = {
  basePath: isDeployment ? `/${repoName}` : "",
  assetPrefix: isDeployment ? `/${repoName}/` : "",
  output: "export",
  images: {
    unoptimized: true
  }
};

export default nextConfig;
