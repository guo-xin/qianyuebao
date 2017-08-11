var path = require('path')
var glob = require('glob')
var config = require('../config')
var appConfig = require('../appConfig')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var prod = process.argv[2] || '';
exports.assetsPath = function (_path) {
  return path.posix.join(config.assetsSubDirectory, _path)
}

exports.cssLoaders = function (options) {
  options = options || {}
  // generate loader string to be used with extract text plugin
  function generateLoaders(loaders) {
    var sourceLoader = loaders.map(function (loader) {
      var extraParamChar
      if (/\?/.test(loader)) {
        loader = loader.replace(/\?/, '-loader?')
        extraParamChar = '&'
      } else {
        loader = loader + '-loader'
        extraParamChar = '?'
      }
      return loader + (options.sourceMap ? extraParamChar + 'sourceMap' : '')
    }).join('!')

    if (options.extract) {
      return ExtractTextPlugin.extract('vue-style-loader', sourceLoader)
    } else {
      return ['vue-style-loader', sourceLoader].join('!')
    }
  }

  // http://vuejs.github.io/vue-loader/configurations/extract-css.html
  return {
    css: generateLoaders(['css?-autoprefixer']),
    postcss: generateLoaders(['css?-autoprefixer']),
    less: generateLoaders(['css?-autoprefixer', 'less']),
    sass: generateLoaders(['css?-autoprefixer', 'sass?indentedSyntax']),
    scss: generateLoaders(['css?-autoprefixer', 'sass?outputStyle=expanded']),
    stylus: generateLoaders(['css?-autoprefixer', 'stylus']),
    styl: generateLoaders(['css?-autoprefixer', 'stylus'])
  }
}

// Generate loaders for standalone style files (outside of .vue)
exports.styleLoaders = function (options) {
  var output = []
  var loaders = exports.cssLoaders(options)
  for (var extension in loaders) {
    var loader = loaders[extension]
    output.push({
      test: new RegExp('\\.' + extension + '$'),
      loader: loader
    })
  }
  // console.log('styleLoaders', output)
  return output
}
// 获取入口文件

exports.entry = (function () {
  var entry = {};
  glob.sync('./src/pages/*').forEach(function (name) {
    var n = name.slice(12, name.length - 0);
    appConfig.pages.forEach(function(page) {
      // 判断是否支持离线
      if (prod === 'offline') {
        if (page.filename === n && page.supportOffline) {
          entry[n] = name + '/index.js';
        }
      } else {
        entry[n] = name + '/index.js';
      }
    })
  });
  return entry;
})();

