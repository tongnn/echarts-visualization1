<template>
  <div class="panel-group">
    <div class="pie">
      <div id="pie1">
        <!-- 为 ECharts 准备一个具备大小（宽高）的 DOM -->
        <div id="main1" style="float: left; width: 100%; height: 300px"></div>
        
      </div>
    </div>
  </div>
</template>

<script>
// 引入基本模板
let echarts = require("echarts/lib/echarts");
// 引入饼状图组件
require("echarts/lib/chart/pie");
// 引入提示框和title组件
require("echarts/lib/component/tooltip");
require("echarts/lib/component/title");
require("echarts/lib/component/legend");

export default {
  created() {},
  mounted() {
    this.initData();
  },
  methods: {
    //初始化数据
    initData() {
      // 基于准备好的dom，初始化echarts实例
      //    var myChart = this.$echarts.init(document.getElementById('main1'));
      var myChart = echarts.init(document.getElementById("main1"));
      // 绘制图表
      var option = {
        title: {
          //   text: "债券托管量品种结构", //主标题
          //   subtext: '纯属虚构',//副标题
          x: "center", //x轴方向对齐方式
        },
        tooltip: {
          trigger: "item",
          position:'right',
        //   "{a} <br/>{b} : {c} ({d}%)"
          formatter: "{b} : {c} ",
        },
        legend: {
          orient: "vertical",
          right: 110,
          icon:'circle',
          padding: [60, -90, 0, 0],
          textStyle: {
            //图例文字的样式
            color: "#fff",
            fontSize: 10,
          },
          formatter: function (name) {
            // 获取legend显示内容
            let data = option.series[0].data;
            let total = 0;
            let tarValue = 0;
            for (let i = 0, l = data.length; i < l; i++) {
              total += data[i].value;
              if (data[i].name == name) {
                tarValue = data[i].value;
              }
            }
            let p = ((tarValue / total) * 100).toFixed(2);
            return name + " " + " "  + p + "%" ;
            // return name + " " + " "  + <span class="percent"> + p + "%" + </sapn>·;
          },
          data: [
            "地方政府债",
            "记账式国债",
            "政策性银行债",
            "二级资本工具",
            "其它债券",
          ],
        },
        series: [
          {
            name: "",
            type: "pie",
            radius: ["50%",'50']    ,
            center: ["30%", "40%"],
            label: {
              show: false,
            },
            data: [
              {
                value: 35.43,
                name: "地方政府债",
                itemStyle: { color: "#25ADFC" },
              },
              {
                value: 24.16,
                name: "记账式国债",
                itemStyle: { color: "#5E6DFC" },
              },
              {
                value: 22.57,
                name: "政策性银行债",
                itemStyle: { color: "#48D69B" },
              },
              {
                value: 14.45,
                name: "二级资本工具",
                itemStyle: { color: "#FEDA62" },
              },
              {
                value: 3.39,
                name: "其它债券",
                itemStyle: { color: "#CF49C2" },
              },
            ].sort(function (a, b) {
              return a.value + b.value;
            }),
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
      };
      myChart.setOption(option);
    },
  },
};
</script>
<style lang="less" scoped>
.panel-group {
  width: 94%;
  background: #2e3359;
  margin: 10px auto;
  height: 249px;
  border-radius: 4px;
  color: #fff;
}
.percent{
    color: #86FFFF;
}
</style>