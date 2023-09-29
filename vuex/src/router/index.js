import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
  {
      path: '/',
      name: 'count',
      component: resolve => require(['../components/Count'], resolve),
  }
]

const router =  new Router({
  mode:'history',
  routes
})



export default router
