
//获取项目工程里的图片
var fs = require('fs'); //引用文件系统模块
// var image = require("imageinfo"); //引用imageinfo模块

function readFileList(path, filesList, filter) {
	var files = fs.readdirSync(path);
	files.forEach(function (it, index) {
		var stat = fs.statSync(path + it);
		if (stat.isDirectory()) {
			//递归读取文件
			readFileList(path + it + "/", filesList, filter)
		} else {

			var obj = {}; //定义一个对象存放文件的路径和名字
			obj.path = path; //路径
			obj.filename = it //名字
			obj.fullpath = path+it //名字

				if (filter && filter.test( obj.fullpath )) {
					filesList.push(obj);
				} else if (filter === undefined) {
					filesList.push(obj);
				}

		}

	})
}

exports.getFiles = {
	//获取文件夹下的所有文件
	getFileList: function (path, filter) {
		var filesList = [];
		readFileList(path, filesList, filter);
		return filesList;
	},
	//获取文件夹下的所有图片
	getImageFiles: function (path) {
		var imageList = [];

		this.getFileList(path).forEach((item) => {
			var ms = image(fs.readFileSync(item.path + item.filename));

			ms.mimeType && (imageList.push(item.filename))
		});
		return imageList;

	}
};

//获取文件夹下的所有图片
// getFiles.getImageFiles("./public/");
//获取文件夹下的所有文件
// getFiles.getFileList("./public/");
