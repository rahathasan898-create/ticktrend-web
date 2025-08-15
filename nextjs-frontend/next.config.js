// File Path: next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Other configurations can go here
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '**',
      },
      // This is for your Sanity images
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
        pathname: '**',
      },
    ],
  },
};

module.exports = nextConfig;