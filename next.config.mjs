/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
    unoptimized: true, // For GitHub Pages compatibility
  },
  // Removed output: 'export' to enable API routes on Vercel
};

export default nextConfig; 