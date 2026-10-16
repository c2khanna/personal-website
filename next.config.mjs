/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    silenceDeprecations: ['legacy-js-api', 'import', 'global-builtin', 'color-functions', 'if-function'],
  },
};

export default nextConfig;
