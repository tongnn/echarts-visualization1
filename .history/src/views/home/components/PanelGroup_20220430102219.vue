<template>
  <el-row  class="panel-group">
    <el-row >
      <h4>总体数量统计</h4>
      <el-col :span="8">
        <div class="grid-content bg-purple">
          <p>4063<span>家</span></p>
          <p>服务金融机构</p>
        </div>
      </el-col>
      <el-col :span="8"><div class="grid-content bg-purple">1</div></el-col>
      <el-col :span="8"><div class="grid-content bg-purple">1</div></el-col>
    </el-row>
    <!-- <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <div class="card-panel" >
        <div class="card-panel-description">
          <div class="card-panel-text">
            New Visits
          </div>
          <count-to :start-val="0" :end-val="102400" :duration="2600" class="card-panel-num" />
        </div>
      </div>
    </el-col> -->
  </el-row>
</template>

<script>
import CountTo from 'vue-count-to'

export default {
  components: {
    CountTo
  },
  methods: {
    handleSetLineChartData(type) {
      this.$emit('handleSetLineChartData', type)
    }
  }
}
</script>

<style lang="less" scoped>
.panel-group {
  width: 94%;
  background: #2e3359;
  margin: 10px auto;
  height: 249px;
  border-radius: 4px;
  color: #fff;
  h4{
    text-align: left;
    margin-left: 10px;
    font-weight: normal;
    font-size: 14px;
    color: #fff;
  }
  .card-panel {
    height: 496px;
    cursor: pointer;
    font-size: 12px;
    position: relative;
    overflow: hidden;
    color: #666;
    background: #fff;
    box-shadow: 4px 4px 40px rgba(0, 0, 0, .05);
    border-color: rgba(0, 0, 0, .05);
    &:hover {
      .card-panel-icon-wrapper {
        color: #fff;
      }
      .icon-people {
         background: #40c9c6;
      }
      .icon-message {
        background: #36a3f7;
      }
      .icon-money {
        background: #f4516c;
      }
      .icon-shopping {
        background: #34bfa3
      }
    }
    
  }
}
</style>
