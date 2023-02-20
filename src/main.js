import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import { axiosInstance } from './utils/axios'

Vue.config.productionTip = false

Vue.prototype.$axios = axiosInstance

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
