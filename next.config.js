/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/sri-balaji-xerox',
  trailingSlash: true,
};

module.exports = nextConfig;
