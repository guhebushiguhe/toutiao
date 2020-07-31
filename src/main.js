import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入 axios
import axios from './common/myaxios'

// 在 Vue 的原型上添加 $axios
Vue.prototype.$axios = axios



// 将 vuex 混入
// axios例外，不能这么混入
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
