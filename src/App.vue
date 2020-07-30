<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
import Home from '@/views/Home.vue'
import Login from '@/views/login.vue'
import About from '@/views/About.vue'
export default {
  name: 'app',
  components:{
    Home,
    Login,
    About
  }
}
</script>
<style>
html,body,div,section,p,span,h1,h2,h3,h4,h5,h6{
  margin: 0;
  padding: 0;
}
</style>
