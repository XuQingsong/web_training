var babelpolyfill = require("babel-polyfill")
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
 
module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
  },
  // output: {
  // //  filename: 'main.js',
  //  filename: 'bundle.js',
  //   path: path.resolve(__dirname, 'dist'),
  // },
  plugins: [
    new HtmlWebpackPlugin({
      title: '管理输出',
      template: 'index.ejs',
      inject: 'head'
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          }
        }
      },
    ],
  },
};
