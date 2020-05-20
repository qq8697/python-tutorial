# 柯里化、惰性求值和Continuations

## 函数柯里化 currying
一个 currying 的函数首先会接受一些参数，接受了这些参数之后，该函数并不会立即求值，而是继续返回另外一个函数，刚才传入的参数在函数形成的闭包中被保存起来，**待到函数被真正求值的时候，之前传入的所有参数会被一次性用于求值**。

1. 编写计算每天开销的函数，月底求和
	```
	def cost(*args):
	    money = 0
	    for i in args:
	        money += i
	    return money
	
	# 1月1日 买鞋300，裤子200，衣服100
	c1 = cost(100, 200, 300)
	# 1月2日 逛超市60
	c2 = cost(60)
	...
	# 当月费用
	print(c1 + c2)
	```

2. 优化：不关心每天花多少，月底一次性计算。（设无参数传递时一次性计算）
	```
	def cost(*args):
	    f_args = []
	
	    def f(*args):
	        nonlocal f_args
	        if args:
	            f_args += args
	            return f
	        else:
	            money = 0
	            for i in f_args:
	                money += i
	            return money
	
	    return f(*args)
	
	# 1月1日 买鞋300，裤子200，衣服100
	cost = cost(100, 200, 300)
	# 1月2日 逛超市60
	cost = cost(60)
	# 当月费用
	print(cost())
	```

3. 以上函数不是 currying 函数的完整实现，主要用于理解其思想，currying 化的函数常用调用方法如下：
	```
	# 与上面方法等价
	print(cost(100, 200, 300)(60)())
	```

4. 优化：拆分出通用函数 `curry` 和业务函数 `cost`
	```
	def cost(*args):
	    money = 0
	    for i in args:
	        money += i
	    return money
	
	def curry(func):
	    f_args = []
	    def f(*args):
	        nonlocal f_args
	        if args:
	            f_args += args
	            return f
	        else:
	            return func(*f_args)
	    return f
	
	cost = curry(cost)
	print(cost(100, 200, 300)(60)())
	```

小结，柯里化的理解：
形式上：把一个有多个参数的函数变成只有一个参数的函数，并且返回接受余下的参数而且返回结果的新函数。（python 版用接收 `tuple` 参数，致使“看起来”不是只有一个参数。）
功能上：待到真正求值的时候，之前传入的所有参数一次求值。

换一个更容易理解的例子，定义一个 `avg` 函数，用于求平均数，使用 `curry` 将其 currying（柯里化）
```
def avg(*args):
    return sum(args) / len(args)

print(avg(1, 3, 6, 0))

avg = curry(avg)
print(avg(1)(3)(6)(0)())
```

## 惰性求值 Lazy Evaluation
惰性计算，指在真正需要执行的时候才计算表达式的值，可以表示为“延迟求值”和“最小化求值”，这是两个既相关又区别的概念，相关表现在其目的均是需要时才计算，其区别如其字面，一个在于延迟求值一个在于最小化求值。

“延迟求值” - 如下的一个 `lazy_sum` 函数，不返回求和结果，而是返回求和的函数，真正需要求和结果时才计算（一般由装饰实现）
```
def lazy_sum(*args):
    def sum():
        s = 0
        for n in args:
            s = s + n
        return s
    return sum

sum = lazy_sum(1,2,3)
print(sum())
```

“最小化求值” - 使用生成器，使输出长度无限的数据流成为可能（实际只计算到需要返回的数据）
```
def fib():
    a, b = 0, 1
    while True:
        yield a
        a, b = b, a + b

fib_generator = fib()
print([next(fib_generator) for x in range(10)])
```

此外，支持惰性计算这一特性的语言，如 python，如果存在表达式 `if x and y`，在 `x` 为 `false` 的情况下 `y` 表达式的值将不再计算，避免不必要的计算以提升性能
```
import time

def fib(n):
    if n < 2:
        return n
    return fib(n - 1) + fib(n - 2)

x = 514229
y = False
start = time.clock()

# if x in [fib(n) for n in range(30)] and y:
#     pass

if y and x in [fib(n) for n in range(30)]:
    pass

print(time.clock() - start)
```
如上，`x in [fib(n) for n in range(30)]` 为 `True`，`y` 为 `Flase`，交换 `and` 操作符两侧的表达式，`Flase` 在前可以显著的减少程序执行时间。

## Continuations
连续化是函数的一种泛化。函数不一定要返回到调用方，也可以返回到程序的任何部分，“continuation”是我们可以选择传递给函数的参数，它指定函数应该返回的位置。字面意思比较难理解，看以下代码：
```
def plus(x, y):
    return x + y

def square(p):
    return pow(p, 2)

i = plus(5, 10)
j = square(i)
print(j)
```
在调用 plus 函数的地方返回 15 给变量 i，之后 i 的值被用来调用 square，因为第二行取决于对第一行的成功求值，所以不能重排这些代码行。
可以使用 Continuation Passing Style 重写此处的代码，其中 plus 函数不返回到原始调用方，而是返回给 square 函数。
```
def plus(x, y, f):
    return f(x + y)

def square(p):
    return pow(p, 2)

j = plus(5, 10, square)
print(j)
```
在本例中，square 就是 plus 的 continuation。

# 参考文档
1. [Functional Programming](http://www.defmacro.org/2006/06/19/fp.html) 一个使用 Java 示例的函数式编程的总体介绍。
	- Higher Order Functions 高阶函数
	- Currying 柯里化
	- Lazy Evaluation 惰性求值
	- Closures 闭包
	- Continuations 延续
1. 阮一峰 [函数式编程入门教程](http://www.ruanyifeng.com/blog/2017/02/fp-tutorial.html)
2. [Python Advanced Course Topics](https://www.python-course.eu/currying_in_python.php)
