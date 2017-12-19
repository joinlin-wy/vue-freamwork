'use strict'
process.env.NODE_ENV = 'production'
const webpack = require('webpack')
const webpackProdConfig = require('./webpack.prod.config')

webpack(webpackProdConfig,function (err, stats) {
  if (err) throw err
  process.stdout.write(stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }) + '\n\n')
  
  if (stats.hasErrors()) {
    console.log('  Build failed with errors.\n')
    process.exit(1)
  }
  
  console.log('  Build complete.\n')
  console.log(
    '  Tip: built files are meant to be served over an HTTP server.\n' +
    '  Opening index.html over file:// won\'t work.\n'
  )
})