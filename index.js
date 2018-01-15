var webpack = require("webpack");
var webpackConfig = require("./webpack.config");
var commander = require("commander");
commander
.option('-c, --create', '打包模块', "")
.option('-w, --watch', '监听目录变动并自动打包', "")
.option('-l, --lib [name]', '', "")
.parse(process.argv);

// console.log(webpackConfig);

function compiler(ops){
	var _conf = Object.assign({},webpackConfig,ops);
	console.log(_conf)
	var _compiler = webpack( _conf );
	
	_compiler.run((err,status)=>{
		console.log(err)
	})	
}


// console.log(commander.create);
if( commander.create ){
	compiler();
}

if( commander.watch ){
	var compiler = webpack(webpackConfig);
	var watching = compiler.watch({
		/* watchOptions */
	}, (err, stats) => {
		// 在这里打印 watch/build 结果...
		console.log(stats);
	});

}

if( commander.lib ){
	compiler({
		// "libraryTarget":commander.lib
	})
	
}