var path = require("path");
var utils = require('./build/utils')

//获取文件夹下的所有文件
var entryFiles={};
utils.getFiles.getFileList("./src/", /entry_/).map( (n,i)=>{
	// console.log(n,i)
	entryFiles[n.filename]=n.fullpath;
});
// console.log( entryFiles );

module.exports = {
	//演示单入口文件
	entry: entryFiles,
	output: {
		//打包输出的路径
		path: path.join(__dirname, 'out'),
		
		//打包后的名字
		filename: '[name]',
		
		//html引用路径，在这里是本地地址
		publicPath: "./out/",
		
		"libraryTarget":"global"
	},
	//开启 map
	devtool: "source-map",
	
	// libraryTarget: ""
};