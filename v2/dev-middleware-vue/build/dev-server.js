var sysInfo = require('./sys-env').info('development')
var express = require('express')
var webpack = require('webpack')
var compression = require('compression')
var webpackConfig = require('./webpack.dev.conf')

var app = express()

// 启用压缩
app.use(compression())

// 自定义 express 路由
app.get('/null', function (req, res) {
	res.send('null');
});

app.use("/dist",express.static('./dist'));

// serve pure static assets
// app.use(express.static('./src'));

var compiler = webpack(webpackConfig)

var devMiddleware = require('webpack-dev-middleware')(compiler, {
	publicPath: webpackConfig.output.publicPath,
	stats: {
		colors: true,
		chunks: false
	}
})

var hotMiddleware = require('webpack-hot-middleware')(compiler)

// force page reload when html-webpack-plugin template changes
/* compiler.plugin('compilation', function(compilation) {
	compilation.plugin('html-webpack-plugin-after-emit', function(data, cb) {
		hotMiddleware.publish({
			action: 'reload'
		})
		cb()
	})
}) */

// serve webpack bundle output
app.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)

module.exports = app.listen(sysInfo.port, function(err) {
	if (err) {
		console.log(err)
		return
	}
	var uri = 'http://'+ sysInfo.hostname + ':' + sysInfo.port
	
	console.log('Listening at ' + uri + '\n')
	
})