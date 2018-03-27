var path = require("path");
module.exports = {
	entry: {
	  app:['./src/entry1'] // Your app?s entry point
	},
	output: {
		// path: path.resolve(__dirname, "dist"),
		publicPath: "/dist/",
		filename: "bundle.js"
	},
	module:{
		loaders:[
			{test: /\.js$/, exclude: /node_modules/, loader: "babel"},
			{test:/\.(tpl|ejs)$/,loader: 'ejs'},
			{test:/\.css$/,loader:"style!css"},
			{test:/\.(jpg|png)$/,loader:"url?limit=8192"}
		]
	},
	devServer:{
		inline:true,
		hot:true
	}
	
};