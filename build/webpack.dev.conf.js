var webpack = require('webpack')
var merge = require('webpack-merge')
var utils = require('./utils')
var baseWebpackConfig = require('./webpack.base.conf')
var HtmlWebpackPlugin = require('html-webpack-plugin')

// add hot-reload related code to entry chunks
Object.keys(baseWebpackConfig.entry).forEach(function (name) {
  baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name])
})

var devWebpackConfig = {
  module: {
    loaders: utils.styleLoaders()
  },
  // eval-source-map is faster for development
  devtool: '#eval-source-map',
  plugins: [
    // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    // new HtmlWebpackPlugin({
    //   filename: 'index.html',
    //   template: 'index.html',
    //   inject: true
    // })
    // new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
    new webpack.ProvidePlugin({
      FastClick: 'fastclick',
      Vue: 'vue'
    })
  ]
}

var pages = []
for(key in utils.entry) {
  pages.push(key)
}

var appConfig = require('../appConfig')
appConfig.pages.forEach(function (page) {
  var conf = {
    template: page.template || 'src/templates/vue.ejs',  // html模板路径
    title: page.title || '钱方商户',
    filename: page.filename + '.html',       // 生成的html存放路径,文件名，相对于path
    chunks: [page.filename],
    inject: 'body',                     // //js插入的位置
    // hash: true,
    minify: {                           // 压缩HTML文件
      removeComments: false,             // 移除HTML中的注释
      collapseWhitespace: false         // 删除空白符与换行符
    },
    RUN_ENV: utils.env
  }
  devWebpackConfig.plugins.push(new HtmlWebpackPlugin(conf))
});

module.exports = merge(baseWebpackConfig, devWebpackConfig)
