/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: async () => ({
    beforeFiles: [
      {
        source: "/api/:path*",
        destination: process.env.LUNA_VALIDATION_API_PROXY_TARGET || "http://174.138.72.184:8989/:path*",
      },
    ],
  }),

  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

module.exports = nextConfig;
