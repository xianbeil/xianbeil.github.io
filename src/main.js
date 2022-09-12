import Vue from 'vue'
import App from './App'
import router from './router'//自动扫描router目录下的配置

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,//配置路由
  components: { App },
  template: '<App/>'
});
