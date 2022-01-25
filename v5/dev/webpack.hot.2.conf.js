const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    app: ['../src/index.js'],
    // Runtime code for hot module replacement
    hot: 'webpack/hot/dev-server.js',
    // Dev server client for web socket transport, hot and live reload logic
    client: 'webpack-dev-server/client/index.js?hot=true&live-reload=true',
  },
  output: {
    publicPath: "/dist/",
    filename: "[name].bundle.js",
    clean: true
  },
  module: {
    rules: [{
      test: /\.m?js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [
            ['@babel/preset-env', { targets: "defaults" }]
          ]
        }
      }
    }]
  },
  devServer: {
    hot: false,
    client: false
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Hot Module Replacement',
    }),
  ]
};