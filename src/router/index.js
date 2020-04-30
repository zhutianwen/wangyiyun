import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index/index'
import mine from '@/views/mine/mine'
import yuncun from '@/views/yuncun/yuncun'
import shipin from '@/views/shipin/shipin'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      redirect: 'index',
      component: index
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/mine',
      name: 'mine',
      component: mine
    },
    {
      path: '/yuncun',
      name: 'yuncun',
      component: yuncun
    },
    {
      path: '/shipin',
      name: 'shipin',
      component: shipin
    },
  ]
})
