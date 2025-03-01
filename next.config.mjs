/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
    unoptimized: true, // For GitHub Pages compatibility
  },
  output: 'export', // Enables static HTML export
};

export default nextConfig; 