import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 将 vuex 混入
// axios例外，不能这么混入
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
