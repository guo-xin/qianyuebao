/**
 * chunks
 * vue vue-resource
 */

// 页面配置
exports.pages = [
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
    filename: 'add-record',
    title: '添加记录', // 指定自定义 title
    chunks: 'vue_vue-resource',
    template: 'src/pages/add-record/index.ejs',
    supportOffline: true
  },
  {
    filename: 'rate-detail',
    title: '费率明细', // 指定自定义 title
    chunks: 'vue_vue-resource',
    template: 'src/pages/rate-detail/index.ejs',
    supportOffline: true
  },
  {
    filename: 'edit-record',
    title: '修改记录', // 指定自定义 title
    chunks: 'vue_vue-resource',
    template: 'src/pages/edit-record/index.ejs',
    supportOffline: true
  },
  {
    filename: 'jsbridge-demo',
    title: '测试demo页面', // 指定自定义 title
    chunks: 'vue_vue-resource',
    template: 'src/pages/jsbridge-demo/index.ejs',
    supportOffline: true
  }
]
