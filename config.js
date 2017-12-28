const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin') //生成html
//entry添加polyfill用以支持es6的一些内置对象如promise或静态方法如Object.assign等
// 一个入口对应一个HtmlWebpackPlugin
const entry = {
    // demo: ["babel-polyfill","./src/demo/app.js"],
    editor: ["./src/editor/app.js"]
}
const config = {
    entry: entry,
    include: includeDir(),
    plugins: generateHtmlPlugins(),
    build: {
        index: path.resolve(__dirname, './dist/index.html'),
        assetsRoot: path.resolve(__dirname, './dist'),
        assetsPublicPath: '/',//文件引用的相对目录
        productionSourceMap: true
    },
    dev: {
        contentBase: '',//服务的根目录
        port: process.env.PORT || 8088,
        cssSourceMap: false,
        autoOpenBrowser: false,
        assetsPublicPath: '/'
    }
}
function includeDir() {
    let base = [path.resolve(__dirname, "src")]
            //含有const等关键字，也要转化
     let extend = [path.resolve(__dirname, "node_modules/webpack-dev-server")]

    return process.env.NODE_ENV === 'production' ? base : base.concat(extend)
}
function generateHtmlPlugins() {
    let htmlWebpackPlugins = []
    Object.keys(entry).forEach(function (key) {
        let plugin = {
            filename: key + '/index.html', //生成的html存放路径
            template: './src/index.html', //html模板路径
            inject: true, //资源注入位置 true | 'head' | 'body' | false
            chunks: ['common', key],
            // necessary to consistently work with multiple chunks via CommonsChunkPlugin
            chunksSortMode: 'dependency'
        }
        if (process.env.NODE_ENV === 'production') {
            plugin.minify = {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true
                // more options:
                // https://github.com/kangax/html-minifier#options-quick-reference
            }
        }
        htmlWebpackPlugins.push(
          new HtmlWebpackPlugin(plugin)
        )
    })
    return htmlWebpackPlugins
}

module.exports = config