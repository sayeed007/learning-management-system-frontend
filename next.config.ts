/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  webpack: (config: import("webpack").Configuration) => {
    // Ensure config.module exists
    if (!config.module) {
      config.module = {};
    }
    // Ensure config.module.rules exists
    if (!config.module.rules) {
      config.module.rules = [];
    }

    config.module.rules.push({
      test: /\.svg$/i,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;