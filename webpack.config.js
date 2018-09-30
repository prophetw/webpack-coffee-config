const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports={
  "mode": "development",
  "entry": {
    app: path.resolve(__dirname,'src/index.coffee'),
    print: path.resolve(__dirname,'src/print.coffee'),
  },
  "output": {
    "path": path.resolve(__dirname,'dist'),
    "filename": "[name].bundle.js"
  },
  "devtool": "source-map",
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
    new HtmlWebpackPlugin({title: 'Output Management'})
  ]
};