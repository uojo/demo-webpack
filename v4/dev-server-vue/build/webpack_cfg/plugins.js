var webpack = require('webpack')
var CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
// extract-text-webpack-plugin：分离 css、js
var ExtractTextPlugin = require('extract-text-webpack-plugin')
// var AutoDllPlugin = require('autodll-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin')
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
var UglifyJsPlugin = require('uglifyjs-webpack-plugin')
// 获取当前环境下的系统配置信息
var sysInfo = require('../sys-env').info, curSysInfo = sysInfo()
var dll_entry = require('./dll_entry')
var utils = require('../utils')

console.log( 'curSysInfo', curSysInfo );
// console.log( 'plugins ~ webpack_config :', webpack_config );

function info(name){
	console.log( 'plugins ~ :', name );
	
	var rlts = [];
	
	// 基础插件配置
	if(name === 'base' ){
		var devOps = sysInfo('development');
		var proOps = sysInfo('production');
		
		// 将环境变量注入到项目中
		var processEnvOptions = {
			NODE_ENV : "'"+ process.env.NODE_ENV +"'",
			// PUBLISH_PATH : "'"+ webpack_config.publicPath +"'",
			DEV_PUBLISH_PATH : "'"+ devOps.publicPath +"'",
			PRO_PUBLISH_PATH : "'"+ proOps.publicPath +"'",
			DEV_HOST : "'"+ curSysInfo.hostname + ":" + curSysInfo.port +"'",
		}
		rlts.push(
			new webpack.DefinePlugin({
				'process.env': processEnvOptions
			})
		);
		
		// 输出到文件中
		rlts.push(
			new ExtractTextPlugin('layout.min.css')
		);
		
	}
	
	if(name === 'dev' ){
		rlts = [
			new webpack.HotModuleReplacementPlugin(),

			// 暂不支持 webpack 4
			/* new AutoDllPlugin({
				inject: true, // will inject the DLL bundles to index.html
				filename: '[name].js',
				entry: {
					vendor: dll_entry
				}
			}), */

			// 当使用配置 devServer 字段时，
			new HtmlWebpackPlugin({
				// 生成文件 {output.path}/index.html
				filename: 'index.html',
				template: utils.resolveRootPath('www/index.tpl'),
				// 添加时间戳
				hash:true,
				// 把相应的资源注入到模板页中
				inject:true
			}),

			/* new webpack.LoaderOptionsPlugin({
				debug: true,
				minimize: false
			}), */
			
			// new webpack.NoEmitOnErrorsPlugin(),
			// new FriendlyErrorsPlugin()
		]
	}

	return rlts;
}

module.exports = {
	'info':info,

}
