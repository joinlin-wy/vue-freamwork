
const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.config');
const ExtractTextPlugin = require('extract-text-webpack-plugin'); //css单独打包
const HtmlWebpackPlugin = require('html-webpack-plugin'); //生成html
module.exports = merge(baseWebpackConfig, {
  devtool: 'source-map',
  plugins: [
    //定义为开发环境
    new webpack.DefinePlugin({
      'process.env': {NODE_ENV: '"development"'}
    }),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: '/photo/index.html', //生成的html存放路径
      template: './src/index.html', //html模板路径
      hash: false,
    }),
    
    new ExtractTextPlugin({
      filename: "[name].[contenthash].css",
      disable: true
    }),
    new webpack.optimize.CommonsChunkPlugin({"name": "common", "filename": "common.bundle.js"}),//提取出公共模块并添加到html
  ]
});