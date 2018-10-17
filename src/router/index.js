import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/views/testApi'
import taobao from '@/views/taobao'
import main from '@/views/main'
import login from '@/views/login';
import test from '@/views/test';





Vue.use(Router)

export default new Router({
    routes: [{
            path: '/testApi',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/testtaobao',
            name: 'taobao',
            component: taobao

        }, {
            path: '/',
            name: 'main',
            component: main
        }, {
            path: '/login',
            name: 'login',
            component: login
        },
        {
            path: '/test',
            name: 'test',
            component: test
        },



    ]
})