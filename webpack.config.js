var path = require("path");
module.exports = {
	//��ʾ������ļ�
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
	}
};