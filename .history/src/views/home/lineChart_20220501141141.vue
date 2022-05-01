<template>
  <div class="box">
    <!-- 中债运营数据概览 -->
    <panel-group />
    <product/>
  </div>
</template>

<script>

import PanelGroup from './components/panelGroup'
import product from './components/product'
// import pie from "./components/pie.vue"
export default {
   components: {
    PanelGroup,
    product,
    // pie,
  },
}
</script>
<style lang="less" scoped>
.box{
  overflow: auto;
  padding-bottom: 52px;
  position: relative;
  z-index: 100;
}
</style>
