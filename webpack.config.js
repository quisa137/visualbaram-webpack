/*eslint jsx-quotes: ["error", "prefer-single"]*/
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var publicPath = '/';
module.exports = {
    name: 'browser',
    target:'web',
    entry: [
      'webpack-dev-server/client?http://localhost:5000',
      'webpack/hot/dev-server',
      './web/src/main.jsx'
    ],
    output: {
      path: path.join(__dirname, 'web'),
      filename: 'bundle.js',
      publicPath:publicPath
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
    devtool: 'eval-source-map',
    devServer: {
      contentBase:path.join(__dirname,'web'),
      path:path.join(__dirname,'web'),
      publicPath: publicPath,
      hot: true,
      historyApiFallback: true,
      stats: {
        colors: true,
        reasons: true
      },
      proxy:{
        '/api/es/*':{
          target:'http://192.168.0.124:9200',
          secure:false,
          rewrite:function(req) {
            req.url = req.url.replace(/^\/api\/es/,'');
          }
        }
      }
    },
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
    plugins:process.env.NODE_ENV === 'production' ?[
      //production mode
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.OccurrenceOrderPlugin(),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      }),
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify('production')
        }
      })
    ] : [
      //development mode
      new webpack.HotModuleReplacementPlugin(),
      new webpack.ProvidePlugin({
        'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch',
        'window.fetch':'imports?this=>global!exports?global.fetch!whatwg-fetch'
      }),
      new webpack.ProvidePlugin({
        'Promise': 'bluebird',
      }),
      new webpack.NoErrorsPlugin(),
      /*
      new HtmlWebpackPlugin({
        template: path.resolve('./web/', 'index.html'),
        webpackDevServer: '/webpack-dev-server.js'
      }),
      new webpack.ResolverPlugin(
        new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin('bower.json', ['main'])
      )
      */
    ]
  };
