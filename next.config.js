const nextConfig = {
  reactStrictMode: true,
  experimental: {
    outputStandalone: true,
  },
  sassOptions: {
    additionalData: `@use "styles/utils/animations.scss" as A; @use "styles/utils/variables.scss" as V;`,
    excludePaths: "/styles"
  },
};

module.exports = nextConfig;
