<template>
<div class="card">
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>卡片名称</span>
    </div>
    <div v-for="o in 4" :key="o" class="text item">
      <span @click="goCharts()">{{'列表内容 ' + o }}</span>
    </div>
  </el-card>
</div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
    }
  },
  methods:{
    goCharts(){
      this.$router.push()
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
