<template>
  <div class="panel-group">
    <p class="title">IT营运主视图</p>
	  <div class="echart" id="echart-line" :style="{width: '320px', height: '360px'}"></div>
  </div>
</template>

<script>
	import * as echarts from 'echarts';
	export default {
		data() {
			return {

			}
		},

		methods: {
			initChart() {
				let myChart = echarts.init(document.getElementById('echart-line'));
				var echartJson = {	
					animationDuration: 1500,
					"series": [{
						"edgeLabel": {
							"normal": {
								"formatter": "{c}",
							}
						},
						
						"layout": "none",
						"roam": true,
						edgeSymbol: ['arrow', 'arrow'],
						"label": {
							"normal": {
								"show": false, //是否显示文字
								"position": "bottom",
							}
						},
						"type": "graph",
						"symbolSize": 200,
						'lineStyle': { //线的样式
							'normal': {
								opacity: .9,
								curveness: 0,
								color: '#4fffd4',
								type: 'solid',
							}
						},
					}],
					"tooltip": {
						"show": false, //鼠标经过提示文字
					}
				};
				loadEcharts(echartJson);

				// 关系链数据
				var links = [{
						"source": "c",
						"target": "xg"
					},
					{
						"source": "c",
						"target": "tz"
					},
					{
						"source": "c",
						"target": "ky"
					},
					{
						"source": "c",
						"target": "pj"
					},
					{
						"source": "tz",
						"target": "ky"
					},
					{
						"source": "ky",
						"target": "pj"
					}
				];

				// 数据
				var map = [{
						"symbolSize": 100,
						"symbol": require("../assets/c.png"),
						"id": "c",
						x: 200,
						y: 300,
					},
					{
						"symbol": require("../assets/tz.png"),
						"symbolSize": 80,
						"id": "tz",
						x: 100,
						y: 200
					},
					{
						"symbol": require("../assets/xg.png"),
						"symbolSize": 80,
						"id": "xg",
						x: 100,
						y: 400
					},
					{
						"symbol": require("../assets/ky.png"),
						"symbolSize": 80,
						"id": "ky",
						x: 300,
						y: 200
					},
					{
						"symbol": require("../assets/pj.png"),
						"symbolSize": 80,
						"id": "pj",
						x: 300,
						y: 400
					}
				];
				pubdata(map);

				function loadEcharts(echartJson) {
					var option = echartJson;
					if (option && typeof option === "object") {
						myChart.setOption(option, true);
					}
				};

				function getImgData(imgSrc) {
					var fun = function(resolve) {
						const canvas = document.createElement('canvas');
						const contex = canvas.getContext('2d');
						const img = new Image();
						img.crossOrigin = '';
						img.onload = function() {
							//设置图形宽高比例
							var center = {
								x: img.width / 2,
								y: img.height / 2
							};
							var diameter = img.width; //半径
							canvas.width = diameter;
							canvas.height = diameter;
							contex.clearRect(0, 0, diameter, diameter);
							contex.save();
							contex.beginPath();
							var radius = img.width / 2+20;
							//contex.arc(radius, radius, radius, 0, 2 * Math.PI); //画出圆
							//contex.clip(); //裁剪上面的圆形
							contex.drawImage(img, center.x - radius, center.y - radius, diameter+20, diameter+60, 0, 0,
								diameter, diameter); // 在刚刚裁剪的园上画图
							contex.restore(); // 还原状态
							resolve(canvas.toDataURL('image/png', 1))
						}
						img.src = imgSrc;
					}

					var promise = new Promise(fun);

					return promise
				}

				function pubdata(json) {
					var androidMap = json;
					var picList = []; //获取出全部图片
					for (var i = 0; i < androidMap.length; i++) {
						//把图片路径转成canvas 
						let p = getImgData(androidMap[i].symbol);
						picList.push(p);
					};

					Promise.all(picList).then(function(images) {
						//取出base64 图片 然后赋值到jsondata中
						for (var i = 0; i < images.length; i++) {
							var img = "image://" + images[i];
							androidMap[i].symbol = img;
						};
						// 把数据设置到Echart中data

						myChart.setOption({
							series: [{
								data: androidMap,
								links: links
							}]
						})
					})
				};

				//option && myChart.setOption(option);

				//随着屏幕大小调节图表
				window.addEventListener("resize", () => {
					getchart.resize();
				});
			},

		}

	}
</script>
<style lang="less" scoped>
    .panel-group {
      width: 90%;
      background: #2e3359;
      margin: 10px auto;
      padding-left: 20px;
      height: 400px;
      border-radius: 4px;
      color: #fff;
      .title{
        font-size: 14px;
      }
    }
</style>