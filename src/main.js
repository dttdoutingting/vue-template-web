import 'babel-polyfill'
import Vue from 'vue'
import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueLazyload from 'vue-lazyload'

import App from './App'
import router from './router'
import './filters' // 加载过滤器
import './icons' // icon

import 'common/styles/index.scss' // global css

Vue.use(VueLazyload, {
  loading: require('common/image/loading.gif')
})
Vue.use(ElementUI)

// Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
