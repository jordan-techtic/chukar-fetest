/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/marketing-team-member-my-profile",
        destination: "/my-profile",
        permanent: true,
      },
      {
        source: "/marketing-team-member-manage-activity",
        destination: "/manage-activity",
        permanent: true,
      },
    ];
  },
  async rewrites() {
    const target =
      process.env.LUNA_VALIDATION_API_PROXY_TARGET || "http://174.138.72.184:8989";
    return [
      {
        source: "/api/:path*",
        destination: `${target.replace(/\/$/, "")}/api/:path*`,
      },
    ];
  },
  eslint: { ignoreDuringBuilds: true },
};

module.exports = nextConfig;
