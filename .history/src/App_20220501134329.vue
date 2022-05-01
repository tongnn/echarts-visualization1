<template>
  <div id="app">
    <router-view/>
    <div></div>
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
html {font-size: 62.5%; /*100 ÷ 16 × 100% = 625%*/}
</style>  
