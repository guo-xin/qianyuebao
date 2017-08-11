var path = require('path')
require('shelljs/global')
var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  publicPath: '../'
})
