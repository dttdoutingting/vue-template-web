import 'babel-polyfill'
import Vue from 'vue'
import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import VueLazyload from 'vue-lazyload'
import App from './App'
// import router from './router'
import './filters' // 加载过滤器

import 'common/styles/index.scss' // global css

import loading from 'common/image/loading.gif'

Vue.use(VueLazyload, {
  loading
})

// Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // router,
  components: { App },
  template: '<App/>'
})
