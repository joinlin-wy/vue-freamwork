const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
//开发环境不压缩
const webpackConfig = require('./webpack.dev.config')
Object.keys(webpackConfig.entry).forEach(function (key) {
  webpackConfig.entry[key].unshift("webpack-dev-server/client?http://localhost:8088/", "webpack/hot/dev-server")
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
server.listen(8088, "localhost", function () {
  console.log('serving on: http://localhost:8088')
  
  //通过系统进程自动打开浏览器访问8088端口
  // const c = require('child_process');
  // c.exec('start http://localhost:8088');
})
