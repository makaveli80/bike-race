const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const pathConfiguration = './config';
const babelLoaderOptions = {configFile: `${pathConfiguration}/babel.config.json`};
const postCssLoaderOptions = {config: { path: `${pathConfiguration}/postcss.config.js`}}

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: /src/,
        use: { loader: 'babel-loader', options: babelLoaderOptions }
      },
      {
        test: /\.html$/,
        include: /src/,
        use: { loader: 'html-loader' }
      },
      {
        test: /\.css$/,
        include: /src/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          { loader: 'postcss-loader', options: postCssLoaderOptions}
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html'
    }),
    new MiniCssExtractPlugin()
  ]
};
