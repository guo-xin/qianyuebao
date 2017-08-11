// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')
require('shelljs/global')

var NODE_ENV = env.NODE_ENV;
var prod = process.argv[2] || '';

console.error('构建环境：', NODE_ENV || 'development', ':', prod || 'default');

var config = require('./dev.env');
if (NODE_ENV === 'production') {
  if (prod === 'online') {
    config = require('./prod.online.env')
  } else if (prod === 'offline'){
    config = require('./prod.offline.env');
  } else {
    config = require('./prod.env');
  }
}

module.exports = config
