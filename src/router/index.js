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
    path: '/explode',
    name: 'Explode',
    component: () => import(/* webpackChunkName: "explode" */ '../views/Explode.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
