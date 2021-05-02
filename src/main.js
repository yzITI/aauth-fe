import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import axios from 'axios'

Vue.config.productionTip = false

Vue.prototype.$ajax = axios.create({
  baseURL: 'https://cn.api.aauth.link/'
})

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
