/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  basePath: "/decimoor-portfolio",
  assetPrefix: "/decimoor-portfolio/",
  trailingSlash: true,
  publicRuntimeConfig: {
    basePath: "/decimoor-portfolio",
  },
};

export default nextConfig;
