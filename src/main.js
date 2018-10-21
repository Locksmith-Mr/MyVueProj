// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 引入Element
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 引入store
// import store from './store/index.js';
// 引入axios;
import axios from 'axios'
import $ from 'jquery';

Vue.use(ElementUI)


Vue.prototype.$axios = axios

Vue.config.productionTip = false
Vue.component('remote-script', {
    render: function(createElement) {
        var self = this;
        return createElement('script', {
            attrs: {
                type: 'text/javascript',
                src: this.src,
            },
            on: {
                load: function(event) {
                    self.$emit('load', event);
                },
                error: function(event) {
                    self.$emit('error', event);
                },
                readystatechange: function(event) {
                    if (this.readyState == 'complete') {
                        self.$emit('load', event);
                    }
                },
            },
        });
    },

    props: {
        src: {
            type: String,
            required: true,
        },
    },
});

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,

    components: { App },
    template: '<App/>'
})