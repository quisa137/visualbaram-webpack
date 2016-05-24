/*eslint jsx-quotes: ["error", "prefer-single"]*/
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var publicPath = '/';
module.exports = {
    cache:true,
    debug:true,
    name: 'browser',
    target:'web',
    entry: [
      "bootstrap-webpack!./bootstrap.config.js",
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
      modulesDirectories: ['web_modules', 'node_modules', 'bower_components'],
      extensions: ['', '.js', '.jsx','.scss','.css']
    },
    devtool: process.env.NODE_ENV === 'production'?'eval-source-map':'source-map',
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
    },
    module: {
      loaders: [
        {
          test: /\.css$/,
          exclude: /node_modules/,
          loaders: [
            // 'autoprefixer?browsers=last 2 version',
            'style',
            'css'
            // ,'style-loader!css-loader'
          ]
        },
        {
          test: /\.scss$/,
          exclude: /node_modules/,
          loader:'sass?' + ['outputStyle=nested'].join('&'),
        },
        {
          test: /.js[x]?$/,
          /*loaders: ['babel','babel-loader'],*/
          loader:'babel-loader',
          include: path.join(__dirname,'web','src'),
          exclude: /(node_modules|bower_components)/,
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
        },
        {
          test: /\.less$/,
          loaders: ['style', 'css', 'less']
        },
        {
          test: /\.woff$/,
          loader: "url-loader?limit=10000&mimetype=application/font-woff&name=[path][name].[ext]"
        },
        {
          test: /\.woff2$/,
          loader: "url-loader?limit=10000&mimetype=application/font-woff2&name=[path][name].[ext]"
        },
        {
          test: /\.(svg|ttf|eot|png|gif|jpg)([\?]?.*)$/,
          loader: "file-loader?name=[name].[ext]"
        }
      ]
    },
    plugins:process.env.NODE_ENV === 'production'?[
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
      }),
      new webpack.ProvidePlugin({
        '$':'jquery',
        'jQuery':'jquery',
        'Promise': 'bluebird'
      }),

    ] : [
      //development mode
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin(),

      // new BowerWebpackPlugin({
      //     modulesDirectories: [path.join(__dirname,"/bower_components")],
      //     manifestFiles:      ["bower.json",".bower.json"],
      //     includes:           /.*/,
      //     excludes:           ['debug',/.*\.less/],
      //     searchResolveModulesDirectories: false
      // }),
      new webpack.ProvidePlugin({
        '$':'jquery',
        'jQuery':'jquery',
        'Promise': 'bluebird'
      }),
      new HtmlWebpackPlugin({
        template: path.resolve('./web/', 'index.html'),
      }),
      /*
      new webpack.ResolverPlugin(
        new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin('bower.json', ['main'])
      )
      */
    ]
  };
