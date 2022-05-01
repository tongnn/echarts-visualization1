<template>
  <div>
    <panel-group />
    <div :class="className" :style="{height:height,width:width}" />
  </div>
</template>

<script>
import { debounce } from '@/utils'
import PanelGroup from './components/PanelGroup'
import chartsArr from './mixin/chartsArr'
export default {
  mixins:[],
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
  mounted() {
    this.initChart()
    this.__resizeHandler = debounce(() => {
      if (this.chart) {
        this.chart.resize()
      }
    }, 100)
    window.addEventListener('resize', this.__resizeHandler)
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    window.removeEventListener('resize', this.__resizeHandler)
    this.chart.dispose()
    this.chart = null
  },
}
</script>
