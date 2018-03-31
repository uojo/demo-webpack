var webpack = require('webpack')
var dll_entry = require('./webpack_cfg/dll_entry')

var sysInfo = require('./sys-env').info('production')

module.exports = {
  devtool: 'cheap-source-map',
  output: {
    path: sysInfo.assetsRoot,
    publicPath: sysInfo.assetsPublicPath,
    filename: '[name].js',
    library: '[name]_library'
  },
  entry:{
    'vendor': dll_entry
  },
  plugins: require('./webpack_cfg/plugins').info('dll')
}

console.log('dev webpack config read')
