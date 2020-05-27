# logging 模块

## 日志的级别
一共5个等级，以所追踪事件级别或严重性而定，各级别（从低到高）适用性如下：
1. `DEBUG` 细节信息，仅当诊断问题时适用
2. `INFO` 确认程序按预期运行
3. `WARNING` 表明有已经或即将发生的意外（例如：磁盘空间不足）程序仍按预期进行
4. `ERROR` 由于严重的问题，程序的某些功能已经不能正常执行
5. `CRITICAL` 严重的错误，表明程序已不能继续执行

## 日志输出到控制台或文件：
```
import logging

logging.basicConfig(level=logging.WARNING,
                    # filename='./log.txt',
                    # filemode='w',
                    format='%(asctime)s - %(filename)s[line:%(lineno)d] - %(levelname)s : %(message)s')

logging.debug('this is debug msg')
logging.info('this is info msg')
logging.warning('this is warning msg')
logging.error('this is error msg')
logging.critical('this is critical msg')
```
- 使用 `logging.debug` 等方法记录日志信息。
- 使用 `logging.basicConfig` 中的 `level` 参数配置输出日志信息的级别（默认的是 `WARNING`），只会输出该级别及以上的日志信息。
- 对 `basicConfig` 的调用应该在 `debug` 等的前面。因为它被设计为一次性的配置，只有第一次调用会进行操作，随后的调用不会产生有效操作。

运行结果如下：
```
2020-05-27 10:05:52,670 - t.py[line:8] - WARNING : this is warning msg
2020-05-27 10:05:52,671 - t.py[line:9] - ERROR : this is error msg
2020-05-27 10:05:52,671 - t.py[line:10] - CRITICAL : this is critical msg
```

### 日志输出格式的可用属性 [>> logrecord-attributes](https://docs.python.org/3.5/library/logging.html#logrecord-attributes)
```
%(levelno)s: 日志级别的数值
%(levelname)s: 日志级别名称
%(pathname)s: 当前执行程序的路径，其实就是sys.argv[0]
%(filename)s: 当前执行程序名
%(funcName)s: 当前函数
%(lineno)d: 当前行号
%(asctime)s: 时间
%(thread)d: 线程ID
%(threadName)s: 线程名称
%(process)d: 进程ID
%(message)s: 日志信息
```

## 日志同时输出到控制台和文件
需要借助 `Logger` 对象：
```
import logging

# 1 创建 logger
logger = logging.getLogger()
logger.setLevel(logging.INFO) # 根 log 等级

# 2 定义输出到文件的 handler
logfile = './log.txt'
fh = logging.FileHandler(logfile, mode='a')
fh.setLevel(logging.DEBUG) # 输出到文件的 log 等级

# 3 定义输出到控制台的 handler
sh = logging.StreamHandler()
sh.setLevel(logging.WARNING) # 输出到控制台的 log 等级

# 4 定义输出格式，并设置到 handler 中
formatter = logging.Formatter("%(asctime)s - %(filename)s[line:%(lineno)d] - %(levelname)s: %(message)s")
fh.setFormatter(formatter)
sh.setFormatter(formatter)

# 5 为 logger 添加 handler
logger.addHandler(fh)
logger.addHandler(sh)

# 日志信息
logger.debug('this is debug msg')
logger.info('this is info msg')
logger.warning('this is warning msg')
logger.error('this is error msg')
logger.critical('this is critical msg')
```

`logging` 模块提供的日志记录中主要组件及其作用：
1. `Logger`： 
	1. 向应用程序公开 `debug()` 等方法记录日志；
	2. 根据对象的严重性和过滤器确定要处理的日志消息；
	3. 将相关日志消息传递给所有感兴趣的 `Handler`（日志处理程序）。
2. `Handler`：将由 `Logger` 创建的日志记录发送到适当的目标（如控制台、文件）
3. `Filter` 用于确定要输出的日志记录
4. `Formatter` 指定最终输出中日志记录的样式

### 有用的日志处理程序 [>> Handler 的子类](https://docs.python.org/3.5/howto/logging.html#useful-handlers)
```
StreamHandler 发送消息到流（类似文件对象）
FileHandler 发送消息到硬盘文件
```

# 参考文档
1. 官方文档 [logging](https://docs.python.org/3.5/library/logging.html?highlight=logging#module-logging) 模块 | [基础教程](https://docs.python.org/3.5/howto/logging.html#logging-basic-tutorial) | [进阶教程](https://docs.python.org/3.5/howto/logging.html#logging-advanced-tutorial) | [操作手册](https://docs.python.org/3.5/howto/logging-cookbook.html#logging-cookbook) | [Logger](https://docs.python.org/3.5/library/logging.html#logging.Logger) | [Handler](https://docs.python.org/3.5/howto/logging.html#handler-basic) | [Filter](https://docs.python.org/3.5/library/logging.html#filter)