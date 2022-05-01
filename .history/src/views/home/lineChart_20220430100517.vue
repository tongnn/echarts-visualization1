<template>
  <div class="box">
    <panel-group />
    <!-- <div :class="className" :style="{height:height,width:width}" /> -->
  </div>
</template>

<script>
import { debounce } from '@/utils'
import PanelGroup from './components/PanelGroup'
// import chartsArr from '../../mixin/chartsArr'
export default {
  // mixins:[chartsArr],
   components: {
    PanelGroup,
  },
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '300px'
    }
  },
  data() {
    return {
      chart: null
    }
  },
  
}
</script>
<style lang="less" scoped>
.box{
  width: 100%;
  height: 100%;
  background: #1f2241;
}
</style>
