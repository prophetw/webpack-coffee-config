const path = require("path");
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');

module.exports = merge(common, {
  "mode": "development",
  "devtool": "inline-source-map",
  "output": {
    "path": path.resolve(__dirname,'dist'),
    "filename": "[name].bundle.js",
    publicPath: '/'
  },
  "plugins": [
    new webpack.HotModuleReplacementPlugin()
  ]
});

