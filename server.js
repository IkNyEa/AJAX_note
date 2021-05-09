//1.引入express
const { json } = require('body-parser');
const express = require('express');


//2.创建应用对象
const app = express();

//3.创建路由规则
//request是对请求报文的封装
//response 是对响应报文的封装
app.get('/JS/server', (request, response) => {
    //设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    //设置响应体
    response.send('Hello Express!');
});


//post方法
/*app.post('/JS/server', (request, response) => {
    //设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    //设置响应体
    response.send('Hello POST Express!');
});
*/


//任意类型的请求方式都可以解析
app.all('/JS/server', (request, response) => {
    //设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    //设置响应体

    response.setHeader('Access-Control-Allow-Headers', '*'); //允许自定义头
    response.send('Hello ALL Express!');
});

app.all('/json-server', (request, response) => {
    //设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');

    response.setHeader('Access-Control-Allow-Headers', '*'); //允许自定义头
    //设置响应体
    const data = { name: 'jx' };
    let str = JSON.stringify(data);

    response.send(str);
});


//针对IE缓存

app.get('/IE', (request, response) => {
    //设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    //设置响应体
    response.send('Hello IE!');
});



//延时响应

app.all('/delay', (request, response) => {
    //设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Headers', '*');
    response.setHeader('Access-Control-Allow-Origin', '*');
    //设置响应体

    setTimeout(() => {
        response.send('delay');
    }, 1000); //设置3秒延迟

});



//jquery ajax请求
//get
app.get('/jquery-server', (request, response) => {
    //设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    //设置响应体
    const date = { name: 'jx' };

    response.send(JSON.stringify(date));
});
//post
app.post('/jquery-server', (request, response) => {
    //设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    //设置响应体

    const date = { name: 'jx' };
    response.send(JSON.stringify(date));
});

//jquery发送ajax请求通用方法
app.all('/jquery-server', (request, response) => {
    //设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    //设置响应体

    const data = { name: 'jx' };
    response.send(JSON.stringify(date));
});





//axios 服务
app.all('/axios-server', (request, response) => {
    //设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Headers', '*');
    response.setHeader('Access-Control-Allow-Origin', '*');
    //设置响应体


    response.send('axios ajax!');
});

//fetch服务
app.all('/fetch-server', (request, response) => {
    //设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Headers', '*');
    response.setHeader('Access-Control-Allow-Origin', '*');
    //设置响应体
    const data = { name: 'jx' };

    response.send(JSON.stringify(data));
});


//jsonp服务---用户名检测是否存在

app.all('/check-username', (request, response) => {
    //设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Headers', '*');
    response.setHeader('Access-Control-Allow-Origin', '*');
    //设置响应体
    const data = {
        exist: 1,
        msg: '用户名已经存在'
    };
    let str = JSON.stringify(data);
    response.end(`handle(${str})`);
});


//jquery发送jsonp服务

app.all('/jquery-jsonp-server', (request, response) => {
    //设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Headers', '*');
    response.setHeader('Access-Control-Allow-Origin', '*');
    //设置响应体
    const data = {
        name: 'cdu',
        msg: 'university'
    };
    let str = JSON.stringify(data);
    let cb = request.query.callback;
    response.end(`${cb}(${str})`);
});
//4.监听端口启动服务
app.listen(8000, () => {
    console.log('服务已经启动，8000端口监听中....');
});