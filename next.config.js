/** @type {import('next').NextConfig} */
const nextConfig = {

  reactStrictMode: true,
  images: {
    domains: ['scontent-ham3-1.cdninstagram.com'],
  },
};

module.exports = {
  env: {
    CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
    CONTENTFUL_ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN
  }
};