const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const buildDirectory = path.join(__dirname, './src/main/webapp/dist');

module.exports = {
  entry: './src/main/client/index.js',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        options: { presets: ['@babel/env'] },
      },
      {
        test: /(\.css|\.scss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  resolve: { extensions: ['*', '.js', '.jsx'] },
  output: {
    path: buildDirectory,
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: buildDirectory,
    historyApiFallback: true,
    port: 3000,

  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.join(__dirname, './src/main/webapp/index.html'),
    }),
  ],
};
