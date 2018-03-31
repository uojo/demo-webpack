var webpack = require('webpack');
var path = require("path");
var entryFiles = require('./build/entry_files')


// 参数：https://doc.webpack-china.org/configuration/
module.exports = {
	//演示单入口文件
	entry: entryFiles,
	output: {
		//打包输出的路径
		path: path.join(__dirname, 'out'),
		
		//打包后的名字
		filename: '[name]',
		
		//html引用路径，在这里是本地地址
		publicPath: "/out/",
		
		library: "MyLibrary",
		// 可选：jsonp、window、global、var、this、commonjs……
		libraryTarget:"umd"
	},
	devServer:{
		"contentBase": "./src/html",
		"port": 3000,
		"hot": true, // 提供 HMR 功能
		before(app){
			app.get('/some/path', function(req, res) {
				res.json({ custom: 'response' });
			});
		}
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()  //提供对接 HMR 功能的接口
	]
	// target:"node"
	
	//开启 map
	// devtool: "source-map",
	
	// libraryTarget: "window"
};