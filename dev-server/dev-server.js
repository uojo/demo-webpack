var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./dev-webpack.cfg');

new WebpackDevServer(webpack(config), {
	publicPath: config.output.publicPath,
	// hot: true,
	// noInfo: false,
	// historyApiFallback: true,
	// inline: true,
	hot:true
	
}).listen(3000, '127.0.0.1', function (err, result) {
	if (err) {
		console.log(err);
	}
	console.log('Listening at localhost:3000');
	
});