<template>
<div>
  <el-row  class="panel-group">
    <el-row >
      <h4><span class="title-icon"></span><span>公司项目产品情况</span></h4>
       <el-col :span="24" >
         <p class="">截止2022年3月，
          在建项目共计<count-to :start-val="0" :end-val="67" :duration="2000" class="card-panel-num num" />,
          其中S类项目<span>4</span>个,
          A类项目<span>22</span>个,
          B类项目<span>18</span>个,C类项目<span>22</span>个,优化类项目<span>1</span>个。
         </p>
      </el-col>
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
