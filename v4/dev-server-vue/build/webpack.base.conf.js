var fs = require('fs');
var webpack = require('webpack')
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var utils = require('./utils')

module.exports = {
	// devtool: 'source-map',
	entry: {
		// app: ['babel-polyfill', './src/app.js']
		app: ['./src/app.js']
	},
	
	externals: {
		// 将顶层对象(window)中的 UE 暴露，使得其可以用 CMD 的方式来 import
		// ue:'UE'
	},
	
	resolve: {
		modules: [
			'node_modules'
		],
		extensions: ['.js', '.vue'],
		alias: {
			'@': utils.resolveRootPath('src'),
			
			// 解决依赖库中引用的版本不同
			lodash: utils.resolveRootPath('node_modules/lodash'),
			
		}
		
	},

	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				include: utils.resolveRootPath('./')
			}, 
			{
				test: /\.js$/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['env']
					}
				},
				include: utils.resolveRootPath('./'),
				exclude: /node_modules/
			},
			{
				test: /vuex-capsule/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['env']
					}
				},
			},
			{
				test: /\.css$/,
				// autoprefixer：css3代码自动补全
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: [{loader: 'css-loader?-autoprefixer'}]
				})
			}, 
			{
				test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
				// loader: 'url?limit=4000',
				loader: 'file-loader?name=fonts/[name].[ext]',
			}, 
			{
				test: /\.(png|jpe?g|gif)(\?\S*)?$/,
				loader: 'file-loader',
				options: {
					name: '[name].[ext]?[hash]'
				}
			}
		]
	},
	plugins: require('./webpack_cfg/plugins').info('base')

}
