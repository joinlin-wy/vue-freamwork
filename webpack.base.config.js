'use strict'
const path = require('path')
const utils = require('./utils')
const config = require('./config')
const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
    entry: config.entry,
    output: {
        path: config.build.assetsRoot,//必须为绝对路径
        filename: "[name]/[name].js",//编译后的文件名
        publicPath: isProduction
            ? config.build.assetsPublicPath
            : config.dev.assetsPublicPath
    },
    resolve: {
        extensions: ['.js', 'json', '.vue'], //import 后缀名自动补全
        alias: {//import时的别名
            'vue$': 'vue/dist/vue.esm.js',
            '@': path.resolve(__dirname, "src")
        }
    },
    module: {
        rules: [{
            test: /\.vue$/,
            use: {
                loader: 'vue-loader',
                options: {
                    loaders: utils.cssLoaders({
                        sourceMap: isProduction,
                        extract: isProduction
                    }),
                    transformToRequire: {
                        video: 'src',
                        source: 'src',
                        img: 'src',
                        image: 'xlink:href'
                    }
                }
            }
        }, {
            test: /\.js$/,
            include: config.include,
            use:  'babel-loader'
        }, {
            test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
            use: {
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'img/[name].[hash:7].[ext]'
                }
            }
        },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        name: 'media/[name].[hash:7].[ext]'
                    }
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        name: 'fonts/[name].[hash:7].[ext]'
                    }
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
}