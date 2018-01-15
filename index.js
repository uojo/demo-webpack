var webpack = require("webpack");
var webpackConfig = require("./webpack.config");
var merge = require('webpack-merge')
var commander = require("commander");
commander
.option('-c, --create', '���ģ��', "")
.option('-w, --watch', '����Ŀ¼�䶯���Զ����', "")
.option('-l, --lib [name]', '', "")
.parse(process.argv);

// console.log(webpackConfig);

function compiler(ops){
	var _conf = merge(webpackConfig,ops);
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
		// �������ӡ watch/build ���...
		console.log(stats);
	});

}

if( commander.lib ){
	compiler({
		"output":{
			libraryTarget:commander.lib
		}
	})
	
}