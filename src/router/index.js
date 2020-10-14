import Vue from 'vue'
import VueRouter from 'vue-router'
import Launch from '../views/Launch.vue'
import Land from '../views/Land.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/land',
    name: 'Land',
    component: Land
  },
  {
    path: '/launch/:app',
    name: 'Launch',
    component: Launch
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
