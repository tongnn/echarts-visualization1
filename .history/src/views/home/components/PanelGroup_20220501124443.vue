<template>
<div>
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
  <el-row class="panel-box">
    <el-col :span="12" v-for="(item,i) in panleList" :key="i">
      <div class="box">
        <h4><span class="title-icon"></span><span>{{item.title}}</span><span></span></h4>
        <p><img :src="srcImg1"><span class="num">{{item.num}}</span><span class="num_type">{{item.type}}</span></p>
        <p><img :src="srcImg2"><span class="num">{{item.forehead}}</span><span class="num_type">{{item.typeF}}</span></p>
      </div>
    </el-col>
    <el-col :span="12">
      <div class="box">
        <h4><span class="title-icon"></span><span>债券发行</span></h4>
      </div>
    </el-col>
  </el-row>
</div>

</template>

<script>
import CountTo from 'vue-count-to'

export default {
  components: {
    CountTo
  },
  data(){
    return{
      srcImg1:require('@/assets/images/icon_zhishu@2x.png'),
      srcImg2:require('@/assets/images/icon_jine@2x.png'),
      panleList:[
        {title:'债券托管情况',num:'14254',type:'只',forehead:'90',typeF:'万亿只'},
        ]
    }
  },
}
</script>

<style lang="less" scoped>
 @import "../../../assets/css/index.less";
.panel-group {
  width: 94%;
  background: #2e3359;
  margin: 10px auto;
  height: 249px;
  border-radius: 4px;
  color: #fff;
  overflow: hidden;
 
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
}
.panel-box {
  width: 94%;
  margin: 10px auto;
  .el-col{
    color: #fff;
    .box{
      background: #2e3359;
      height: 122px;
      border-radius: 4px;
      p{
        display: flex;
        padding-top:5px;
        img{
          width: 30px;
          height: 30px;
          margin-left:22px ;
          margin-right:7px ;
        }
        .num{
          line-height: 30px;
          font-size: 16px;
          margin-right:7px ;
          color: #ffff6a;
        }
        .num_type{
          line-height: 30px;
          color: #e6e7eb;
        }
      }
    }
  }
  .el-col:nth-child(1){
    .box{
      margin-right:3%;
    }
  }
  .el-col:nth-child(2){
    .box{
      margin-left:3%;
    }
  }
}
 h4{
    text-align: left;
    margin-left: 13px;
    font-weight: normal;
    font-size: 14px;
    color: #fff;
    line-height: 14px;
    padding: 18px 0 10px 0  ;
    display: flex;
    .title-icon{
      display: inline-block;
      width: 7px;
      height: 13px;
      margin-right:4px ;
      background: url('../../../assets/images/title-icon.png') no-repeat;
      background-size: 100% 100%;
    }
  }
</style>
