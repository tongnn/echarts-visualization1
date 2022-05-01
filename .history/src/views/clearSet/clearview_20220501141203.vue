<template>
  <div class="box">
    <!-- 中债数据可视化 -->
    <panel-group />
    <product/>
  </div>
</template>

<script>

import PanelGroup from './components/panelGroup'
import product from './components/product'
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
