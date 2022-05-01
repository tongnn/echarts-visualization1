<template>
  <el-row  class="panel-group">
    <el-row >
      <h4><span class="title-icon"></span><span>中债运营数据概览</span></h4>
      <el-col :span="7">
        <div class="grid-content bg-purple">
          <p>
            <count-to :start-val="0" :end-val="4061" :duration="2000" class="card-panel-num" />
            <span>家</span>
            </p>
          <p>服务金融机构</p>
        </div>
      </el-col>
      <el-col :span="10">
        <div class="grid-content bg-purple">
          <p>
            <span class="card-panel-num" >3.7</span>
            <span>万户</span>
            </p>
          <p>开立机构投资账户</p>
        </div>
      </el-col>
      <el-col :span="7">
        <div class="grid-content bg-purple">
          <p>
            <count-to :start-val="0" :end-val="2800" :duration="2000" class="card-panel-num" />
            <span>万户</span>
            </p>
          <p>连接个人投资者</p>
        </div>
      </el-col>
      <el-col :span="7">
        <div class="grid-content bg-purple">
          <p>
            <count-to :start-val="0" :end-val="90" :duration="2000" class="card-panel-num" />
            <span>余万户</span>
            </p>
          <p>托管债券</p>
        </div>
      </el-col>
      <el-col :span="10">
        <div class="grid-content bg-purple">
          <p>
            <span class="card-panel-num" >5.5</span>
            <span>万亿元</span>
            </p>
          <p>年支持债券发行量</p>
        </div>
      </el-col>
      <el-col :span="7">
        <div class="grid-content bg-purple">
          <p>
            <count-to :start-val="0" :end-val="525" :duration="2000" class="card-panel-num" />
            <span>万亿元</span>
            </p>
          <p>年结算量</p>
        </div>
      </el-col>
      <el-col :span="7">
        <div class="grid-content bg-purple">
          <p>
            <count-to :start-val="0" :end-val="1367" :duration="2000" class="card-panel-num" />
            <span>家</span>
            </p>
          <p>服务境外机构</p>
        </div>
      </el-col>
      <el-col :span="10">
        <div class="grid-content bg-purple">
          <p>
            <count-to :start-val="0" :end-val="341" :duration="2000" class="card-panel-num" />
            <span>家（世行、IMF）</span>
            </p>
          <p>境外央行、主权财富中心</p>
        </div>
      </el-col>
      <el-col :span="7">
        <div class="grid-content bg-purple">
          <p>
            <span class="card-panel-num" >2.4</span>
            <span>万亿元</span>
            </p>
          <p>持债规模</p>
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
}
</script>

<style lang="less" scoped>
 @import "~@/assets/css/index.less";
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
    display: flex;
    .title-icon{
      display: inline-block;
      .p
      // width : 60/@vw;
      // width: 10px;
      height: 20px;
      background: url('../../../assets/images/title-icon.png') no-repeat;
      background-size: 100% 100%;
    }
  }
  .el-col{
    padding-top:10px;
    padding-left:10px;
    // .px2vw(padding-left,10px);
    p{
      padding: 5px 0;
    }
    .card-panel-num{
      color:#64fcfe;
      font-size: 16px;
      span{
        color: #fff;
        padding-left:5px;
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
