<template>
<div class="card">
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>中央国债数据可视化</span>
    </div>
    <div v-for="(item,i) in arrCharts" :key="i" class="text item">
      <span @click="goCharts(item)">{{item.title  }}</span>
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
        {path:'/lineChart',title:'图表1'},
        {path:'/lineChart',title:'图表2'},
        {path:'/lineChart',title:'图表3'},
      ]
    }
  },
  methods:{
    goCharts(item){
      this.$router.push({path:item.path})
    },
  }
}
</script>

<style lang="less" scoped>
</style>
