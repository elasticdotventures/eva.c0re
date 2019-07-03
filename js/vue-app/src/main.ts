import Vue from 'vue'
import './plugins/axios'

// vue-cli vuetify plugin. 
// import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader
Vue.use(Vuetify)

// index.js or main.js


// import "vue-material-design-icons/styles.css"

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
