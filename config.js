const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //生成html
const entry = {
  demo: ["./src/demo/app.js"],//一个入口对应一个HtmlWebpackPlugin
  editor: ["./src/editor/app.js"]
};
const config = {
  entry: entry,
  plugins: generateHtmlPlugins(),
  build: {
    index: path.resolve(__dirname, './dist/index.html'),
    assetsRoot: path.resolve(__dirname, './dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
  },
  dev: {
    autoOpenBrowser: false,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
  }
};
function generateHtmlPlugins() {
  let htmlWebpackPlugins = [];
  Object.keys(entry).forEach(function (key) {
    htmlWebpackPlugins.push(
      new HtmlWebpackPlugin({
        filename: entry[key] + '/index.html', //生成的html存放路径
        template: './src/index.html', //html模板路径
        inject: true //资源注入位置 true | 'head' | 'body' | false
      })
    )
  });
  return htmlWebpackPlugins;
}
module.exports = config;