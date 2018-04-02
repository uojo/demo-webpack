var sysInfo = require('./sys-env').info('development')
var webpack = require('webpack')
var webpackConfig = require('./webpack.dev.conf')

var compiler = webpack(webpackConfig)