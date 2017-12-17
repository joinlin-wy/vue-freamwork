'use strict'
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.config');
const config = require('./config');
const utils = require('./utils');
module.exports = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap })
  },
  devtool: '#cheap-module-eval-source-map',
  plugins: [
    //定义为开发环境
    new webpack.DefinePlugin({
      'process.env': {NODE_ENV: '"development"'}
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.CommonsChunkPlugin({"name": "common", "filename": "common.bundle.js"}),//提取出公共模块并添加到html
  ].concat(config.plugins)
});