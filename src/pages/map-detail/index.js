import 'lib-flexible'
import FastClick from 'fastclick'
window.FastClick = FastClick
import Vue from 'vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)

import App from './main'
/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { App }
})
