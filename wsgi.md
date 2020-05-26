# WSGI
WSGI（web server gateway interface）Web 服务器网关接口，是为 python 语言定义的 web 服务器和 web 应用程序（或框架）之间的接口，允许开发者将选择web服务器和web框架分开。

web服务器：
- [Gunicorn](https://gunicorn.org/) Python WSGI HTTP Server for UNIX
- [nginx](http://nginx.org/en/)/[uWSGI](https://uwsgi-docs-zh.readthedocs.io/zh_CN/latest/)

web框架：
- [Django](https://www.djangoproject.com/)
- [Flask](https://flask.palletsprojects.com/en/1.1.x/)

## 基于 WSGI 的一次请求的完整过程
![请求动态页面的过程](./images/wsgi.PNG)
1. 浏览器向服务器发起请求
2. web服务器**通过wsgi调用应用程序框架的`application`方法**，传入`env`和`set_response_header`参数 -> 后者用于**设置状态码和header**
3. 在框架的`application`方法中，做查询数据库等操作 -> **返回body数据**
4. web服务器返回响应给浏览器

## 为应用程序定义 WSGI 接口
为 web 应用定义一个 `application` 函数，即可响应支持 WSGI 规范的服务器的 http 请求（名称可任意取，不一定是 `application`）

编写 app.py 如下：
```
def application(env, set_response_header):
    set_response_header('200 OK', [('Content-Type', 'text/html')])
    return b'Hello World!'
```

如上，**`application` 函数包含两个参数，`env`：包含所有 http 请求信息的字典对象，`set_response_header`：设置 http 状态码和响应头的函数；`application` 函数的返回值作为 http 响应体**。

整个 `application` 函数没有涉及任何解析 http 的代码，即把 web 服务器解析部分和应用程序逻辑部分进行了解耦，开发者只需专注与业务逻辑的开发。

## 运行 web 服务器
**`application` 函数需由支持 WSGI 规范的 web 服务器来调用**，python 内置 wsgiref 模块，是用 python 实现的 WSGI 服务器参考实现（“参考实现”：符合标准，但不考虑效率，仅供开发和测试使用）。

同一目录下新建 server.py，使用 wsgiref 创建 web 服务器：
```
from wsgiref.simple_server import make_server
from app import application

# 创建服务器
httpd = make_server('', 8000, application)
# 监听请求
httpd.serve_forever()
```

wsgiref 要求 `application` 函数的返回值为列表，所以修改 app.py 如下：
```
def application(env, set_response_header):
    set_response_header('200 OK', [('Content-type', 'text/plain; charset=utf-8')])
    return [b'Hello World!']
```

执行 `python server.py` 启动 web 服务，它会调用我们应用程序的 `application` 函数，打开浏览器 localhost:8000 可以看到由应用服务返回的响应内容，实际开发中，可以在 `application` 函数中根据请求地址（路由）分发给不同的控制器（视图函数）处理，根据请求动态的返回内容。

# 参考文档
1. [WSGI](https://wsgi.readthedocs.org/)
2. 官网 [wsgiref](https://docs.python.org/3.5/library/wsgiref.html?highlight=wsgi#module-wsgiref)