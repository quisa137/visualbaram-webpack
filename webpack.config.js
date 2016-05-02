var path = require('path');
var webpack = require('webpack');

module.exports = {
  target:"web",
  entry: './web/main.js',
  output: { path: __dirname, filename: 'web/bundle.js' },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
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
    new webpack.ProvidePlugin({
      'Promise': 'bluebird', // Thanks Aaron (https://gist.github.com/Couto/b29676dd1ab8714a818f#gistcomment-1584602)
      'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
    }),
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve('./', 'index.html'),
      webpackDevServer: '/webpack-dev-server.js'
    })
  ]
};
