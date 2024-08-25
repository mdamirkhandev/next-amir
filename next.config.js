// next.config.js

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
    trailingSlash: true,
    staticPageGenerationTimeout: 1000,
    reactStrictMode: false
};

export default nextConfig;