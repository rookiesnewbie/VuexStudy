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
      name: 'mapState',
      component: resolve => require(['../components/CountVuexMapstate'], resolve),
  },
   {
      path: '/mapGetters',
      name: 'mapGetters',
      component: resolve => require(['../components/CountVuexMapGetters'], resolve),
  }, 
  
  {
      path: '/mapMutations',
      name: 'mapMutations',
      component: resolve => require(['../components/CountVuexMapMutations'], resolve),
  },
    {
      path: '/mapActions',
      name: 'mapActions',
      component: resolve => require(['../components/CountVuexMapActions'], resolve),
  },
]

const router =  new Router({
  mode:'history',
  routes
})



export default router
