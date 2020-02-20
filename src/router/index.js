import Vue from 'vue'
import Router from 'vue-router'

const Dashboard = (resolve) => {
  import('views/dashboard/index').then((dashboard) => {
    resolve(dashboard)
  })
}
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/dashboard'
    },
    {
      path: '/dashboard',
      component: Dashboard
    }
  ]
})
