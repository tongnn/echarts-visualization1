<template>
<div>
   <el-row class="panel-box">
    <el-col :span="12" v-for="(item,i) in detip.panleList" :key="i">
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
import detip from '../../../mixin/detip'
export default {
  components: {
    CountTo
  },
  data(){
    return{
      detip,
      srcImg1:require('@/assets/images/icon_zhishu@2x.png'),
      srcImg2:require('@/assets/images/icon_jine@2x.png'),
      }
  },
}
</script>

<style lang="less" scoped>
 @import "../../../assets/css/index.less";

</style>
