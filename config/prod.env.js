var path = require('path')
require('shelljs/global')

module.exports = {
  env: {
    NODE_ENV: 'production'
  },
  index: path.resolve(__dirname, '../my_merchant/index.html'),
  assetsRoot: path.resolve(__dirname, '../my_merchant'),
  assetsSubDirectory: 'static/',
  assetsPublicPath: '/near-v2/',
  productionSourceMap: false
}
