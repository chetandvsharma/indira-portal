/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      // appDir: true,
      serverComponentsExternalPackages: ["mongoose"],
    },
    images: {
      domains: ['lh3.googleusercontent.com'],
    },
    webpack(config, { isServer }) {
      config.experiments = {
        ...config.experiments,
        topLevelAwait: true,
      }

      if (!isServer) {
        // Exclude filesystem-dependent modules from the client bundle
        config.resolve.fallback = {
          fs: false, // Exclude 'fs' module
        };
      }
      
      return config
    }
  }
  
export default nextConfig;