const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const buildDirectory = path.join(__dirname, './src/main/webapp/');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isDevelopment = process.env.NODE_ENV === 'development';

module.exports = {
  entry: ['babel-polyfill', './src/main/client/index.js'],
  mode: 'development',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        options: {
          presets: [
            '@babel/env',
            '@babel/react',
            {
              'plugins': [
                '@babel/plugin-proposal-class-properties'
              ]
            }
          ]
        },
      },
      {
        test: /(\.css|\.scss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  resolve: { extensions: ['*', '.js', '.jsx'] },
  output: {
    path: buildDirectory,
    filename: 'bundle.js',
  },
  devServer: {
    inline: true,
    contentBase: buildDirectory,
    historyApiFallback: true,
    port: 3000,
    proxy: { '/app': { target: 'http://localhost:8080', secure: false } },
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.join(__dirname, './src/main/client/template.html'),
    }),
    new MiniCssExtractPlugin({
      filename: isDevelopment ? '[name].css' : '[name].[hash].css',
      chunkFilename: isDevelopment ? '[id].css' : '[id].[hash].css',
    }),
  ],
};
