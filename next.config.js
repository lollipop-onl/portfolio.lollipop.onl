const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const { merge } = require('webpack-merge');

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['placehold.jp', 'images.microcms-assets.io'],
  },
  webpack(config) {
    return merge(config, {
      resolve: {
        plugins: [new TsconfigPathsPlugin()],
      },
    });
  },
};
