'use strict'
const merge = require('webpack-merge')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const baseWebpackConfig = require('./webpack.base.config')
const config = require('./config')
const utils = require('./utils')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({
      sourceMap: config.build.productionSourceMap,
      extract: true
    })
  },
  devtool: config.build.productionSourceMap ? '#source-map' : false,
  plugins: [
    //定义生产环境
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new ExtractTextPlugin({
      filename: "[name]/[name].[contenthash].css"
    }),
    new CleanWebpackPlugin(
      ['dist'],　 //匹配删除的文件
      {
        root: __dirname,  //根目录
        verbose:  true,  //开启在控制台输出信息
        dry: false    //启用删除文件
      }),
    // Compress extracted CSS. We are using this plugin so that possible
    // duplicated CSS from different components can be deduped.
    new OptimizeCSSPlugin({
      cssProcessorOptions: {
        safe: true
      }
    }),
    //提取出公共模块并添加到html
    new webpack.optimize.CommonsChunkPlugin({"name": "common", "filename": "common/common.js"}),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: true
      },
      sourceMap: true
    })
  ].concat(config.plugins)
})