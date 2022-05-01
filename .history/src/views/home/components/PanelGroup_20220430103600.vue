<template>
  <el-row  class="panel-group">
    <el-row >
      <h4>总体数量统计</h4>
      <el-col :span="8">
        <div class="grid-content bg-purple">
          <p>
            <count-to :start-val="0" :end-val="4061" :duration="2600" class="card-panel-num" />
            <span>家</span>
            </p>
          <p>服务金融机构</p>
        </div>
      </el-col>
    </el-row>
    
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
    line-height: 14px;
    padding: 20px 0 10px 0  ;
  }
  .el-col{
    padding: 10px 0px 0 10px;
    p{
      padding: 5px 0;
    }
    .card-panel-num{
      color:#64fcfe;
      font-size: 16px;
      span{
        color: #fff;
        padding: 0 0 0 5px ;
        font-size: 12px;
      }
    }
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
