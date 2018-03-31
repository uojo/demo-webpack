var webpack = require("webpack");
var webpackConfig = require("./webpack.config");
var merge = require('webpack-merge')
var commander = require("commander");

commander
.option('-b, --build', '打包模块', "")
.option('-w, --watch', '监听目录变动并自动打包', "")
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

// console.log(commander.build);
if( commander.build ){
	compiler();
}

if( commander.watch ){
	var compiler = webpack(webpackConfig);
	var watching = compiler.watch({
		/* 
		watchOptions
		https://doc.webpack-china.org/configuration/watch/#src/components/Sidebar/Sidebar.jsx
		*/
		aggregateTimeout: 300, // 默认值，change的感知时间间隔
		ignored: /node_modules/,
		// 如果监听没生效，试试这个选项吧。Watch 在 NFS 和 VirtualBox 机器上不适用。
		// poll:1000
		
	}, (err, stats) => {
		// 在这里打印 watch/build 结果...
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