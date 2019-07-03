import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "vue-material-design-icons/styles.css"

/*
material-components-vue was highly opinionated on the use of sass. 
https://sass-lang.com/guide

import Button from 'material-components-vue/dist/button'
Vue.use(Button)
*/

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
