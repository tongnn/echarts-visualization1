<template>
<div>
  <el-row  class="panel-group">
    <el-row >
      <h4><span class="title-icon"></span><span>中债运营数据概览</span></h4>
      <div v-for="(item,index) in panelGroup" :key="index">
        <el-col :span="item.span" >
          <div class="grid-content bg-purple">
            <p>
              <count-to v-if="index!= 1&&index!= 4&&index!= 8" :start-val="0" :end-val="item.num" :duration="2000" class="card-panel-num" />
              <span v-else class="card-panel-num">{{item.num}}</span>
              <span>{{item.type}}</span>
              </p>
            <p>{{item.typeTitle}}</p>
          </div>
        </el-col>
      </div>
    </el-row>
    
  </el-row>
  <el-row class="panel-box">
    <el-col :span="12" v-for="(item,i) in panleList" :key="i">
      <div class="box">
        <h4><span class="title-icon"></span><span>{{item.title}}</span><span></span></h4>
        <p><img :src="srcImg1">
           <count-to :start-val="0" :end-val="item.num" :duration="2000" class="card-panel-num num" />
          <span class="num_type">{{item.type}}</span>
        </p>
        <p><img :src="srcImg2">
          <span class="num">{{item.forehead}}</span>
          <span class="num_type">{{item.typeF}}</span>
        </p>
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
      
  },
}
</script>

<style lang="less" scoped>
 @import "../../../assets/css/index.less";
.panel-group {
  width: 94%;
  background: #2e3359;
  margin: 10px auto 0 auto;
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
  margin: 0 auto;
  .el-col{
    color: #fff;
    margin:10px 0 0 0;
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
       p:nth-child(3){
        .num{
          line-height: 30px;
          font-size: 16px;
          margin-right:7px ;
          color: #ffc119;
        }
      }
    }
  }
  .el-col:nth-child(2n){
    .box{
      margin-left:5%;
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
