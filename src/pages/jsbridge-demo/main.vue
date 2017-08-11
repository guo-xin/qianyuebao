<template>
  <div class="container">
    <button class="weui-btn weui-btn_default" @click="test_alert">弹框</button>
    <button class="weui-btn weui-btn_default" @click="test_toast">提示</button>
    <button class="weui-btn weui-btn_default" @click="test_close">关闭窗口</button>
    <button class="weui-btn weui-btn_default" @click="test_openuri">跳转</button>
    <button class="weui-btn weui-btn_default" @click="test_get_device_info">获取设备信息</button>
    <button class="weui-btn weui-btn_default" @click="test_get_location">获取经纬度</button>
    <button class="weui-btn weui-btn_default" @click="test_set_nav_title">设置标题</button>
    <button class="weui-btn weui-btn_default" @click="test_set_nav_back">设置返回按钮</button>
    <button class="weui-btn weui-btn_default" @click="test_set_nav_menus">设置菜单</button>
    <button class="weui-btn weui-btn_default" @click="test_scan_qrcode">扫描二维码</button>
  </div>
</template>

<script type="text/ecmascript-6">
  import bridge from '../../methods/bridge-v2'
  export default {
    data () {
      return {
      }
    },
    ready () {
    },
    attached () {
    },
    methods: {
      test_alert () {
        bridge.alert({
          title: 'title',
          msg: '测试弹出消息'
        }, function (cb) {
          window.alert(cb)
          window.alert(cb.ret)
        })
      },
      test_toast () {
        bridge.toast({
          msg: '测试 提示'
        }, function (cb) {
          window.alert(cb.ret)
        })
      },
      test_close () {
        bridge.close({}, function (cb) {
          window.alert(cb.ret)
        })
      },
      test_openuri () {
        bridge.openUri({
          uri: 'http://baidu.com'
        }, function (cb) {
          window.alert(cb.ret)
        })
      },
      test_get_device_info () {
        bridge.getDeviceInfo({}, function (cb) {
          window.alert('系统' + cb.os + '\n型号' + cb.phonemodel + '\n网络' + cb.network + '\nappname' + cb.appname + '\nappver' + cb.appver + '\nudid' + cb.udid)
        })
      },
      test_get_location () {
        bridge.getLocation({
          type: 'WGS84'
        }, function (cb) {
          window.alert('经纬度' + cb.longitude + '' + cb.latitude)
        })
      },
      test_set_nav_title () {
        bridge.setNavTitle({
          title: '我是红底绿字',
          color: '#00FF00',
          bgcolor: '#FF0000'
        }, function (cb) {
        })
      },
      test_set_nav_back () {
        bridge.setNavBack({
          type: 'uri',
          uri: 'http://baidu.com'
        }, function (cb) {
          console.log(cb.ret)
        })
      },
      test_set_nav_menus () {
        bridge.setNavMenu({
          menus: [
            {
              type: 'uri',
              uri: 'http://baidu.com',
              title: '打开百度'
            }
          ]
        }, function (cb) {
          window.alert(cb.ret)
        })
      },
      test_scan_qrcode () {
        bridge.scanQrcode({}, function (cb) {
          window.alert(cb.ret)
          window.alert(cb.qrcode)
        })
      }
    }
  }
</script>

<style lang="scss" type="scss" rel="stylesheet/scss">
  @import "../../styles/common";

  p,img{
    line-height: 1;
    margin: 0;
  }

  html, body {
    position: relative;
    height: 100%;
  }
  body {
    background: #FFF2E2;
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
    font-size: 14px;
    color:#000;
    margin: 0;
    padding: 0;
  }


</style>
