const path = require('path');

const postCssLoaderOptions = { sourceMap: true, config: { path: "./config/" }};

module.exports = {
  stories: ['../../src/**/*.stories.js'],
  addons: ['@storybook/addon-actions', '@storybook/addon-links'],
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      test: /\.css$/,
      use: [
        { loader: 'postcss-loader', options: postCssLoaderOptions }
      ],
    });

    return config;
  }
};
