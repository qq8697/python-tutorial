# HTTP
HTTP协议简介

## 实现简单http服务器（返回指定的页面）
```
import socket
import re
from urllib import parse


def service_client(client_socket, addr):
    print("为一个客户端进行服务")

    # 接收请求
    request = client_socket.recv(1024).decode("utf-8")  # byte -> str

    if (request):
        request_header_lines = request.splitlines()
        # for line in request_header_lines:
        #     print(line)

        # 获取请求头
        request_header = request_header_lines[0]
        # request_header = parse.unquote(request_header)  # url解码
        print("来自 %s:%s 的请求, 请求头是 %s" % (addr[0], addr[1], request_header))

        # 匹配请求内容
        # GET /index.html HTTP/1.1
        result = re.search(r"/([^ ]*)", request_header)
        file_name = "index.html"
        if result:
            tmp = result.group(1)
            if tmp != "":
                file_name = tmp
        print("请求的静态文件是： %s" % file_name)

        # 返回响应
        try:
            f = open("./" + file_name, "rb")
        except IOError:
            response = "HTTP/1.1 404 NOT FOUNT\r\n"  # 响应头
            response += "\r\n"  # 空行
            response += "<html><meta charset='UTF-8'><h1>"+file_name+" Not Found</h1></html>"  # 响应体
            client_socket.send(response.encode("utf-8"))
        else:
            html = f.read()
            f.close()

            response = "HTTP/1.1 200 OK\r\n"  # 响应头
            response += "\r\n"  # 空行
            client_socket.send(response.encode("utf-8"))
            client_socket.send(html)

    # 关闭套接字
    client_socket.close()
    print("服务结束")

def main():
    # 创建套接字
    tcp_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    # 设置当服务器先close，即服务器四次挥手之后资源能够立即释放
    # 这样就保证了下次运行程序时，可以正常启动
    # 否则会报 OSError:[Errno 98] Address already in ues
    tcp_socket.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR,1)
    # 绑定
    tcp_socket.bind(("", 9090))
    # 监听
    tcp_socket.listen(128)

    while True:
        # 等待新客户端连接
        client_socket, client_addr = tcp_socket.accept()
        # 为这个客户端服务
        service_client(client_socket, client_addr)

    # 关闭监听套接字
    tcp_socket.close()

if __name__ == "__main__":
    main()
```


## 使用多进程/多线程/协程gevent实现并发的Http服务器（讲并发的意义）
```
import multiprocessing
import threading
import gevent
from gevent import monkey
# monkey.patch_all()
...

def main():
    ...
    while True:
        # 等待新客户端连接
        client_socket, client_addr = tcp_socket.accept()
        # 为这个客户端服务
        p = multiprocessing.Process(target=service_client, args=(client_socket, client_addr))
        p.start()
        # 因为子进程已经复制了父进程的套接字等资源，所以父进程调用close不会将他们对应的这个链接关闭的
        client_socket.close()

        # t = threading.Thread(target=service_client, args=(client_socket, client_addr))
        # t.start()

        # g = gevent.spawn(service_client, client_socket, client_addr)

...
```
1. 创建子进程时会复制创建之前主进程所有的变量，`new_socket`和`socket` 指向同一个fd（文件描述符），该fd此时有2个引用，子进程 `socket.close` 后仍需主进程 `new_socket.close` ，该fd的引用为0，才能真正关闭socket。
2. 创建子线程时无需主进程 `new_socket.close`。
（TODO 哪里体现堵塞？ -> 总是进入服务等待新的连接）

## 使用单进程单线程、非堵塞方式实现并发的HTTP服务器（讲原理）
```
import socket
import time

def service_client(client_socket, addr, socket_list):
    # 设置为非阻塞后，...recv也会产生异常
    try:
        request = client_socket.recv(1024).decode("utf-8")
    except Exception as e:
        print("来自 %s:%s , 该客户端未发送数据" % (addr[0], addr[1]))
    else:
        if request:
            print("来自 %s:%s , 该客户端发送了数据" % (addr[0], addr[1]))
            try:
                f = open("./index.html", "rb")
            except:
                response = "HTTP/1.1 404 NOT FOUNT\r\n"  # 响应头
                response += "\r\n"  # 空行
                response += "<html><meta charset='UTF-8'><h1>File Not Found</h1></html>"  # 响应体
                client_socket.send(response.encode("utf-8"))
            else:
                html = f.read()
                f.close()

                response = "HTTP/1.1 200 OK\r\n"  # 响应头
                response += "\r\n"  # 空行
                client_socket.send(response.encode("utf-8"))
                client_socket.send(html)

            # 关闭套接字
            client_socket.close()
        else:
            print("来自 %s:%s , 该客户端发送数据为空，实际调用close" % (addr[0], addr[1]))
            client_socket.close()
            socket_list.remove(client_socket)

def main():
    # 创建套接字
    tcp_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    # 绑定
    tcp_socket.bind(("", 9090))
    # 监听
    tcp_socket.listen(128)
    # 设置套接字为非阻塞方式
    tcp_socket.setblocking(False)

    client_socket_list = list()
    while True:
        time.sleep(5)  # 为了演示 （用sleep减少print次数）

        # 等待新客户端连接
        # 设置为非堵塞后，如果accept时，恰巧没有客户端connect，那么accept会产生一个异常，所以需要try来进行处理
        try:
            client_socket, client_addr = tcp_socket.accept()
        except Exception as e:
            print("没有新的客户端连接")
        else:
            print("有新的客户端连接" , client_addr[0], client_addr[1])

            client_socket.setblocking(False)
            client_socket_list.append(client_socket)

        for client_socket in client_socket_list:
            service_client(client_socket, client_addr, client_socket_list)

        print(client_socket_list)

    # 关闭监听套接字
    tcp_socket.close()

if __name__ == "__main__":
    main()
```
1. 设置socket为非堵塞，那么没有连接或者连接后对方没有发送数据就会产生异常，而不是堵塞等待
2. list清除socket：首先判断recv方法是否产生异常，如果没有异常再判断是否有数据，如果数据为空（因为对方close）可清并关闭socket。


## 使用单进程单线程、非堵塞、长连接方式实现并发的HTTP服务器（讲原理）
// HTTP1.0 短连接，HTTP1.1 长连接
1. 客户端发送了数据的情况下删除socket.close语句
2. 使用 `Content-Length` 响应头标识响应内容的长度

```
...
    response = "HTTP/1.1 200 OK\r\n"  # 响应头
    response += "Content-Length:%d\r\n" % len(html)
   	...

# 关闭套接字
# client_socket.close()
...
```

