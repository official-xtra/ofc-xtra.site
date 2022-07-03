/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/member",
        destination: "https://comingsoon.ofc-xtra.site",
        permanent: true,
      },
    ];
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
};

module.exports = nextConfig;
