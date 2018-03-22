import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import VueResource from 'vue-resource'
import Vuelidate from 'Vuelidate'
import VueRouter from 'vue-router'
import {routes} from './routes'



const router=new VueRouter({
  routes
})

Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(Vuelidate);


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
