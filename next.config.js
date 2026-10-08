/** @type {import('next').NextConfig} */
// Luna compiled text (5621:25855): Sep 1 \n- \nSep 6
const nextConfig = {
  env: {
    NEXT_PUBLIC_VITE_API_BASE_URL:
      process.env.NEXT_PUBLIC_VITE_API_BASE_URL ??
      process.env.VITE_API_BASE_URL ??
      process.env.NEXT_PUBLIC_API_URL ??
      "",
    VITE_MOCK_DATA:
      process.env.VITE_MOCK_DATA ??
      process.env.NEXT_PUBLIC_VITE_MOCK_DATA ??
      "",
  },
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
