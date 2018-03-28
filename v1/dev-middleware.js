var express = require('express');
var webpack = require('webpack');

webpackDevMiddleware = require('webpack-dev-middleware'),
webpackHotMiddleware = require('webpack-hot-middleware'),
webpackDevConfig = require('./webpack.config.hot.js');

var compiler = webpack(webpackDevConfig);

var app = express();
// attach to the compiler & the server
app.use(webpackDevMiddleware(compiler, {
  // public path should be the same with webpack config
  publicPath: webpackDevConfig.output.publicPath,
  noInfo: true,
  stats: {
    colors: true
  }
}));
app.use(webpackHotMiddleware(compiler,{
  // log:true,
  heartbeat: 2000
}));

/* app.use((req,res)=>{

  res.send('hello');
}) */
var hostname = '127.0.0.1', port = 3000;
app.listen(port, function(err) {
  if (err) {
    console.log(err)
    return
  }
  var uri = 'http://'+ hostname + ':' + port
  
  console.log('Listening at ' + uri + '\n')

})