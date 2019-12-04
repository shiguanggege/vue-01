// 导入系统的模块包
import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
Vue.prototype.$http=axios

// 创建的全局过滤器
Vue.filter('filterPrice',function(val){
  return '$' + val;
})

//创建全局组件
import VHeader from '@/common/VHeader';
// Vue.component(VHeader.name,VHeader)
console.log(VHeader);


Vue.component(VHeader.name,VHeader)

const bus = new Vue()
 Vue.prototype.$bus=bus

new Vue({
  render: h => h(App),
}).$mount('#app')
