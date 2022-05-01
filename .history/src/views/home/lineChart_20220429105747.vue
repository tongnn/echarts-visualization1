<template>
<div class="box">
  <header>
    <h1>数据可视化-ECharts 虚拟数据</h1>
    <div class="showTime">当前时间：2020年8月<span></span></div>
  </header>
  <section class="mainbox">
    <div class="column">
      <div class="panel bar">
        <h2>
          柱状图-各行业程序员数量 <a href="javascript:;">2019</a>
          <a href="javacript:;"> 2020</a>
        </h2>
        <div class="chart"></div>
        <div class="panel-footer"></div>
      </div>
      <div class="panel line">
        <h2>折线图-学习变化</h2>
        <div class="chart"></div>
        <div class="panel-footer"></div>
      </div>
      <div class="panel pie">
        <h2>饼形图-工程师年龄分布</h2>
        <div class="chart"></div>
        <div class="panel-footer"></div>
      </div>
    </div>
    <div class="column">
      <div class="no">
        <div class="no-hd">
          <ul>
            <li>125811</li>
            <li>104563</li>
          </ul>
        </div>
        <div class="no-bd">
          <ul>
            <li>程序员需求人数</li>
            <li>程序员供应人数</li>
          </ul>
        </div>
      </div>
      <div class="map">
        <div class="chart"></div>
        <div class="map1"></div>
        <div class="map2"></div>
        <div class="map3"></div>
      </div>
    </div>
    <div class="column">
      <div class="panel bar1">
        <h2>柱状图-开发技能</h2>
        <div class="chart"></div>
        <div class="panel-footer"></div>
      </div>
      <div class="panel line1">
        <h2>折线图-公司人员流动</h2>
        <div class="chart"></div>
        <div class="panel-footer"></div>
      </div>
      <div class="panel pie1">
        <h2>饼形图-各地区程序员占比</h2>
        <div class="chart"></div>
        <div class="panel-footer"></div>
      </div>
    </div>
  </section>
</div>
</template>
<script>
export default {
  name: 'lineChart',
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