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

  compiler: {
    styledComponents: true,
  },
  async rewrites() {
    const target =
      process.env.LUNA_VALIDATION_API_PROXY_TARGET ||
      "http://174.138.72.184:8989";
    return [
      {
        source: "/api/:path*",
        destination: `${target.replace(/\/$/, "")}/api/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;
