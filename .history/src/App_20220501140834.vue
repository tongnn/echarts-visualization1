<template>
  <div id="app">
    <router-view/>
    <div class="logo"><img class="bot_img" src="./assets/images/bottmlogo.png"></div>
    <div class="molue"></div>
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
  background: #1f2241;
  background-size: 100% 100%;
  z-index: 1;
}
.logo{
  height: 52px;
  position: fixed;
  left:50%;
  bottom: 0;
  transform: translate(-50%,0%);
  z-index: 1;
}
.bot_img{
  width: 150px;
  padding: 15px 0 0 0;
}
html {font-size: 62.5%; /*100 ÷ 16 × 100% = 625%*/}
</style>  
