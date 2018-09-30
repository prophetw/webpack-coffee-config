const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports={
  "mode": "development",
  "entry": path.resolve(__dirname,'src/index.coffee'),
  "output": {
    "path": path.resolve(__dirname,'dist'),
    "filename": "main.js"
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
      }
    ]
  },
  "plugins": [new MiniCssExtractPlugin({filename: "[name]-[contenthash:8].css"})]
};