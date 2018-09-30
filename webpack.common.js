const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: path.resolve(__dirname,'src/index.coffee'),
    polyfills: './src/polyfills.coffee',
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
           test: /[\\/]node_modules[\\/]/,
           name: 'vendors',
           chunks: 'all'
        }
      }
    }
  },
  "devServer": {
    contentBase: './dist',
    hot:true
  },
  "module": {
    "rules": [
      {
        "test": /\.coffee$/,
        "exclude": /node_modules/,
        "use": "coffee-loader"
      },
      {
        "enforce": "pre",
        "test": /\.(js|jsx)$/,
        "exclude": /node_modules/,
        // "use": "eslint-loader"
      },
      {
        "test": /\.scss$/,
        "use": [
          "style-loader",
          "css-loader",
          "sass-loader"
        ]
      },
      {
        "test": /\.(png|svg|jpg|gif)$/,
        "use": [
          'file-loader'
        ]
      },
      {
        "test": /\.(woff|woff2|eot|ttf|otf)$/,
        "use": [
          'file-loader'
        ]
      },
      {
        "test": /\.(csv|tsv)$/,
        "use": [
          'csv-loader'
        ]
      },
      {
        "test": /\.xml$/,
        "use": [
          'xml-loader'
        ]
      },
    ]
  },
  "plugins": [
    new CleanWebpackPlugin(['dist']),
    new MiniCssExtractPlugin({filename: "[name]-[contenthash:8].css"}),
    new HtmlWebpackPlugin({title: 'Cool Man'}),
    new webpack.HashedModuleIdsPlugin(),
  ]
};