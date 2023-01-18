/** @type {import('next').NextConfig} */
const nextConfig = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
