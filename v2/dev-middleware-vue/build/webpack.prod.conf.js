if(!process.env.NODE_ENV){
	process.env.NODE_ENV = 'production'
}

var path = require('path')
var webpack = require('webpack')
var merge = require('webpack-merge')
var BundleAnalyzerPlugin  = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
var utils = require('./utils')
var sysInfo = require('./sys-env').info('production');
var baseWebpackConfig = require('./webpack.base.conf')

var publicPath = sysInfo.publicPath + '/dist/';

var webpackConfig = merge(baseWebpackConfig, {
	devtool: sysInfo.devtool,
	output: {
		path: utils.resolveRootPath('dist/'),
		publicPath: publicPath,
		filename: '[name].js',
		chunkFilename: '[name].js' // 设置require.ensure 文件名
	},
	plugins: require('./webpack_cfg/plugins').info('pro')

})

// 开启 gzip 压缩，项目如果使用 非 webpack 作为服务器就需要关闭
if ( sysInfo.productionGzip ) {
	var CompressionWebpackPlugin = require('compression-webpack-plugin')

	webpackConfig.plugins.push(
		new CompressionWebpackPlugin({
			asset: '[path].gz[query]',
			algorithm: 'gzip',
			test: new RegExp(
				'\\.(' +
				sysInfo.productionGzipExtensions.join('|') +
				')$'
			),
			threshold: 10240,
			minRatio: 0.8
		})
	)
}

false && webpackConfig.plugins.push(new BundleAnalyzerPlugin({
	  // Can be `server`, `static` or `disabled`.
  // In `server` mode analyzer will start HTTP server to show bundle report.
  // In `static` mode single HTML file with bundle report will be generated.
  // In `disabled` mode you can use this plugin to just generate Webpack Stats JSON file by setting `generateStatsFile` to `true`.
  analyzerMode: 'static',
  // Port that will be used in `server` mode to start HTTP server.
  // analyzerPort: 8888,
  // Path to bundle report file that will be generated in `static` mode.
  // Relative to bundles output directory.
  reportFilename: 'report.html',
  // Automatically open report in default browser
  openAnalyzer: true,
  // If `true`, Webpack Stats JSON file will be generated in bundles output directory
  generateStatsFile: false,
  // Name of Webpack Stats JSON file that will be generated if `generateStatsFile` is `true`.
  // Relative to bundles output directory.
  statsFilename: 'stats.json',
  // Options for `stats.toJson()` method.
  // For example you can exclude sources of your modules from stats file with `source: false` option.
  // See more options here: https://github.com/webpack/webpack/blob/webpack-1/lib/Stats.js#L21
  statsOptions: null
}))

// console.log('prob webpack config read. gzip:', sysInfo.productionGzip)
module.exports = webpackConfig
