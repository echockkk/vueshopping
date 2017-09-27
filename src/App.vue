<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
import Swiper from '../static/swiper-3.4.2.min.js';
export default {
  name: 'app'
}
</script>
<style scoped>
@import './assets/css/reset.css';
@import './assets/font/iconfont.css';
@import './assets/css/swiper-3.4.2.min.css';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
