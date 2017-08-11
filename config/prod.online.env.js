var path = require('path')
require('shelljs/global')
var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

// 七牛 CDN
var QINIU = 'http://wxstatic.u.qiniudn.com/near-v2/';

module.exports = merge(prodEnv, {
  publicPath: QINIU
})
