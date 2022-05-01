<template>
  <div class="box">
    <!-- 中债数据可视化平台 -->
    <clear-group />
    <product/>
  </div>
</template>

<script>

import clearGroup from './components/clearGroup'
import product from './components/product'
export default {
   components: {
    clearGroup,
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
