<template>
<div class="card">
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>中央国债数据可视化</span>
    </div>
    <div v-for="(item,i) in arrCharts" :key="i" class="text item">
      <span @click="goCharts(item)">{{title + o }}</span>
    </div>
  </el-card>
</div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      arrCharts:[
        {path:'/lineChart',title:'图标'}
      ]
    }
  },
  methods:{
    goCharts(){
      this.$router.push({path:'/lineChart'})
    },
  }
}
</script>

<style lang="less" scoped>
.card{
  width: 100%;
  .box-card{
    width: 100%;
  }
}
.text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 480px;
  }
</style>
