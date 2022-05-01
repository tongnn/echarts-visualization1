<template>
  <div class="box">
    <relation-chart ref="chart_line_one"></relation-chart>
    <div class="panel-group">
      <h4><span class="title"></span><span>银行间结算合同状态</span></h4>
      <div>
        <dashboard></dashboard>
      </div>
    </div>


  </div>
</template>

<script>

import RelationChart from './components/RelationChart'
import dashboard from "./components/dashboard.vue"
// import RelationChart from '../relation/components/RelationChart.vue'
// import chartsArr from '../../mixin/chartsArr'
export default {
  name: 'itOpration',
  // mixins:[chartsArr],
   components: {
    RelationChart,
    dashboard,
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
      default: '200px'
    }
  },
  data() {
    return {
      chart: null
    }
  },
  mounted() {
   this.$refs.chart_line_one.initChart()
  },
}
</script>
<style lang="less" scoped>
  // @import "../../../assets/css/index.less";
.box{
  width: 100%;
  height: 100%;
  background: #1f2241;
  .panel-group {
      width: 90%;
      background: #2e3359;
      margin: 10px auto;
      padding-left: 20px;
      height: 400px;
      border-radius: 4px;
      color: #fff;
      .title{
        height: 20px;
        line-height: 20px;
        font-size: 14px;
      }
    }
}
</style>
