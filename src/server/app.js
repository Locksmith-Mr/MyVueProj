//1.引入express模块
var express = require('express')
var www = require('./instest.js')
    // var api = require('./api');

//2.创建app对象
var app = express()
var ccc = www();

//定义简单路由
app.use('/', (req, res) => {
        res.send(ccc);
        console.log(ccc);
        console.log(ccc + '');
    })
    //定义服务启动端口
app.listen(3000, () => {
    console.log('app listening on port 3000.')
})