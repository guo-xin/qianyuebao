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
    filename: 'my-info',
    title: 'Personal Information', // 我的资料
    chunks: 'vue_vue-resource',
    template: 'src/pages/my-info/index.ejs',
    supportOffline: true
  },
  {
    filename: 'search-shop',
    title: '查找店铺', // 指定自定义 title
    chunks: 'vue_vue-resource',
    template: 'src/pages/search-shop/index.ejs',
    supportOffline: true
  },
  {
    filename: 'transaction-data',
    title: '交易数据', // 指定自定义 title
    chunks: 'vue_vue-resource',
    template: 'src/pages/transaction-data/index.ejs',
    supportOffline: true
  },
  {
    filename: 'rate-detail',
    title: '费率明细', // 指定自定义 title
    chunks: 'vue_vue-resource',
    template: 'src/pages/rate-detail/index.ejs',
    supportOffline: true
  }
]
