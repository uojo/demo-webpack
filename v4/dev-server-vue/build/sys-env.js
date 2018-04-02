var utils = require('./utils')
var alias = {
	'development':'dev',
	'production':'build',
};
var conf = {
	build: {
		env: {
			NODE_ENV: "production"
		},
		index: utils.resolveRootPath('dist/index.html'),
		assetsOut: utils.resolveRootPath('dist'),
		assetsSubDirectory: 'static',
		assetsPublicPath: '/',
		devtool:'#source-map',
		publicPath:'//assets.dxycdn.com/gitrepo/projectName',
		// Gzip off by default as many popular static hosts such as
		// Surge or Netlify already gzip all static assets for you.
		// Before setting to `true`, make sure to:
		// npm install --save-dev compression-webpack-plugin
		productionGzip: false,
		productionGzipExtensions: ['js', 'css']
	},
	dev: {
		env: {
			NODE_ENV: "development"
		},
		hostname: '127.0.0.1',
		port: process.env.PORT || 3000,
		assetsOut: utils.resolveRootPath('dist'),
		assetsSubDirectory: 'static',
		assetsPublicPath: '/',
		proxyTable: {},
		publicPath:'/',
		// eval-source-map is faster for development
		// https://github.com/webpack/docs/wiki/configuration#devtool
		// devtool: 'source-map',
		// devtool: 'cheap-eval-source-map', // 显示行号会有偏差
		devtool:'inline-source-map',

		// CSS Sourcemaps off by default because relative paths are "buggy"
		// with this option, according to the CSS-Loader README
		// (https://github.com/webpack/css-loader#sourcemaps)
		// In our experience, they generally work as expected,
		// just be aware of this issue when enabling this option.
		cssSourceMap: false
	}
};

module.exports = {
	info:function( env ){
		var rlt;
		
		if(!env && process.env.NODE_ENV ){
			env = process.env.NODE_ENV
		}
		
		if( env && !process.env.NODE_ENV ){
			process.env.NODE_ENV  = env
		}
		
		console.log( 'info env ~', env );
		
		if( alias[env] ){
			rlt = Object.assign( {}, conf[alias[env]] );
		}
		
		return rlt;
	}
}
