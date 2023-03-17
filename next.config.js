/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,

  async rewrites() {
    return [
      {
        source: "/posts",
        destination: `https://books-api.nomadcoders.workers.dev/lists`,
      },
    ];
  },
};
