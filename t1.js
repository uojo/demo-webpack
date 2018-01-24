var utils = require('./build/utils')

//获取文件夹下的所有文件
var entryFiles = utils.getFiles.getFileList("./src/", /entry_/).map( (n,i)=>{
	// console.log(n,i)
	return n.fullpath;
})
console.log( entryFiles );