# 弱引用
`weakref` 模块可为对象创建弱引用。

**当对象的引用只剩弱引用时，垃圾回收可以销毁引用并将其内存重用与其他内容。**（在实际销毁对象之前，弱引用能一直返回该对象）

弱引用的主要用途：
实现保存大对象的高速缓存或映射，但又不希望大对象仅仅因为出现在高速缓存或映射中而保持存活。

如，大型二进制图像对象，希望将名称与每个对象关联起来。如果使用 Python 字典将名称映射到图像，或将图像映射到名称，则图像对象将保持活动状态，因为它们在字典中显示为值或键；`weakref` 模块提供的 `WeakKeyDictionary` 和 `WeakValueDictionary` 类可以替代 Python 字典，使用弱引用来构造映射，这些映射不会仅仅因为它们出现在映射对象中而使对象保持存活。如，**一个图像对象是 `WeakValueDictionary` 中的值，那么当对该图像对象的剩余引用是弱映射对象所持有的弱引用时，垃圾回收可以回收该对象并将其在弱映射对象中相应的条目删除**。

`weakref.ref(object[, callback])` 返回对象的弱引用，弱引用示例：
```
import weakref
import sys

class Cat:
	def __init__(self, name):
		self.name = name
	def eat(self):
		print('%s is eating' % self.name)

tom = Cat("Tom")
tommy = Cat("Tommy")

# 获取对象的引用计数，此处是2，比实际值多1，因为包含作为 getrefcount 参数的临时引用
print(sys.getrefcount(tom)) # 2
print(sys.getrefcount(tommy)) # 2

# 返回对象的弱引用
r1 = weakref.ref(tom)
r2 = weakref.ref(tommy)

# 返回对象的弱引用对象 并未增加对象的引用计数
print(sys.getrefcount(tom)) # 2
print(sys.getrefcount(tommy)) # 2

# 一个对象如果存在 变量的非弱引用，弱引用存活，可以调用弱引用获取该对象，此时对该对象的引用计数增1
print(r1) # <weakref at 0x0055DBD0; to 'Cat' at 0x005587D0>
r_tom = r1()
r_tom.eat()
print(sys.getrefcount(tom)) # 3

# 如果不存在 变量的非弱引用（如del删除变量或者变量指向新的对象），弱引用死亡，调用弱引用会返回 None
del tommy # del 删除的是变量不是数据对象
# tommy = None
print(r2) # <weakref at 0x00590210; dead>
r_tommmy = r2()
print(r_tommmy)
```

# 弱引用代理
之前以调用弱引用对象的形式获取原对象，创建弱引用代理可以直接对原对象进行访问。
```
import weakref
import sys

class Cat:
	def __init__(self, name):
		self.name = name
	def eat(self):
		print('%s is eating' % self.name)

tom = Cat("Tom")
tommy = Cat("Tommy")

# 返回对象的弱引用代理
p1 = weakref.proxy(tom)
p2 = weakref.proxy(tommy)

# 一个对象如果存在 变量的非弱引用，弱引用存活，可以直接通过弱引用代理访问对象
print(p1) # <__main__.Cat object at 0x006A8890>
p1.eat()

# 如果不存在 变量的非弱引用，弱引用死亡，不能通过弱引用代理访问对象，会报 ReferenceError: weakly-referenced object no longer exists 的错误
del tommy
print(p2)
```

# 终结器
`weakref.finalize(obj, func, *args, **kwargs)` 返回终结器对象。终结器，弱引用的一种，在对象被垃圾回收时调用，终结器总是被视为存活，直到它被调用（显式调用或垃圾回收时调用），调用之后死亡，调用存活的终结器将返回 `func` 的求值结果，调用死亡的终结器将返回 `None`。

示例，当某事件（对象被垃圾回收、程序退出等）发生时删除临时目录
方法一：使用 `__del__`
```
import tempfile
import shutil

class TempDir:
    def __init__(self):
        # 以最安全的方式创建一个临时目录
        self.name = tempfile.mkdtemp()

    def remove(self):
        if self.name is not None:
            # 删除一个完整的目录树
            shutil.rmtree(self.name)
            self.name = None

    @property
    def removed(self):
        return self.name is None

    def __del__(self):
        self.remove()
```

方法二：使用 `finalize`， 使用终结器只需引用它所需要的特定函数和对象，而无需获取对整个对象状态的访问权:
```
import tempfile
import shutil
import weakref

class TempDir:
    def __init__(self):
        self.name = tempfile.mkdtemp()
        self._finalizer = weakref.finalize(self, shutil.rmtree, self.name)

    def remove(self):
        self._finalizer()

    @property
    def removed(self):
        return not self._finalizer.alive
```

# 参考文档
1. 官网 [weakref](https://docs.python.org/3.5/library/weakref.html)