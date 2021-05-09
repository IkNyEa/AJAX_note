const express = require('express');


const app = express();

app.get('/home', (request, response) => {
    response.sendFile(__dirname + '/index.html');
})

app.listen(9000, () => {
    console.log('服务已经启动');
})