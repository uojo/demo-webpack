var path = require("path");
module.exports = {
	//��ʾ�������ļ�
	entry: {
	  // 'webpack-dev-server/client?http://127.0.0.1:8080', // WebpackDevServer host and port
	  // 'webpack/hot/only-dev-server',
	  app:['./src/entry1'] // Your app?s entry point
	},
	output: {
		path: path.resolve(__dirname, "dist"),
		// publicPath: "/dist",
		filename: "bundle.js"
	},
	module:{
		loaders:[
			// {test:/\.js/,loader:"babel"},
			{test:/\.(tpl|ejs)$/,loader: 'ejs'},
			{test:/\.css$/,loader:"style!css"},
			{test:/\.(jpg|png)$/,loader:"url?limit=8192"}
		]
	}
};