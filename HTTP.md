#HTTP
HTTP 超文本传输协议，详细规定了浏览器和万维网服务器之间的通信规则，约定。

##请求报文
重点是格式与参数
、、、

行      POST /s?ie=utf-8  HTTP/1.1
头      Host:aimhost.com
        Cookie:name=jx
        Content-type:application/x-www-form-urlencoded
        User-Agent:chorme 83
空行
体      username=admin&password=admin
、、、

#响应报文
、、、
行      HTTP/1.1 200 OK
头      Content-Type:text/html; charset=utf-8
        Content-length:2048
        content-encoding:gzip
空行
体      <html>
            <head></head>
            <body>
                <h1>test</h1>
            </body>
        </html>
、、、
