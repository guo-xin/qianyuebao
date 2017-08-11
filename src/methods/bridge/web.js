/* global Vue */

/**
 * Created by aidenZou on 16/4/5.
 */

// Web
import util from '../util'

// API 请求
let request = (params) => {
  Vue.http.options.headers = {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8;'
  }
  Vue.http.options.xhr = {
    withCredentials: true
  }
  Vue.http.options.emulateJSON = true
  Vue
    .http({
      url: params.url,
      method: params.method,
      data: params.data || {}
    })
    .then((response) => {
      let data = response.data
      params.callback(data)
    }, (response) => {
      // error callback
    })
}

/**
 * 页面跳转
 * @param url
 * @param params
 */
let redirect = (url, params) => {
  let arr = []
  for (let key in params) {
    key && (arr.push(key + '=' + params[key]))
  }
  window.location.href = url + '?' + arr.join('&')
}

/**
 * 获取页面参数
 * @param callback
 */
let getPageParam = (callback) => {
  let params = util.getRequestParams()
  callback(params)
}

let nullFun = () => {
}

exports.request = request             // AJAX接口代理请求
exports.redirect = redirect           // 页面跳转
exports.getPageParam = getPageParam   // 获取页面参数
exports.download = nullFun            // 下载（Native 独有）
exports.backView = nullFun            // 后退（Native 独有）
