var path = require('path')
require('shelljs/global')
var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  env: {
    NODE_ENV: 'development'
  },
  assetsSubDirectory: 'static',
  assetsPublicPath: '/',
  productionSourceMap: true,
  port: 8082,
  proxyTable: {}
})

