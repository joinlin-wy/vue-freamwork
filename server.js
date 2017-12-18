const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const config = require('./config')
//开发环境不压缩
const webpackConfig = require('./webpack.dev.config')
Object.keys(webpackConfig.entry).forEach(function (key) {
    webpackConfig.entry[key].unshift("webpack-dev-server/client?http://localhost:" + config.dev.port, "webpack/hot/dev-server")
})
const server = new WebpackDevServer(webpack(webpackConfig), {
    inline: true,
    publicPath: webpackConfig.output.publicPath,//相对路径
    hot: true
})


//将其他路由，全部返回index.html
// server.app.get('*', function(req, res) {
//     res.redirect('index.html')
// });
server.listen(config.dev.port, "localhost", function (e) {
    console.log('serving on http://localhost:' + config.dev.port)

    //通过系统进程自动打开浏览器访问
    if (config.dev.autoOpenBrowser) {
        const c = require('child_process')
        c.exec('start http://localhost:' + config.dev.port)
    }
})
