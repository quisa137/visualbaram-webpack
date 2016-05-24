/* eslint-disable no-var, strict */
/*eslint jsx-quotes: ["error", "prefer-single"]*/
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
var path = require('path');

new WebpackDevServer(webpack(config), {
  contentBase:path.join(__dirname,'web'),
  path:path.join(__dirname,'web'),
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  stats: {colors: true},
  /*
  proxy:{
    '/api/es/*':{
      target:'http://192.168.0.124:9200',
      secure:false,
      rewrite:function(req) {
        req.url = req.url.replace(/^\/api\/es/,'');
      }
    }
  }
  */
  /*lazy: true*/
}).listen(5000, 'localhost', function (err) {
    if (err) {
      console.log(err);
    }
    console.log('Listening at localhost:5000');
  });
