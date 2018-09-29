// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//引入Element
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use (ElementUI);
//引入store
import store from './store/index.js';
//引入axios;
import axios from 'axios'; 
Vue.prototype.$axios = axios;
// 引用API文件
// import api from './api/index.js';
// // 将API方法绑定到全局
// Vue.prototype.$api = api;


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
