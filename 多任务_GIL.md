## GIL 全局解释器锁
1. linux `top` 或 `htop` 命令 查看进程情况
	```
	单线程死循环 -> cpu1 100%
	2个线程（主和子）死循环 -> cpu1 50% cpu2 50%
	2个进程（主和子）死循环 -> cpu1 100% cpu2 100%
	==> 结论：python真正可以并发的是多进程，多线程不行，是假的并发，因为GIL。（python使用多进程是可以利用多核的CPU资源的）
	```
1. 面试题，GIL的概念？对多线程的影响？与单线程的比性能是否有提升？
	1. python语言和GIL无关系，是Cpython解释器的问题（由于历史原因在难以移除。）
	2. 每个线程在执行前都要先获取GIL，保证同一时刻只有一个线程可以执行代码
	3. 线程释放GIL锁的情况：在IO操作等可能会引起阻塞的system call之前，可以暂时释放GIL，但在执行完毕后必须重新获取。（python3使用计时器（执行时间达到阈值后，当前线程释放GIL）或python2 tickets计数达到100）
	5. 多线程比单线程性能有提升，以爬虫为例，**线程在recv接收数据时会阻塞等待，自动释放GIL锁**，如果存在多线程，此时可以有新的线程发起请求，有效利用了单线程本该等待的时间。（可以理解为并行处理流水线任务）
	6. 计算密集型和IO密集型，前者用多进程，后者用多线程（协程也行）
1. 解决方案
	1. 换解释器
	2. 用c语言等其他语言替代线程要做的事情，然后再python引入。
		```
		dead_loop.c
		void DeadLoop(){
			while(1){
				;
			}
		}

		xx.py
		from ctypes inmport *
		from threading mport Thread

		# 加载动态库
		lib = cdll.LoadLibrary("./libdead_loop.so")

		# 创建子线程，让其执行C语言编写的函数
		t =Thread(target = lib.DeadLoop)
		t.start()

		# 主线程
		while True:
			pass
		```
	