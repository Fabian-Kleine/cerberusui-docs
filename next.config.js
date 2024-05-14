/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx',
  standalone: true,
})

module.exports = withNextra(nextConfig);
