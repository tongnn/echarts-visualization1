import * as echarts from 'echarts/core';
require('echarts/theme/macarons') // echarts theme
import { debounce } from '@/utils'
const options={
    mounted() {
        this.initChart()
        this.__resizeHandler = debounce(() => {
          if (this.chart) {
            this.chart.resize()
          }
        }, 100)
        window.addEventListener('resize', this.__resizeHandler)
      },
      beforeDestroy() {
        if (!this.chart) {
          return
        }
        window.removeEventListener('resize', this.__resizeHandler)
        this.chart.dispose()
        this.chart = null
      },
    methods: {
        initChart() {
          this.chart = echarts.init(this.$el, 'macarons')
    
          this.chart.setOption({
            tooltip: {
              trigger: 'item',
              formatter: '{a} <br/>{b} : {c} ({d}%)'
            },
            legend: {
              left: 'center',
              bottom: '10',
              data: ['Industries', 'Technology', 'Forex', 'Gold', 'Forecasts']
            },
            calculable: true,
            series: [
              {
                name: 'WEEKLY WRITE ARTICLES',
                type: 'pie',
                roseType: 'radius',
                radius: [15, 95],
                center: ['50%', '38%'],
                data: [
                  { value: 320, name: 'Industries' },
                  { value: 240, name: 'Technology' },
                  { value: 149, name: 'Forex' },
                  { value: 100, name: 'Gold' },
                  { value: 59, name: 'Forecasts' }
                ],
                animationEasing: 'cubicInOut',
                animationDuration: 2600
              }
            ]
          })
        }
      }
}
export default options