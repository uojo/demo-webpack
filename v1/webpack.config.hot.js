var webpack = require('webpack');
var path = require('path');
var hotMiddlewareScript = 'webpack-hot-middleware/client?reload=true&noInfo=true';
var HtmlWebpackPlugin = require('html-webpack-plugin');

var devConfig = {
  entry: {
    page1: ['./src/entry1', hotMiddlewareScript]
  },
  output: {
    filename: './[name]-bundle.js',
    path: path.resolve('./dist'),
    publicPath: '/'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: "babel"},
      {
        test: /\.scss$/,
        loader: 'style!css?sourceMap!resolve-url!sass?sourceMap'
      },
      {test:/\.(tpl|ejs)$/,loader: 'ejs'},
      {test:/\.css$/,loader:"style!css"},
      {
        test: /\.(png|jpg)$/,
        loader: 'url?limit=8192&context=client&name=[path][name].[ext]'
      }, 
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
			filename: 'index.html',
			template: path.resolve(__dirname, './dist/index.tpl'),
			inject: true
    }),
    
    // Webpack 1.0 
    new webpack.optimize.OccurenceOrderPlugin(),
    // Webpack 2.0 fixed this mispelling 
    // new webpack.optimize.OccurrenceOrderPlugin(), 
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()

    
  ]
};

module.exports = devConfig;