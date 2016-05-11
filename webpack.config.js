/*eslint jsx-quotes: ["error", "prefer-single"]*/
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    name: 'browser',
    target:'web',
    entry: [
      'webpack-dev-server/client?http://localhost:5000',
      'webpack/hot/dev-server',
      './web/src/main.js'
    ],
    output: {
      path: __dirname,
      filename: 'bundle.js',
      publicPath:'/'
    },
    'resolveLoader': {
      root: path.join(__dirname, 'node_modules')
    },
    resolve: {
      /*
      alias:{
        'fetch':'imports?this=>global!exports?global.fetch!whatwg-fetch'
      },
      */
      modulesDirectories: ['web_modules', 'node_modules', 'bower_components'],
      extensions: ['', '.js', '.jsx','.scss']
    },
   stats: {
        colors: true,
        reasons: true,
    },
    devtool: 'eval-source-map',
    module: {
      loaders: [
        {
          test: /\.s?css$/,
          exclude: /node_modules/,
          loaders: [
              'style',
              'css',
              'autoprefixer?browsers=last 2 version',
              'sass?' + ['outputStyle=nested'].join('&')
          ]
        },
        {
          test: /.jsx?$/,
          /*loaders: ['babel','babel-loader'],*/
          loader:'babel-loader',
          include: path.join(__dirname,'web','src'),
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
        'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch',
        'window.fetch':'imports?this=>global!exports?global.fetch!whatwg-fetch'
      }),
      new webpack.ProvidePlugin({
        'Promise': 'bluebird',
      }),
      new webpack.NoErrorsPlugin(),
      new HtmlWebpackPlugin({
        template: path.resolve('./web/', 'index.html'),
        webpackDevServer: '/webpack-dev-server.js'
      }),
      /*
      new webpack.ResolverPlugin(
        new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin('bower.json', ['main'])
      )
      */
    ]
  };
