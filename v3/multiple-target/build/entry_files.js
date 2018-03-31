var utils = require('./build/utils')

var entryFiles={};
//获取文件夹下的所有文件
var entryFiles = utils.getFiles.getFileList("./src/", /entry_/).map( (n,i)=>{
	// console.log(n,i)
	entryFiles[n.filename]=n.fullpath;
	// return n.fullpath;
})
// console.log( entryFiles );

module.exports = entryFiles;