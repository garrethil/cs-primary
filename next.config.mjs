/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '/cs-primary',
    assetPrefix: '/cs-primary/',
    images: {
      unoptimized: true,
    },
    trailingSlash: true,
  };
  
  export default nextConfig;
  