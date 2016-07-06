var path = require("path");
module.exports = {
	//��ʾ������ļ�
	// entry:path.join(__dirname,"src/entry1.js"),
	entry: {
		"page1":"./src/entry1.js",
		"page2":"./src/entry2.js"
	},
	output: {
		//��������·��
		path: path.join(__dirname, 'out'),
		//����������
		filename: '[name].js',
		//html����·�����������Ǳ��ص�ַ
		publicPath: "./out/"
	},
	module:{
		loaders:[
			// {test:/\.js/,loader:"babel"},
			// {test: /\.(tpl|ejs)$/, loader: 'ejs'},
			// {test:/\.css$/,loader:"style!css"},
			{test:/\.(jpg|png)$/,loader:"url?limit=8192"}
		]
	}
};