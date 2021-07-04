const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const { merge } = require('webpack-merge');

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['placehold.jp'],
  },
  webpack(config) {
    return merge(config, {
      resolve: {
        plugins: [
          new TsconfigPathsPlugin(),
        ]
      },
    });
  },
};
