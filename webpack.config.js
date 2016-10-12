const webpack = require('webpack');
var path = require("path");

module.exports = {
	//演示单入口文件
	entry: [
	  'webpack-dev-server/client?http://127.0.0.1:3000', // WebpackDevServer host and port
	  'webpack/hot/only-dev-server',
	  './src/entry1' // Your app?s entry point
	],
	output: {
		path: path.resolve(__dirname, "dist"),
		// publicPath: "/dist",
		publicPath: "http://127.0.0.1:3000/dist/",
		filename: "bundle.js"
	},
	module:{
		loaders:[
			{ test: /\.js$/, exclude: /node_modules/, loader: "babel"},
			{test:/\.(tpl|ejs)$/,loader: 'ejs'},
			{test:/\.css$/,loader:"style!css"},
			{test:/\.(jpg|png)$/,loader:"url?limit=8192"}
		]
	},
	plugins:[
		new webpack.HotModuleReplacementPlugin()
	]
};