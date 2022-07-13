import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new Router({
    routes: [
      {
        path: '/',
        name: 'Homepage',
        component: Homepage
      },
      {
        path: '/discover',
        name: 'Discover',
        component: Discover
      },
      {
        path: '/watch',
        name: 'Watch',
        component: Watch
      },
    ]
  })