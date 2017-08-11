/**
 * Created by aidenZou on 16/4/5.
 */

// Native
import JSBridge from './WebViewJavascriptBridge'

// SCHEMA
let SCHEMA_NATIVE = 'near-merchant-native://'                 // H5 调 Native 功能
let SCHEMA_REDIRECT = 'near-merchant-h5://'                   // 页面跳转
let SCHEMA_REQUEST_AGENT = 'near-merchant-offlineAPIJS://'    // AJAX接口代理请求
let SCHEMA_GET_DATA = 'near-merchant-offlineParamsJS://'      // H5从 Native获取数据

// AJAX接口代理请求
let requestAgent = (params) => {
  let data = {
    schema: SCHEMA_REQUEST_AGENT,
    path: params.url,
    // action: 'GET',
    action: params.method === 'JSONP' ? 'GET' : params.method,
    params: params.data || {}
  }
  data.params.format = ''
  JSBridge.H5CallNative({
    data: data,
    callback: (res) => {
      res = JSON.parse(res)
      params.callback(res)
    }
  })
}

/**
 * H5页面跳转H5
 * @param url
 * @param params
 */
let redirect = (url, params) => {
  let data = {
    schema: SCHEMA_REDIRECT,
    path: url,
    action: '',
    params: params
  }
  JSBridge.H5CallNative({
    data: data,
    callback: null
  })
}
/**
 * H5页面跳转native
 * @param url
 * @param params
 */
let redirectToNative = (url, params) => {
  let data = {
    schema: SCHEMA_NATIVE,
    path: url,
    action: 'native-page',
    params: params
  }
  JSBridge.H5CallNative({
    data: data,
    callback: null
  })
}
/**
 * 获取页面参数
 * @param callback
 */
let getPageParam = (callback) => {
  let data = {
    schema: SCHEMA_GET_DATA,
    path: '',
    action: 'getParams',
    params: null
  }
  JSBridge.H5CallNative({
    data: data,
    callback: (res) => {
      // res = JSON.parse(res)
      callback(res)
    }
  })
}

/**
 * 下载
 * @param params
 */
let download = (params) => {
  let data = {
    schema: SCHEMA_NATIVE,
    path: '',
    action: 'download',
    params: {
      url: params.url
    }
  }
  JSBridge.H5CallNative({
    data: data,
    callback: (res) => {
      // console.log(res)
    }
  })
}

/**
 * 后退 View
 * @param params
 */
let backView = (params) => {
  let data = {
    schema: SCHEMA_NATIVE,
    path: '',
    action: 'back',
    params: params || {}
  }
  JSBridge.H5CallNative({
    data: data,
    callback: (res) => {
      // console.log(res)
    }
  })
}
/**
 * 切换 Login
 * @param params
 */
let logout = (params) => {
  let data = {
    schema: SCHEMA_NATIVE,
    path: '',
    action: 'logout',
    params: params || {}
  }
  JSBridge.H5CallNative({
    data: data,
    callback: (res) => {
      // console.log(res)
    }
  })
}

exports.request = requestAgent        // AJAX接口代理请求
exports.redirectToNative = redirectToNative         // H5页面跳转native
exports.redirect = redirect           // H5页面跳转H5
exports.getPageParam = getPageParam   // 获取页面参数
exports.download = download           // 下载（Native 独有）
exports.backView = backView           // 后退（Native 独有）
exports.logout = logout // 退出并重新登录
