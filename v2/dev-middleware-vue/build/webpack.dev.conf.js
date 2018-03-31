var webpack = require('webpack')
var merge = require('webpack-merge')
var sysInfo = require('./sys-env').info('development')
var baseWebpackConfig = require('./webpack.base.conf')

// add hot-reload related code to entry chunks
Object.keys(baseWebpackConfig.entry).forEach(function(name) {
	baseWebpackConfig.entry[name] = ['./build/webpack_cfg/middleware_client'].concat(baseWebpackConfig.entry[name])
})
// console.log('baseWebpackConfig',baseWebpackConfig)

module.exports = merge(baseWebpackConfig, {
	devtool: sysInfo.devtool,
	output: {
		path: sysInfo.assetsRoot,
		publicPath: sysInfo.assetsPublicPath,
		filename: '[name].js',
		// filename: 'build.js',
		chunkFilename: 'dist/[name].js' // 设置require.ensure 文件名
	},
	plugins: require('./webpack_cfg/plugins').info('dev')
})
