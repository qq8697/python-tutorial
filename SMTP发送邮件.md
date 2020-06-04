# SMTP发送邮件
python 内置模块 `email` 负责构造邮件（包括邮件内容、主题、发件人和收件人信息），`smtplib` 负责发送邮件。

## 1. 发送纯文本邮件
```
from email.utils import parseaddr, formataddr
from email.header import Header
from email.mime.text import MIMEText
import smtplib

def _format_addr(s):
    """
    邮件地址格式化
    :param s: name <addr@example.com>
    :return: realname, email_address
    """""
    name, addr = parseaddr(s)
    return formataddr((Header(name, 'utf-8').encode(), addr))

# 构造发件人、收件人、smtp服务器信息
from_addr = input('From: ')
password = input('Password: ') # 授权密码
to_addr = input('To: ')
smtp_server = input('SMTP server: ') # smtp.163.com 25

# 构造邮件 纯文本邮件（邮件正文、mime的subtype -> text/plain、编码）
msg = MIMEText('hello world, send by xx管理员', 'plain', 'utf-8')
msg['From'] = _format_addr('xx管理员 <%s>' % from_addr)
msg['To'] = _format_addr('xx用户 <%s>' % to_addr)
msg['Subject'] = Header('xx系统感谢您的注册', 'utf-8').encode()

# 创建smtp连接
smtp = smtplib.SMTP(smtp_server, 25)
# 打印发送到服务和从服务接收的所有消息
smtp.set_debuglevel(1)
# 登录需要身份验证的SMTP服务器
smtp.login(from_addr, password)
# 发送邮件
smtp.sendmail(from_addr, [to_addr], msg.as_string())
# 终止SMTP会话并关闭连接
smtp.quit()
```
1. 在自定义的名称地址格式化函数 `_format_addr` 中，在主题、收件人等字段包含非 ASCII 字符时使用 `Header` 包装。
2. MIME（Multipurpose Internet Mail Extensions） 多用途互联网邮件扩展类型，可以让浏览器使用指定应用程序打开对应类型文件。这里使用 `MIMEText` 构造纯文本数据，创建之后为其添加 `From`、`To`、`Subject` 等属性。
3. 使用 `smtplib.SMTP` 创建 SMTP 连接，第一个参数为服务器地址，网易 163 邮箱的 smtp 服务器地址为 `smtp.163.com`， 非 SSL 协议的端口号为 25。
4. 使用 `smtp.login` 登录 SMTP 服务器时的密码是授权密码，而不是登录密码。

## 2. 发送 HTML 邮件
将 `MIMEText` 第二个参数设置为 `html` 即可构造 html 文本的邮件
```
msg = MIMEText(
    '''
    <html>
    <body>
        <h1>hello world</h1>
        <p>send by xx管理员，点击以下链接激活账号 <a href="#">链接xxxxxx</a></p>
    </body>
    </html>
    ''', 'html', 'utf-8')
```

## 3. Message 对象
之前使用 `MIMEText` 构造文本邮件（纯文本和 html 文本），本质它是一个 `email.message.Message` 对象，部分继承结构如下：
```
Message
+- MIMEBase
   +- MIMEMultipart
   +- MIMENonMultipart
      +- MIMEText
      +- MIMEImage
```

实现一个邮件内容就是构造一个 `Message` 对象：
- 如果表示文本邮件，使用 `MIMEText` 构造
- 如果表示图片邮件，使用 `MIMEImage` 构造
- 如果要把多个邮件内容组合起来，使用 `MIMEMultipart` 构造
- `MIMEBase` 可以表示任何对象

### 4. 发送带附件的邮件
使用 `MIMEMultipart` 构造 `Message` 对象，然后对其添加 `MIMEText` 作为邮件正文，添加 `MIMEBase` 表示附件。

```
from email.utils import parseaddr, formataddr
from email.header import Header
from email.mime.base import MIMEBase
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from email.encoders import encode_base64
import smtplib

def _format_addr(s):
    name, addr = parseaddr(s)
    return formataddr((Header(name, 'utf-8').encode(), addr))

# 构造发件人、收件人、smtp服务器信息
from_addr = input('From: ')
password = input('Password: ') # 授权密码
to_addr = input('To: ')
smtp_server = input('SMTP server: ') # smtp.163.com 25

# 构造邮件
msg = MIMEMultipart()
msg['From'] = _format_addr('xx管理员 <%s>' % from_addr)
msg['To'] = _format_addr('xx用户 <%s>' % to_addr)
msg['Subject'] = Header('xx系统感谢您的注册', 'utf-8').encode()

# MIMEText 作为邮件正文
text = MIMEText('hello world, send by xx管理员', 'plain', 'utf-8')
# 添加到 MIMEMultipart
msg.attach(text)

# MIMEBase 表示附件（以本地读取的图片为例）
with open('./1.jpeg', 'rb') as f:
    appendix = MIMEBase('image', 'jpeg')
    appendix.add_header('Content-Disposition', 'attachment', filename='cat.jpeg')
    # 读取内容
    appendix.set_payload(f.read())
    # Base64编码
    encode_base64(appendix)
    # 添加到 MIMEMultipart
    msg.attach(appendix)

# 创建smtp连接
smtp = smtplib.SMTP(smtp_server, 25)
# 打印发送到服务和从服务接收的所有消息
smtp.set_debuglevel(1)
# 登录需要身份验证的SMTP服务器
smtp.login(from_addr, password)
# 发送邮件
smtp.sendmail(from_addr, [to_addr], msg.as_string())
# 终止SMTP会话并关闭连接
smtp.quit()
```
1. `Message` 对象的 
	1. `attach` 方法，将给定的 `payload` 载入到当前的 `payload`。调用之前当前的 `payload` 必须是 `None` 或者 `Message` 组成的列表；
	2. `set_payload` 方法，将 scalar object（如 string）载入到当前的 `payload`。
	2. `add_header` 方法，添加 http header，效果如下：[MDN HTTP Content-Disposition](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Content-Disposition)
		```
		Content-Disposition: attachment; filename="cat.jpeg"
		```
	
3. 使用 `email.encoders` 模块的 `encode_base64` 方法将 `payload` base64 编码，并自动设置 `Content-Transfer-Encoding` 为 base64。

## 5. 发送带图片的邮件
方法一：直接在 HTML 文本中链接（网络）图片地址
```
text = MIMEText(
    '''
    <html>
    <body>
        <h1>hello world</h1>
        <img src="http://n.sinaimg.cn/sinacn/w637h427/20180201/14cd-fyrcsrw4113824.jpg">
    </body>
    </html>
    ''', 'html', 'utf-8')
```
ps. 163邮箱是可以的，有的邮件服务提供商会自动屏蔽带有外链的图片

方法二：在“发送带附件的邮件”的基础上添加 `Content-ID` 和 `X-Attachment-Id` 头关联附件，然后在 HTML 中使用 `src="cid:0"` 引用附件
```
appendix.add_header('Content-ID', '<0>')
appendix.add_header('X-Attachment-Id', '0')
```
```
<img src="cid:0">
```

## 6. 加密的 SMTP
使用非 SSL 协议的 25 端口连接 SMTP 服务器时，使用的是明文传输，发送邮件的整个过程可能会被窃听。
要更安全地发送邮件，可以加密 SMTP 会话，实际上就是先创建 SSL 安全连接，然后再使用 SMTP 协议发送邮件，修改代码如下：
使用 SMTP_SSL 创建连接，并修改为指定端口（网易163使用 994 端口）
```
# 创建smtp连接
smtp = smtplib.SMTP_SSL(smtp_server, 994)
```

# 参考文档
1. 官网 [email](https://docs.python.org/3.5/library/email.html?highlight=email#module-email) | [smtplib]() | [email.message](https://docs.python.org/3.5/library/email.message.html) | [email.mime](https://docs.python.org/3.5/library/email.mime.html)
2. [163免费邮客户端设置的POP3、SMTP、IMAP地址](http://help.163.com/09/1223/14/5R7P3QI100753VB8.html)
3. 官网示例 [将目录的全部内容作为电子邮件发送的示例](https://docs.python.org/3.5/library/email-examples.html) | [将MIME消息解压到文件目录中的示例](https://docs.python.org/3.5/library/email-examples.html)