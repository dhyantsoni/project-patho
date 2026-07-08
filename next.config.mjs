/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    // Static export can't run the Image Optimization server, so images are
    // pre-optimized to WebP at build-time (see scripts/optimize-images.mjs).
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
