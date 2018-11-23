const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
// const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  // devtool: 'source-map',
  output: {
    "path": path.resolve(__dirname,'dist'),
    "filename": "[name].[contenthash].js",
    publicPath: '/'
  },
  plugins: [
  ]
});