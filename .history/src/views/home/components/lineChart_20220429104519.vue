<template>
<div class="card">
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>中央国债数据可视化</span>
    </div>
    <div v-for="o in 4" :key="o" class="text item">
      <span @click="goCharts()">{{'图表 ' + o }}</span>
    </div>
  </el-card>
</div>
</template>