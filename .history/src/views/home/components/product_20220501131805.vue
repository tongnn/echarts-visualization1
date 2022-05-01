<template>
<div>
  <el-row  class="panel-group">
    <el-row >
      <h4><span class="title-icon"></span><span>中债运营数据概览</span></h4>
      <div v-for="(item,index) in detip.panelGroup" :key="index">
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
      srcImg1:require('@/assets/images/icon_zhishu@2x.png'),
      srcImg2:require('@/assets/images/icon_jine@2x.png'),
      }
  },
}
</script>

<style lang="less" scoped>
 @import "../../../assets/css/index.less";

</style>
