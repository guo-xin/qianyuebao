// Native
import JSBridge from './WebViewJavascriptBridge'

/**
 * alert
 * param: title	弹出框的标题
          msg	需要显示的消息
 * 返回值: ret	OK代表成功
 */
let alert = (data, cb) => {
  JSBridge.H5CallNative({
    name: 'alert',
    data: data || {},
    callback: (res) => {
      cb(res)
    }
  })
}
/**
 * toast 提示框
 * param: msg	需要显示的消息
 * 返回值 ret	OK代表成功
 */
let toast = (data, cb) => {
  JSBridge.H5CallNative({
    name: 'toast',
    data: data || {},
    callback: (res) => {
      cb(res)
    }
  })
}
/**
 * close 关闭当前窗口
 * 返回值: ret	OK代表成功
 */
let close = (data, cb) => {
  JSBridge.H5CallNative({
    name: 'close',
    data: data || {},
    callback: (res) => {
      cb(res)
    }
  })
}
/**
 * openUri 打开某功能
 * param: uri	打开的地址 http:// 或者hjsh://
 * 返回值: ret	OK代表成功
 */
let openUri = (data, cb) => {
  JSBridge.H5CallNative({
    name: 'openUri',
    data: data || {},
    callback: (res) => {
      cb(res)
    }
  })
}
/**
 * navToUri 打开某功能
 * param: uri	打开的地址 http:// 或者hjsh://
 * 返回值: ret	OK代表成功
 */
let navToUri = (data, cb) => {
  JSBridge.H5CallNative({
    name: 'navToUri',
    data: data || {},
    callback: (res) => {
      cb(res)
    }
  })
}
/**
 * getDevicesInfo 获取设备各种信息
 * 返回值:  ret OK代表成功
           os	iOS android ..
           phonemodel	手机型号 iPhone 6
           network	网络状况 WIFI 4G 3G 2G NO 安卓上无法判断可返回接入点cmwap
           appname	hjsh
           appver	1.3.6
           udid	设备唯一编号
 */
let getDeviceInfo = (data, cb) => {
  JSBridge.H5CallNative({
    name: 'getDeviceInfo',
    data: data || {},
    callback: (res) => {
      cb(res)
    }
  })
}
/**
 * getLocation 获取当前经纬度
 * param: type(可选）经纬度标准WGS84，GCJ02，BD09
 * 返回值: ret	OK代表成功
          longitude	经度180~-180 字符串
          latitude	纬度 90~-90 字符串
          type	同上
 */
let getLocation = (data, cb) => {
  JSBridge.H5CallNative({
    name: 'getLocation',
    data: data || {},
    callback: (res) => {
      cb(res)
    }
  })
}
/**
 * setNavTitle 设置标题显示,以及标题栏颜色
 * param: title	需要显示的消息
          color	(可选)字体颜色6位标准RGB如#FFFFFF
          bgcolor	(可选)背景颜色6位标准RGB如#FFFFFF
 * 返回值: ret	OK代表成功
 */
let setNavTitle = (data, cb) => {
  JSBridge.H5CallNative({
    name: 'setNavTitle',
    data: data || {},
    callback: (res) => {
      cb(res)
    }
  })
}
/**
 * setNavBack 设置标题栏返回按钮功能
 * param: type 功能的类型 目前有default（原始状态），uri
          uri	(如果type=uri)URL或者原生界面代码
 * 返回值: ret	OK代表成功
 */
let setNavBack = (data, cb) => {
  JSBridge.H5CallNative({
    name: 'setNavBack',
    data: data || {},
    callback: (res) => {
      cb(res)
    }
  })
}
/**
 * setNavMenu 设置右上角菜单
 * param: menus	所有菜单的集合[]
            type	类型uri
            uri	(type=uri)URL或者原生界面代码
            icon	(可选）icon地址
            title	菜单标题
          buttons	所有导航栏按钮的集合[]
            type	类型uri
            uri	(type=uri)URL或者原生界面代码
            icon	(可选）icon地址
            title	(可选）菜单标题
 * 返回值: ret	OK代表成功
 */
let setNavMenu = (data, cb) => {
  JSBridge.H5CallNative({
    name: 'setNavMenu',
    data: data || {},
    callback: (res) => {
      cb(res)
    }
  })
}

// let navRightButtonClick  = (data, cb) => {
//   JSBridge.H5CallNative({
//     name: 'navRightButtonClick',
//     data: data || {},
//     callback: (res) => {
//       cb(res)
//     }
//   })
// }

/**
 * scanQrcode 扫描二维码获取内容
 * 返回值: ret	OK代表成功
          qrcode	二维码内容
 */
let scanQrcode = (data, cb) => {
  JSBridge.H5CallNative({
    name: 'scanQrcode',
    data: data || {},
    callback: (res) => {
      cb(res)
    }
  })
}
/**
 * share 打开分享界面，主要是网页分享
 * param: title	分享标题
          desc 分享描述
          url	网页地址
          icon	(可选）分享描述，可用默认值
 */
let share = (data, cb) => {
  JSBridge.H5CallNative({
    name: 'share',
    data: data || {},
    callback: (res) => {
      cb(res)
    }
  })
}

/**
 * notify 原生通知功能
 * param: name	通知描述
          type  通知方式
 */
let webNotify = (data, cb) => {
  JSBridge.H5CallNative({
    name: 'webNotify',
    data: data || {},
    callback: (res) => {
      cb(res)
    }
  })
}

let initParams = (data, cb) => {
  JSBridge.H5CallNative({
    name: 'initParams',
    data: data || {},
    callback: (res) => {
      cb(res)
    }
  })
}

/**
 * copy 复制文本到粘贴板
 * param: content	粘贴的文本
 */
let copy = (data, cb) => {
  JSBridge.H5CallNative({
    name: 'copy',
    data: data || {},
    callback: (res) => {
      cb(res)
    }
  })
}

/**
 * telephone 调起拨打电话的弹窗
 * param: phone	拨打的号码
 */
let telephone = (data, cb) => {
  JSBridge.H5CallNative({
    name: 'telephone',
    data: data || {},
    callback: (res) => {
      cb(res)
    }
  })
}
exports.alert = alert
exports.toast = toast
exports.close = close
exports.openUri = openUri
exports.getDeviceInfo = getDeviceInfo
exports.getLocation = getLocation
exports.setNavTitle = setNavTitle
exports.setNavBack = setNavBack
exports.setNavMenu = setNavMenu
exports.scanQrcode = scanQrcode
exports.share = share
exports.webNotify = webNotify
exports.navToUri = navToUri
exports.initParams = initParams
exports.copy = copy
exports.telephone = telephone
