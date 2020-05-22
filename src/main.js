import Vue from 'vue'
import App from './App.vue'

import KUI from '../dist/k-ui.js' // 打包例子
// import KUI from './index.js' // 开发例子
Vue.use(KUI)

new Vue({
  el: '#app',
  render: h => h(App)
})
