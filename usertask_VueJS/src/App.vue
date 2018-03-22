<template>
  <div id="app">
      
       <router-view></router-view>
  </div>
</template>

<script>
import login from './userComponents/Login';
import Register from './userComponents/Registration';
export default {
  

  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
    login,
    Register
  }
}
</script>

<style>

</style>
