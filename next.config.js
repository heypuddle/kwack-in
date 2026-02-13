/** @type {import('next').NextConfig} */
const nextConfig = {
  // Cloudflare Pages-friendly: static HTML export.
  output: 'export',
  images: { unoptimized: true },
};

module.exports = nextConfig;
