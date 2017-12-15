{
  
  plugins: [
    //定义生产环境
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new HtmlWebpackPlugin({
      filename: 'photo.html', //生成的html存放路径
      template: './src/index.html', //html模板路径
      minify: {
        minifyJS: true,
        minifyCSS: true
      },
      hash: true,
      chunks: ['common','photo']
    }),
    new HtmlWebpackPlugin({
      filename: 'editor.html', //生成的html存放路径
      template: './src/index.html', //html模板路径
      minify: {
        minifyJS: true,
        minifyCSS: true
      },
      hash: true,
      chunks: ['common','editor']
    }),
    new ExtractTextPlugin({
      filename: "[name].[contenthash].css"
      // disable: process.env.NODE_ENV === "development"
    }),
    //提取出公共模块并添加到html
    new webpack.optimize.CommonsChunkPlugin({"name": "common", "filename": "common/common.js"}),
    new webpack.optimize.UglifyJsPlugin({
      output: {
        comments: false, // remove all comments
      },
      compress: {
        warnings: false
      }
    })
  ]
}