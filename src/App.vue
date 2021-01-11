<template>
  <div id="app">
    <header-app/>
    <router-view path="$router.key"/>
    <footer-app/>
  </div>
</template>

<script>

import HeaderApp from './components/header-app.vue';
import footerApp from './components/footer-app.vue';
//import Home from './pages/home.vue';
import './style/global.css';

export default {
  name: 'App',
  components: {
    HeaderApp,
    footerApp
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
