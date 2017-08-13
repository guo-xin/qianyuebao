/**
 * chunks
 * vue vue-resource
 */

// 页面配置
exports.pages = [
  {
    filename: 'register',
    title: 'Chris Chen', // 自定义 title 注册
    chunks: 'vue_vue-resource',
    template: 'src/pages/register/index.ejs',
    supportOffline: true
  },
  {
    filename: 'basic-info1',
    title: 'Merchant Information', // 自定义 title 商户基本信息1
    chunks: 'vue_vue-resource',
    template: 'src/pages/basic-info1/index.ejs',
    supportOffline: true
  },
  {
    filename: 'basic-info2',
    title: 'Merchant Information', // 自定义 title 商户基本信息2
    chunks: 'vue_vue-resource',
    template: 'src/pages/basic-info2/index.ejs',
    supportOffline: true
  },
  {
    filename: 'upload-photo',
    title: 'Shop Photos', // 自定义 title 上传图片
    chunks: 'vue_vue-resource',
    template: 'src/pages/upload-photo/index.ejs',
    supportOffline: true
  },
  {
    filename: 'my-merchant',
    title: 'My Merchants', // 自定义 title 我的商户
    chunks: 'vue_vue-resource',
    template: 'src/pages/my-merchant/index.ejs',
    supportOffline: true
  },
  {
    filename: 'set-rate',
    title: 'Setup-Discount Rate', // 指定自定义 设置费率
    chunks: 'vue_vue-resource',
    template: 'src/pages/set-rate/index.ejs',
    supportOffline: true
  },
  {
    filename: 'send-code',
    title: 'Merchant-On-Board', // 指定自定义 发送验证码
    chunks: 'vue_vue-resource',
    template: 'src/pages/send-code/index.ejs',
    supportOffline: true
  },
  {
    filename: 'complete',
    title: 'complete', // 指定自定义 title
    chunks: 'vue_vue-resource',
    template: 'src/pages/complete/index.ejs',
    supportOffline: true
  },
  {
    filename: 'preview',
    title: 'preview', // 指定自定义 title
    chunks: 'vue_vue-resource',
    template: 'src/pages/preview/index.ejs',
    supportOffline: true
  }
]
