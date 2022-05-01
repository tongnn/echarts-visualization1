import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index'
import lineChart from '@/views/home/lineChart'
import clearSet from '@/views/clearSet/clearview'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'index',
            component: index
        },
        {
            path: '/lineChart',
            name: 'lineChart',
            component: lineChart
        }, {
            path: '/clearSet',
            name: 'clearSet',
            component: lineChart
        }
    ]
})