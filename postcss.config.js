// @ts-check

module.exports = {
  plugins: [
    require("postcss-preset-env")({
      features: {
        "nesting-rules": true,
        "environment-variables": false,
      },
    }),
    require("postcss-import"),
    require("tailwindcss"),
    require("autoprefixer"),
  ],
};
