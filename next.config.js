/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone',
  env: {
    DATABASE_URL: process.env.DATABASE_URL,
  },
  // Disable static optimization for pages that need database access
  experimental: {
    // This prevents Next.js from trying to statically generate pages that need database access
    // during the build process
    workerThreads: false,
  },
  // Disable static generation for pages that need database access
  unstable_runtimeJS: true,
  // Disable static optimization for pages that need database access
  staticPageGenerationTimeout: 0,
};

module.exports = nextConfig;