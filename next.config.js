const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const { merge } = require('webpack-merge');

const { MICRO_CMS_API_TOKEN } = process.env;

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['placehold.jp', 'images.microcms-assets.io'],
  },
  serverRuntimeConfig: {
    MICRO_CMS_API_TOKEN,
  },
  webpack(config) {
    return merge(config, {
      resolve: {
        plugins: [new TsconfigPathsPlugin()],
      },
    });
  },
};
