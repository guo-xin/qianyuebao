/**
 * Created by aidenZou on 16/5/6.
 */

/**
 * chunks
 * vue vue-resource
 */

// 页面配置
exports.pages = [
  {
    filename: 'my-merchant',
    title: '我的商户', // 指定自定义 title
    chunks: 'vue_vue-resource',
    template: 'src/pages/my-merchant/index.ejs',
    supportOffline: true
  },
  {
    filename: 'my-info',
    title: '我的资料', // 指定自定义 title
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
    filename: 'merchant-detail',
    title: '商户详情', // 指定自定义 title
    chunks: 'vue_vue-resource',
    template: 'src/pages/merchant-detail/index.ejs',
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
  },
  {
    filename: 'setup-discountRate',
    title: 'Setup-Discount Rate', // 指定自定义 title
    chunks: 'vue_vue-resource',
    template: 'src/pages/setup-discountRate/index.ejs',
    supportOffline: true
  },
  {
    filename: 'Merchant-onboard',
    title: 'Merchant-On-Board', // 指定自定义 title
    chunks: 'vue_vue-resource',
    template: 'src/pages/Merchant-onboard/index.ejs',
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
