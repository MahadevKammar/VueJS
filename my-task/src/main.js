import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import VueRouter from 'vue-router'
import 'vuetify/dist/vuetify.min.css' 

Vue.use(VueRouter)
Vue.use(Vuetify)
new Vue({
  el: '#app',
  render: h => h(App)
})
