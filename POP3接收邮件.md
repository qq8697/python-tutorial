# POP3 接收邮件
python 内置模块 `poplib`，实现了 POP3 协议，负责收取邮件；
`email` 负责解析邮件。

POP3 协议收取的不是可直接阅读的邮件，而是邮件的原始文本，这和 SMTP 协议发送邮件是一致的，其发送的也是编码后的文本；使用 email 模块提供的类解析 POP3 收取的文本，使其可阅读。所以，收取邮件共需两步：
1. 用 `poplib` 把邮件的原始文本下载到本地
2. 用 `email` 解析原始文本后自定义输出格式

## 1. POP3 下载邮件
```
from email.parser import Parser
import poplib

# 邮箱地址, 授权码和POP3服务器地址:
email_addr = input('From: ')
password = input('Password: ') # 授权密码
pop3_server_host  = input('SMTP server host: ') # pop.163.com 110
pop3_server_port  = input('SMTP server port: ')

# 创建 pop 连接
pop = poplib.POP3(pop3_server_host, pop3_server_port)
# 打印请求信息
pop.set_debuglevel(1)

# 发送身份信息:
pop.user(email_addr)
# 发送密码
pop.pass_(password)

# 邮件计数和邮箱大小:
# print('邮件计数: %s. 邮箱大小: %s' % pop.stat())

# 返回邮件列表
resp, mails, octets = pop.list()
# 可以查看返回的列表类似[b'1 13019', b'2 143642']
print(mails)

# 获取最新一封邮件, 注意索引从1开始:
index = len(mails)
# Retrieve 拉取指定编号的 message，并设置状态为已看 返回 (response, ['line', ...], octets)
resp, lines, octets = pop.retr(index)

# lines存储了邮件的原始文本的每一行,字符串拼接获得整个邮件的原始文本:
msg_content = b'\r\n'.join(lines).decode('utf-8')

# 解析邮件:
msg = Parser().parsestr(msg_content)
print(msg)

# 关闭连接: 
pop.quit()
```
打印的与 pop 服务器交互信息如下：
```
*cmd* 'USER xxx'
*cmd* 'PASS yyy'
*cmd* 'LIST'
[b'1 13019', b'2 143642', b'3 143630']
*cmd* 'RETR 3'
Received: from qq.com (unknown [183.3.255.49])
...
*cmd* 'QUIT'
```

1. `POP3` 对象
	1. `user()` 发送 user 信息
	2. `pass_()` 发送授权码
	2. `stat()` 获取邮箱状态，包括邮件计数和邮箱大小
	3. `list()` 请求 message 列表，返回 `(response, ['mesg_num octets', ...], octets)`
	4. `retr()` 拉取指定编号的 message，并设置已看状态，返回 `(response, ['line', ...], octets)`
	5. `quit()` 在调用之前，服务器上的邮箱将被锁定。
1. `Parser` 对象
	1. `parsestr()` 解析string object
	2. `parse()` 解析file-like object

登录网页查看邮件，会有如图所示的标志，表示邮件“已被邮件客户端，其他邮箱代收或手机等通过POP3协议收取”
![](./images/pop.PNG)

## 2. email 解析邮件
打印的 `message` 对象内容如下，需要从其中解析出邮件内容、主题、发件人和收件人信息：
```
Received: from qq.com (unknown [183.3.255.49])
...
From: "=?utf-8?B?5q2m5a6P5paMIGhhdmVmdW4gMjAxNSA6LUQ=?=" <zzz@qq.com>
To: "=?utf-8?B?eHjnrqHnkIblkZg=?=" <xxx@163.com>
Subject: =?utf-8?B?5Zue5aSN77yaeHjns7vnu5/mhJ/osKLmgqjnmoQ=?=
...
```

`Parser` 模块的 `parsestr` 方法将邮件解析为 `message` 对象，可能是一个 `MIMEMultipart` 对象，包含其它 `message` 对象，所以需要递归的处理，新增以下解析代码：
```
from email.header import decode_header
from email.utils import parseaddr

def print_msg(msg, indent=0):
    if indent == 0:
        for header in ['From', 'To', 'Subject']:
            value = msg.get(header, '')
            if value:
                if header=='Subject':
                    value = decode_str(value)
                else:
                    hdr, addr = parseaddr(value)
                    name = decode_str(hdr)
                    value = u'%s <%s>' % (name, addr)
            print('%s%s: %s' % ('  ' * indent, header, value))
    if (msg.is_multipart()):
        parts = msg.get_payload()
        for n, part in enumerate(parts):
            print('%spart %s' % ('  ' * indent, n + 1))
            print('%s----' % ('  ' * indent))
            print_msg(part, indent + 1)
    else:
        content_type = msg.get_content_type()
        if content_type=='text/plain' or content_type=='text/html':
            content = msg.get_payload(decode=True)
            charset = guess_charset(msg)
            if charset:
            	content = content.decode(charset)
            print('%sText: %s' % ('  ' * indent, content))
        else:
            print('%sAttachment: %s' % ('  ' * indent, content_type))
```
1. `Message` 对象
	1. `is_multipart` 方法，返回 `False` 表示 `payload` 是一个 string object，返回 `True` 表示 `message` 是 `Message` 或其子类对象组成的列表
	1. `get_payload` 方法，返回当前 `payload`，是 Message 或其子类对象组成的列表或者string object

主题、发件人和收件人名称需要 `decode_header` 解码，新增以下代码：
```
def decode_str(s):
    value, charset = decode_header(s)[0]
    if charset:
        value = value.decode(charset)
    return value
```

邮件内容是 `bytes` 类型的数据，需要解码为 `str`，新增以下代码：
```
def guess_charset(msg):
    charset = msg.get_charset()
    if charset is None:
        content_type = msg.get('Content-Type', '').lower()
        pos = content_type.find('charset=')
        if pos >= 0:
            charset = content_type[pos + 8:].strip()
    return charset
```

执行 `print_msg(msg)` 解析原始邮件结果如下：
```
From: xx管理员 <xxx@163.com>
To:  <xxx@163.com>
Subject: xx系统感谢您的注册
part 1
----
  part 1
  ----
    Text: hello world

send by xx管理员，这里有一只猫
  part 2
  ----
    Text: <div style="line-height:1.7;color:#000000;font-size:14px;font-family:Arial">
    
        <h1>hello world</h1>
        <p>send by xx管理员，这里有一只猫 <img src="http://n.sinaimg.cn/sinacn/w637h427/20180201/14cd-fyrcsrw4113824.jpg"></p>
    
    
    </div><br><br><span title="neteasefooter"><p>&nbsp;</p></span>
part 2
----
  Attachment: image/jpeg
```
可以看到解析的这封邮件是一个 `MIMEMultipart`，包含两部分：第一部分又是一个 `MIMEMultipart`，第二部分是一个附件。而内嵌的`MIMEMultipart` 也包含两部分：`MIMEText` 纯文本和 `MIMEText` HTML文本。

# 参考文档
1. 廖雪峰 [POP3收取邮件](https://www.liaoxuefeng.com/wiki/1016959663602400/1017800447489504)
2. 官网  [poplib](https://docs.python.org/3.5/library/poplib.html?highlight=poplib#module-poplib) |  [email.parser](https://docs.python.org/3.5/library/email.parser.html) | [email.message](https://docs.python.org/3.5/library/email.message.html) 
2. [163免费邮客户端设置的POP3、SMTP、IMAP地址](http://help.163.com/09/1223/14/5R7P3QI100753VB8.html)