var path = require("path");
module.exports = {
	//演示单入口文件
	entry: {
		"page1":"./src/entry1.js",
		"page2":"./src/entry2.js"
	},
	output: {
		//打包输出的路径
		path: path.join(__dirname, 'out'),
		//打包后的名字
		filename: '[name].js',
		//html引用路径，在这里是本地地址
		publicPath: "./out/"
	}
};