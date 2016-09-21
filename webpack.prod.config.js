'use strict';

var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    index: './js/index.js'
  },
  output: {
    path: __dirname,
    filename: '[hash].[name].bundle.js',
    chunkFilename: '[hash].[id].bundle.js',
  },
  module: {
    loaders: [
      {
        test: /(\.scss|\.css)$/,
        loader: ExtractTextPlugin.extract('style!css!postcss!less!', 'css?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss!'),
      },
      {
        test: /\.less$/,
        loader: 'style!css!less'
      },
      {
        test: /\.(js|jsx)$/,
        loader: 'react-hot!babel',
        exclude: /(node_modules|bower_components)/,
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)\w*/,
        loader: 'file'
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  },
  postcss: function() {
    return [
      autoprefixer({browsers: ['last 5 versions']})
    ];
  },
  resolve: {
    root: [
      path.resolve(__dirname),
      path.resolve(__dirname, 'js', 'fw', 'lib')
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new ExtractTextPlugin('bundle.css', {allChunks: true}),
    new webpack.optimize.CommonsChunkPlugin('[hash].common.bundle.js'),
    new HtmlWebpackPlugin({
      title: 'generator-react-ui',
      description: 'A gh-page for generator-react-ui',
      username: 'Kevin Coxe',
      filename: 'index.html',
      inject: 'body',
      template: 'index.html_vm',
      favicon: 'img/favicon.ico',
      hash: false
    })
  ]
};
