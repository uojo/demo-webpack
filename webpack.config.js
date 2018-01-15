var path = require("path");
var utils = require('./build/utils')

//��ȡ�ļ����µ������ļ�
var entryFiles={};
utils.getFiles.getFileList("./src/", /entry_/).map( (n,i)=>{
	// console.log(n,i)
	entryFiles[n.filename]=n.fullpath;
});
// console.log( entryFiles );

module.exports = {
	//��ʾ������ļ�
	entry: entryFiles,
	output: {
		//��������·��
		path: path.join(__dirname, 'out'),
		
		//����������
		filename: '[name]',
		
		//html����·�����������Ǳ��ص�ַ
		publicPath: "./out/",
		
		"libraryTarget":"global"
	},
	//���� map
	devtool: "source-map",
	
	// libraryTarget: ""
};