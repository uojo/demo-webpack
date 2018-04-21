// 解决ie9和一些低版本的高级浏览器对es6新语法的不支持
// import "babel-polyfill";
import Vue from 'vue'
// import VueResource from 'vue-resource'

// 全局样式引入
import '@/styles/index.css'
// 入口视图
import app from '@/app.vue'

// 全局错误句柄
Vue.config.errorHandler = function(err, vm) {
  // console.warn(err,vm);
}

// request json数据
// Vue.use(VueResource)

new Vue({
  // router: routerInit(store),
  el: '#app',
  render: h => h(app)
})

if ( process.env.NODE_ENV === 'development' ) {
  Vue.config.devtools = true
  Vue.config.productionTip = false
}

if(module.hot){
  console.log('module.hot');
  module.hot.accept();
}