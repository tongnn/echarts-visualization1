<template>
  <div id="app">
    <router-view/>
    <div class="bot_img"></div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  position: fixed;
  background: #1f2241;
}
.bot_img{
  width: 100%;
  height: 200px;
  position: fixed;
  background: url('./assets/images/bottmlogo.png') no-repeat;
}
html {font-size: 62.5%; /*100 ÷ 16 × 100% = 625%*/}
</style>  
