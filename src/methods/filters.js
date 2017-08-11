/**
 * Created by aidenZou on 16/5/5.
 */
/**
 * 双向绑定中货币
 * 金额为0时展示空或者0
 */
exports.noneCurrency = {
  read (val, arg) {
    if (val === 0 && arg) {
      return ''
    } else {
      return val
    }
  },
  write (val) {
    return val
  }
}
/**
 * 双向绑定中货币格式化
 */
exports.twoWayCurrency = {
  read (val) {
    if (isNaN(val)) return
    return Number((val / 100).toFixed(2))
  },
  write (val) {
    return val * 100
  }
}

/**
 * 消除货币单位后多余的00000
 */
exports.noZeroCurrency = (number) => {
  return Number(number)
}

/**
 * 格式化货币
 */
exports.formatCurrency = (number) => {
  if (isNaN(number)) return
  return (number / 100).toFixed(2)
}

/**
 * 字符串截取
 * '201604059' | subStr 4 => 2016
 * '201604059' | subStr -4 => 4059
 */
exports.subStr = (str, number) => {
  if (!str) return ''

  if (number < 0) {
    return str.substr(str.length + number)
  } else {
    return str.substr(0, number)
  }
}

/**
 * 格式化时间戳
 * 1461658688000 | formatTime "yyyy-MM-dd HH:mm:ss"
 */
exports.formatTime = (timeStamp, fmt) => { // author: meizz
  if (!timeStamp) {
    return ''
  }
  var _timeStamp = parseInt(timeStamp)
  if (_timeStamp.toString().length === 10) {
    _timeStamp *= 1000
  }
  !fmt && (fmt = 'yyyy-MM-dd')

  var t = new Date(_timeStamp)

  var o = {
    'M+': t.getMonth() + 1, // 月份
    'd+': t.getDate(),      // 日
    'h+': t.getHours(),     // 小时
    'm+': t.getMinutes(),   // 分
    's+': t.getSeconds(),   // 秒
    'q+': Math.floor((t.getMonth() + 3) / 3), // 季度
    'S': t.getMilliseconds() // 毫秒
  }
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (t.getFullYear() + '').substr(4 - RegExp.$1.length))
  for (var k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
  }
  return fmt
}

/**
 * 正则替换字符 - => .
 *
 */
exports.replace = (str) => {
  return str.replace(/\-/g, '.')
}
