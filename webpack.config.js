var path = require("path");
module.exports = {
	//演示单入口文件
	entry: {
		"page1":"./src/entry1.js",
		"page2":"./src/entry2.js"
	},
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "[name].js"
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