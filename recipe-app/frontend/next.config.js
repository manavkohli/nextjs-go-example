/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // For static export, we need to handle trailing slashes
  trailingSlash: true,
}

module.exports = nextConfig