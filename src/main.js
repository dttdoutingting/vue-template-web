import 'babel-polyfill'
import Vue from 'vue'
import VueLazyload from 'vue-lazyload'
import App from './App'
// import router from './router'

import 'common/stylus/index.styl'
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
