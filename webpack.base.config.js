/**
 * wang.yue 创建于 2017/9/5.
 * webpack API:https://webpack.js.org/configuration/
 */
const webpack = require('webpack');
const path = require('path');
const utils = require('./utils');
const config = require('./config');
const ExtractTextPlugin = require('extract-text-webpack-plugin'); //css单独打包
const isProduction = process.env.NODE_ENV === 'production'
module.exports = {
  entry: config.entry,
  output: {
    path: path.resolve(__dirname, "dist"),//必须为绝对路径
    filename: "[name]/[name].js",//编译后的文件名
    publicPath: isProduction
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', 'json', '.vue'], //import 后缀名自动补全
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': path.resolve(__dirname, "src")
    }
  },
  module: {
    rules: [{
      test: /\.js$/,
      include: [path.resolve(__dirname, "src")],
      loader: "babel-loader",
      options: {
        presets: ['es2015']
      }
    }, {
      test: /\.vue$/,
      loader: 'vue-loader',
      options: {
        loaders: utils.cssLoaders({
          sourceMap: isProduction
            ? config.build.productionSourceMap
            : config.dev.cssSourceMap,
          extract: isProduction
        }),
        transformToRequire: {
          video: 'src',
          source: 'src',
          img: 'src',
          image: 'xlink:href'
        }
      },
    }, {
      test: /\.css$/,
      use: ExtractTextPlugin.extract(['style-loader', 'css-loader', 'postcss-loader']),
    }, {
      test: /\.less$/,
      use: ExtractTextPlugin.extract({
        use: [{
          loader: "css-loader"
        }, {
          loader: "less-loader"
        }]
      })
    }, {
      test: /\.html$/,
      use: {
        loader: "html-loader",
        options: {
          minimize: true
        }
      }
    },{
      test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
      loader: 'url-loader',
      options: {
        limit: 10000,
        name: 'img/[name].[hash:7].[ext]'
      }
    },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'media/[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'fonts/[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.html$/,
        use: {
          loader: "html-loader",
          options: {
            minimize: isProduction
          }
        }
      }
    ]
  }
};