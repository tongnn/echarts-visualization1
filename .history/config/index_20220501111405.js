'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')

module.exports = {
    dev: {

        // Paths
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        proxyTable: {},

        // Various Dev Server settings
        host: 'localhost', // can be overwritten by process.env.HOST
        port: 8080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
        autoOpenBrowser: false,
        errorOverlay: true,
        notifyOnErrors: true,
        poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

        // Use Eslint Loader?
        // If true, your code will be linted during bundling and
        // linting errors and warnings will be shown in the console.
        useEslint: false,
        // If true, eslint errors and warnings will also be shown in the error overlay
        // in the browser.
        showEslintErrorsInOverlay: false,

        /**
         * Source Maps
         */

        // https://webpack.js.org/configuration/devtool/#development
        devtool: 'cheap-module-eval-source-map',

        // If you have problems debugging vue-files in devtools,
        // set this to false - it *may* help
        // https://vue-loader.vuejs.org/en/options.html#cachebusting
        cacheBusting: true,

        cssSourceMap: true
    },

    build: {
        // Template for index.html
        index: path.resolve(__dirname, '../dist/index.html'),

        // Paths
        assetsRoot: path.resolve(__dirname, '../dist'),
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',

        /**
         * Source Maps
         */

        productionSourceMap: true,
        // https://webpack.js.org/configuration/devtool/#production
        devtool: '#source-map',

        // Gzip off by default as many popular static hosts such as
        // Surge or Netlify already gzip all static assets for you.
        // Before setting to `true`, make sure to:
        // npm install --save-dev compression-webpack-plugin
        productionGzip: false,
        productionGzipExtensions: ['js', 'css'],

        // Run the build command with an extra argument to
        // View the bundle analyzer report after build finishes:
        // `npm run build --report`
        // Set to `true` or `false` to always turn it on or off
        bundleAnalyzerReport: process.env.npm_config_report
    },
    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    require("postcss-px-to-viewport")({
                        unitToConvert: "px", // 要转化的单位
                        viewportWidth: 750, // UI设计稿的宽度
                        // viewportHeight:1080, // UI设计高度可以不写
                        unitPrecision: 5, // 转换后的精度，即小数点位数
                        propList: [
                            "*"
                        ], // 指定转换的css属性的单位，*代表全部css属性的单位都进行转换
                        viewportUnit: "vw", // 指定需要转换成的视窗单位，默认vw
                        fontViewportUnit: "vw", // 指定字体需要转换成的视窗单位，默认vw
                        // landscapeUnit: 'vh',// 横屏时使用的单位 手机横屏使用
                        // landscapeWidth: 667,// 横屏时使用的视口宽度
                        selectorBlackList: [], // 指定不转换为视窗单位的类名
                        minPixelValue: 1, // 默认值1，小于或等于1px则不进行转换
                        mediaQuery: false, // 是否在媒体查询的css代码中也进行转换，默认false
                        replace: true, // 是否转换后直接更换属性值
                        // landscape: false, // 是否处理横屏情况
                        exclude: /(\/|\\)(node_modules)(\/|\\)/, // 设置忽略文件，用正则做目录名匹配
                    })
                ]
            }
        }
    }
}