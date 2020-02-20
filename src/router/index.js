import Vue from 'vue'
import Router from 'vue-router'
/* Layout */
import Layout from '@/layout'

const Dashboard = (resolve) => {
  import('views/dashboard/dashboard').then((dashboard) => {
    resolve(dashboard)
  })
}
const Records = (resolve) => {
  import('views/phones/callRecords').then((callRecords) => {
    resolve(callRecords)
  })
}
const DeviceManage = (resolve) => {
  import('views/deviceManage/deviceManage').then((device) => {
    resolve(device)
  })
}
const Statistics = (resolve) => {
  import('views/statistics/statistics').then((statistics) => {
    resolve(statistics)
  })
}
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      component: Layout,
      redirect: '/dashboard',
      children: [{
        path: 'dashboard',
        name: 'Dashboard',
        component: Dashboard,
        meta: { title: '首页', icon: 'dashboard' }
      }]
    },

    {
      path: '/phone',
      component: Layout,
      redirect: '/phone/record',
      name: 'Phone',
      meta: { title: '手机管理', icon: 'phone' },
      children: [
        {
          path: 'record',
          name: 'Records',
          component: Records,
          meta: { title: '通话记录', icon: 'table' }
        }
      ]
    },
    {
      path: '/statistics',
      component: Layout,
      children: [
        {
          path: 'index',
          name: 'Statistics',
          component: Statistics,
          meta: { title: '数据统计', icon: 'form' }
        }
      ]
    },
    {
      path: '/devices',
      component: Layout,
      children: [
        {
          path: 'index',
          name: 'DeviceManage',
          component: DeviceManage,
          meta: { title: '设备管理', icon: 'form' }
        }
      ]
    }
  ]
})
