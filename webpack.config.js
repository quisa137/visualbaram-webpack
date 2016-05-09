var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  target:"web",
  entry: [
    'webpack-dev-server/client?http://localhost:5000',
    'webpack/hot/dev-server',
    './web/main.jsx'
  ],
  output: { path: __dirname, filename: 'web/bundle.js',publicPath:'/web/'},
  resolve: {
    extensions: ['', '.js']
  },
  devtool: 'eval-source-map',
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        /*loaders: ['babel','babel-loader'],*/
        loader:'babel-loader',
        /*include: path.join(__dirname,'scripts'),*/
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /.json?$/,
        loader: 'json-loader',
        query: {
          mimetype:'application/json'
        }
      }
    ]
  },
  plugins:[
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.ProvidePlugin({
      'Promise': 'bluebird', // Thanks Aaron (https://gist.github.com/Couto/b29676dd1ab8714a818f#gistcomment-1584602)
      'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
    }),
    new HtmlWebpackPlugin({
      template: path.resolve('./web/', 'index.html'),
      webpackDevServer: '/webpack-dev-server.js'
    })
  ]
};
