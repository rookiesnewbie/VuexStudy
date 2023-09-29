import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
  {
      path: '/vue',
      name: 'count',
      component: resolve => require(['../components/Count'], resolve),
  },
   {
      path: '/vuex',
      name: 'countVuex',
      component: resolve => require(['../components/CountVuex'], resolve),
  },
   {
      path: '/mapState',
      name: 'count',
      component: resolve => require(['../components/CountVuexMapstate'], resolve),
  },
]

const router =  new Router({
  mode:'history',
  routes
})



export default router
