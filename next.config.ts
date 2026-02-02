import type { NextConfig } from "next";

const repoName = "portfolio";
const isDeployment = process.env.DEPLOY_ENV === "github-pages";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true
  },
  ...(isDeployment && {
    basePath: `/${repoName}`,
    assetPrefix: `/${repoName}/`
  })
};

export default nextConfig;
