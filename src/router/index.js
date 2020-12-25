import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '@/views/Index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/guide',
    name: 'Guide',
    component: () => import(/* webpackChunkName: "guide" */ '../views/Guide.vue')
  },
  {
    path: '/land',
    name: 'Land',
    component: () => import(/* webpackChunkName: "land" */ '../views/Land.vue')
  },
  {
    path: '/launch/:app',
    name: 'Launch',
    component: () => import(/* webpackChunkName: "launch" */ '../views/Launch.vue')
  },
  {
    path: '/list',
    name: 'List',
    component: () => import(/* webpackChunkName: "list" */ '../views/List.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
