<template>
  <div>
    <panel-group />
    <div :class="className" :style="{height:height,width:width}" />
  </div>
</template>

<script>
import { debounce } from '@/utils'
import PanelGroup from './components/PanelGroup'
export default {

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
