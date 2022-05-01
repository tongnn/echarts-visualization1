<template>
  <div class="dashboard">
    <div id="pie1">
      <!-- 为 ECharts 准备一个具备大小（宽高）的 DOM -->
      <div :id="randomID" style="width: 45%; height: 200px"></div>
      <div class="down">
        <img class="imgs" src="~@/assets/images/down_small.png" alt="">
      </div>
    </div>
  </div>
  <!-- <div class="panel-group">
  </div> -->
</template>

<script>

export default {
  data() {
    return {
      randomID: '',
    }
  },
  created() {
  },
  mounted() {
    this.forId(1)
    this.$nextTick(()=>{
      this.initData()
    })
  },
  methods: {
    forId(index){
      this.randomID = "forid_" +index
    },
    //初始化数据
    initData() {
      // 基于准备好的dom，初始化echarts实例
      // this.randomID = 'dashboard' + Math.random()*(10)
      console.log(this.randomID)
      //    var myChart = this.$echarts.init(document.getElementById('main1'));
      var myChart = this.$echarts.init(document.getElementById(this.randomID));
      // 绘制图表
      var option = {
        series: [
          {
            type: 'gauge',
            radius:'50%',
            center: ['50%', '60%'],
            startAngle: 220,
            endAngle: -40,
            min: 0,
            max: 1.27,
            // splitNumber: 12,
            roundCap: true,
            itemStyle: {
              color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [
                { offset: 0, color: '#32C5FF' }, //柱图渐变色
                { offset: 0.5, color: '#FEDB65' }, //柱图渐变色
                { offset: 1, color: '#FA6400' } //柱图渐变色
              ]),
            // shadowColor: '#297FFE', 进度条阴影
            // shadowBlur: 10,
            // shadowOffsetX: 2,
            // shadowOffsetY: 2
          },
            progress: {
              // show:false,
              roundCap: true,
              show: true,
              width: 12
            },
            pointer: {
              show: false
            },
            axisLine: {
              lineStyle: {
                width: 8,
                // color: '#FF6E76'
              }
            },
            axisTick: {// 刻度设置
              distance: -25,
              length: 1,
              splitNumber: 5,
              type: 'dotted',
              lineStyle: {
                width: 4,
                // border: 1px dash
                color: '#32C5FF',
              }
            },
            splitLine: { // 分割线设置
              // show: false,
              distance: -28,
              length: 8,
              type: "dotted", //线的类型, 默认 solid。 此外还有 dashed,dotted
              lineStyle: {
                width: 1,
                color: '#999',
              }
            },
            axisLabel: {
              show: false,
              distance: -20,
              color: '#999',
              fontSize: 20
            },
            anchor: {
              // show: true
            },
            title: {
              fontSize: 14,
              show: true,
              offsetCenter: [0,"100%"],
              //相对于仪表盘中⼼的偏移位置，数组第⼀项是⽔平⽅向的偏移，第⼆项是垂直⽅向的偏移。可以是绝对的数
                // 值，也可以是相对于仪表盘半径的百分⽐。
              textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                fontWeight: 'bolder',
                // fontStyle: 'italic',
              },
              color: "#66FFFF", // ⽂字的颜⾊,默认 #333。
            },
            detail: {
              valueAnimation: true,
              width: '60%',
              lineHeight: 50,
              borderRadius: 8,
              offsetCenter: [0, '-10%'],
              fontSize: 14,
              // formatter: function(value, name){
              //   return `${value} ${name}`
              // },
              color: '#fff'
            },
            data: [
              {
                value: 1.27,
                name: 'PUE',
              }
            ]
          },
        ]
      };
      myChart.setOption(option);
    },
  },
};
</script>
<style lang="less" scoped>
.dashboard{
  position: relative;
  .down{
    width: 45%;
    position: absolute;
    bottom: 5%;
    .imgs {
      width: 100%;
    }
  }
}
</style>