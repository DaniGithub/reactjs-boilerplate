var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var BUILD_DIR = path.resolve(__dirname, 'dist');
var APP_DIR = path.resolve(__dirname, 'app');

var config = {
  entry: [APP_DIR + '/index.jsx', APP_DIR + '/scss/main.scss'],
  output: {
    path: BUILD_DIR,
    filename: 'bunduru.js',
    publicPath: '/'
  },
  devServer: {
    contentBase: 'dist'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: APP_DIR,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        include: APP_DIR,
        loader: ExtractTextPlugin.extract(
          'css-loader?sourceMap!sass-loader?sourceMap'
        )
      }      
    ]
  },
  plugins: [
    new ExtractTextPlugin('css/main.css')
  ]
};

module.exports = config;