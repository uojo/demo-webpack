var webpack = require('webpack')
var path = require('path')
var merge = require('webpack-merge')
var sysInfo = require('./build/sys-env').info('development')
var baseWebpackConfig = require('./build/webpack.base.conf')
var utils = require('./build/utils');

module.exports = merge(baseWebpackConfig, {
	mode: 'development',
	devtool: sysInfo.devtool,
	output: {
		path: sysInfo.assetsOut,
		publicPath: sysInfo.assetsPublicPath,
		filename: '[name].js',
		chunkFilename: 'dist/[name].js' // 设置require.ensure 文件名
	},
	plugins: require('./build/webpack_cfg/plugins').info('dev'),
	devServer:{
		"contentBase": utils.resolveRootPath('www'),
		"port": 3000,
		"hot": true, // 提供 HMR 功能
		before(app){

			// 自定义路由
			app.get('/some/path', function(req, res) {
				res.json({ custom: 'response' });
			});

			// 接口模拟数据
			require('express-data-server')(app,{
				reqPath:'api',
				basePath: __dirname,
				dataPath: './static/api/',
			});

		}
	},
})
