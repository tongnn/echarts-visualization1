<template>
<div>
   <el-row class="panel-box">
    <el-col :span="12" v-for="(item,i) in detip.clearList" :key="i">
      <div class="top_num">
        <p>
          <count-to :start-val="0" :end-val="item.num" :duration="2000" class="card-panel-num num" />
          <span class="num_type">{{item.type}}</span>
        </p>
        <p>
          <span class="num">{{item.forehead}}</span>
          <span class="num_type">{{item.typeF}}</span>
        </p>
      </div>
    </el-col>
  </el-row>
  <el-row  class="panel-group">
    <el-row >
      <h4><span class="title-icon"></span><span>银行间结算合同状态</span></h4>
      <div v-for="(item,index) in detip.clearContract" :key="index">
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
</div>

</template>

<script>
import CountTo from 'vue-count-to'
import detip from '../../../mixin/detip'
export default {
  components: {
    CountTo
  },
  data(){
    return{
      detip,
      srcImg1:require('@/assets/images/monery.png'),
      srcImg2:require('@/assets/images/penNum.png'),
      }
  },
}
</script>

<style lang="less" scoped>
 @import "../../../assets/css/index.less";

</style>
