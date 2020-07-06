## python内置的高阶函数

## 一、 内置函数
### 1. map
`map(function, iterable)` 接收两个参数，一个是函数，一个是 可迭代对象，`map` 将传入的函数依次作用到可迭代对象中每一项，并把结果作为迭代器返回。

将函数 f(x)=x*x 作用在列表 `[1,2,3]` 的每一个元素上
```
def f(x):
    return x * x

it = map(f, [1,2,3])
print(list(it))
```
Iterator 是惰性序列，可以通过 `list()` 函数让它把整个序列都计算出来并返回一个 `list`
使用列表推导式 `[f(x) for x in [1,2,3]]` 能达到同样的效果



### 2. filter
`filter(function, iterable)` 把传入的函数依次作用于 可迭代对象中每一项，然后根据返回值是 `True` 还是 `False` 决定是否保留，把保留元素的集合作为迭代器返回

保留列表中的偶数
```
def is_even(x):
    return x % 2 == 0

it = filter(is_even, [1,2,3])
print(list(it))
```
使用列表推导式 `[x for x in [1,2,3] if is_even(x)]` 能达到同样的效果

应用实例：在列表、字典、集合中筛选数据
1. 列表
列表解析： `[x for x in list if x >= 0]`
`filter` 函数： `filter(lambda x : x >= 0, list)`

1. 字典
字典解析 `{k: v for k, v in dict.iteritems() if v >= 0}`

1. 集合
集合解析 `{x for x in set if x >= 0}`

### 3. sorted
`sorted(iterable, key=None, reverse=False)` 返回排序后的列表，可以接收一个关键字参数 `key` 实现自定义的排序，`key` 指定的函数（带有单个参数）将作用于可迭代对象的每一个元素上，并根据其返回的结果进行排序

自定义函数实现按成绩排序
```
def order_by_score(t):
    return t[1]

l = [('Bob', 75), ('Adam', 92), ('Bart', 66), ('Lisa', 88)]
r = sorted(l, key = order_by_score)
print(r)
```

`reverse = True` 反向排序
```
def order_by_score(t):
    return t[1]

l = [('Bob', 75), ('Adam', 92), ('Bart', 66), ('Lisa', 88)]
r = sorted(l, key = order_by_score, reverse = True)
print(r)
```

番外：**排序的稳定性**
如果一个排序确保**不会改变比较结果相等的元素的相对顺序**就称其为稳定的 --> 这有利于进行多重排序（例如先按部门、再按薪级排序）

应用实例：根据字典值的大小，对字典中的项排序
构造数据：
```
from random import randint

d = { x: randint(60, 100) for x in 'abcdef'}
print(d)
```

利用 zip 将字典数据转化为元组后再使用 `sorted` 函数排序
```
r = sorted(zip(d.values(), d.keys()))
print(r)
```

或为 `sorted` 函数传递 `key` 参数 
```
r = sorted(d.items(), key=lambda x:x[1])
print(r)
```

### 4. enumerate
`enumerate(iterable, start=0)` ，计数可迭代对象中的每一个元素，返回包含每个计数（从 `start` 开始）和元素构成的元组组成的集合，这个集合是一个枚举对象，也是迭代器对象。

```
seasons = ['Spring', 'Summer', 'Fall', 'Winter']
it = enumerate(seasons)
print(list(it))
```

```
[(0, 'Spring'), (1, 'Summer'), (2, 'Fall'), (3, 'Winter')]
```

### 5. zip
`zip(iterableA, iterableB, ...)` 创建一个聚合了来自每个可迭代对象中的元素的迭代器。

```
seasons = ['Spring', 'Summer', 'Fall', 'Winter', 'more?']
indexs = [0, 1, 2, 3]
it = zip(indexs, seasons)
print(list(it))
```
所输入可迭代对象中最短的一个被耗尽时，迭代器将停止迭代。 

### 6. any all
`any(iterable)` 和 `all(iterable)` 会查看一个可迭代对象 象内容的逻辑值。`any()` 在可迭代对象中任意一个元素为真时返回 `True`，而 `all()` 在所有元素为真时返回 `True`


## 二、itertools 模块 为高效循环而创建迭代器的函数
包含很多常用的迭代器以及用来组合迭代器的函数，可以分为以下几类：

### 1. 创建新的迭代器:
1. `count(start=0, step=1)` 创建一个从 `start` 值开始，返回相隔 step 的值的迭代器。
	```
	from itertools import *

	# count() # 0, 1, 2 ...
	# count(10) # 10, 11, 12 ...
	it = count(2.5, 0.5) # 2.5, 3.0, 3.5 ...
	print(next(it))
	print(next(it))
	```

1. `cycle(iterable)` 创建一个循环重复返回 `iterable` 中所有元素的迭代器。
	```
	from itertools import *

	it = cycle('ABCD') # A, B, C, D, A, B, C, D ...
	print(next(it))
	print(next(it))
	```

1. `repeat(elem[, n])` 返回所提供的元素 n 次，当 n 不存在时，返回无数次。
	```
	from itertools import *

	it = repeat(10, 3) # 10, 10, 10
	print(list(it))
	```

1. `chain(*iterables)` 接受任意数量的可迭代对象作为输入，首先返回第一个迭代器的所有元素，然后是第二个的所有元素，如此一直进行下去，直到消耗掉所有输入的可迭代对象
	```
	from itertools import *

	it = chain(['a', 'b', 'c'], (1, 2, 3)) # a, b, c, 1, 2, 3
	print(list(it))
	```

1. `islice(iterable, start, stop[, step])` 创建一个迭代器，返回从 iterable 里选中的元素。
	```
	from itertools import *

	# islice('ABCDEFG', 2, None) # C, D, E, F, G
	it = islice('ABCDEFG', 0, None, 2) # A, C, E, G
	print(list(it))
	```

1. `zip_longest(*iterables, fillvalue=None)`，与内置函数 `zip` 不同，迭代持续到耗光最长的可迭代对象才会停止，根据 `fillvalue` 填充缺失值。
	```
	from itertools import *
	
	seasons = ['Spring', 'Summer', 'Fall', 'Winter', 'more?']
	indexs = [0, 1, 2, 3]
	it = zip_longest(indexs, seasons)
	print(list(it))
	```

### 2. 对元素使用函数：
1. `starmap(func, iterable)` 假定可迭代对象能够返回一个元组的流，并且利用这些元组作为参数来调用 `func`，和 map() 的区别可以类比 func(*c) 与 func(a,b)，前者对于函数的参数是元组。
	```
	from itertools import *
	
	it = starmap(pow, [(2,5), (3,2), (10,3)]) # 32, 9, 1000
	print(list(it))
	
	it2 = map(pow,(2,3,10), (5,2,3))
	print(list(it2))
	
	def f(x):
	    return x * x
	
	it3 = starmap(f, [(2,), (3,), (10,)]) # 32, 9, 1000
	print(list(it3))
	
	it4 = map(f,[2,3,10])
	print(list(it4))
	```
1. `accumulate(iterable[, func])`，参考类似函数 `functools.
2. ()` 执行同样的计算, 只返回最终结果，`accumulate()` 会返回一个迭代器来输出所有中间结果


### 3. 选择元素：
1. `filterfalse(predicate, iterable)` 创建一个迭代器，只返回 iterable 中 predicate 为 False 的元素。 和 filter() 相反
	```
	from itertools import *

	def is_even(x):
	    return x % 2 == 0
	
	it = filterfalse(is_even, [1,2,3]) # 1,3
	print(list(it))
	```
1. `takewhile(predicate, iterable)` 创建一个迭代器，只要 predicate 为true，就从可迭代对象中返回元素
	```
	from itertools import *

	it = takewhile(lambda x: x<5, [1,4,6,4,1]) # 1, 4
	print(list(it))
	```

1. `dropwhile(predicate, iterable)` 创建一个迭代器，如果 predicate 为true，迭代器丢弃这些元素，然后返回其他元素。
	```
	from itertools import *

	it = dropwhile(lambda x: x<5, [1,4,6,4,1]) # 6, 4, 1
	print(list(it))
	```

1. `compress(data, selectors)` 创建一个迭代器，它返回 data 中经 selectors 真值测试为 True 的元素。迭代器在两者较短的长度处停止。
	```
	from itertools import *

	it = compress('ABCDEF', [1,0,1,0,1,1]) # 'A', 'C', 'E', 'F'
	print(list(it))
	```

### 4. 排列组合：
1. `combinations(iterable, r)` 返回由输入 iterable 中元素组成长度为 r 的子序列
	```
	from itertools import *

	it = combinations('ABCD', 2) # ('A', 'B'), ('A', 'C'), ('A', 'D'), ('B', 'C'), ('B', 'D'), ('C', 'D')
	print(list(it))
	```
每个元组中的元素保持着 可迭代对象 的元素的顺序。在上面的例子中A总在B、C、D之前

1. `permutations(iterable, r=None)` 返回由输入 iterable 中元素组成长度为 r 的子序列，取消了保持顺序的限制，返回所有可能的长度为 r 的排列
	```
	from itertools import *
	
	it = permutations('ABCD', 2)  # ('A', 'B'), ('A', 'C'), ('A', 'D'), ('B', 'A'), ('B', 'C'), ('B', 'D'), ('C', 'A'), ('C', 'B'), ('C', 'D'), ('D', 'A'), ('D', 'B'), ('D', 'C')
	print(list(it))
	```

1. `product(*iterables, repeat=1)` 可迭代对象输入的笛卡儿积，大致相当于生成器表达式中的嵌套循环。
	```
	from itertools import *
	
	it = product('ABCD', 'xy') # ('A', 'x'), ('A', 'y'), ('B', 'x'), ('B', 'y'), ('C', 'x'), ('C', 'y'), ('D', 'x'), ('D', 'y')
	print(list(it))
	```

### 5. 为元素分组
1. `groupby(iterable, key=None)` 从所依据的可迭代对象中连续地收集具有相同值的元素，然后返回一个长度为2的元组的数据流, 每个元组包含键值以及对应这个键值的元素所组成的迭代器。 `key_func(elem)` 是一个可以对迭代器返回的每个元素计算键值的函数。 如果你不提供这个键值函数，它就会简化成每个元素自身。
	```
	from itertools import *
	
	relation_list = [('大同', '山西'), ('朔州', '山西'), ('忻州', '山西'),('石家庄', '河北'), ('秦皇岛', '河北'), ('张家口', '河北'),('开封', '河南'), ('洛阳', '河南'), ('郑州', '河南')]
	
	def get_province(relation):
	    return relation[1]
	
	ret = groupby(relation_list, get_province)
	for province, grouper in ret:
	    print(province)
	    print(list(grouper))
	
	# ret-> ('山西', grouper-A),('河北', grouper-B),('河南', grouper-C)
	# grouper-A -> ('大同', '山西'), ('朔州', '山西'), ('忻州', '山西')
	```

## 三、functools 模块 
包含了一些高阶函数（接受一个或多个函数作为输入，返回新的函数）

### 1. reduce
`reduce(function, iterable[, initializer])` 把一个函数作用在一个 `iterable` 上，这个函数必须接收两个参数，reduce 把结果继续和 `iterable` 的下一个元素做累积计算，其效果就是 `reduce(f, [x1, x2, x3, x4]) = f(f(f(x1, x2), x3), x4)`

使用 `reduce` 累加求和
```
from functools import *

def add(x, y):
    return x + y

r = reduce(add, [1,2,3])
print(r)
```

`itertools` 模块的 `accumulate(iterable[, func])` 函数，执行同样的计算, 不同于 `reduce` 只返回最终结果，会返回一个迭代器来输出所有中间结果

应用实例：找到多个字典中的公共键
```
# {'a': 3, 'd': 2, 'c': 1} 
# {'d': 3, 'a': 3, 'e': 3} 
# {'f': 4, 'd': 3, 'b': 3, 'a': 2, 'e': 4}
# => {'d', 'a'}
```

构造数据：
```
from random import randint, sample
data1 = {x: randint(1, 4) for x in sample('abcdefg',randint(3, 6))}
data2 = {x: randint(1, 4) for x in sample('abcdefg',randint(3, 6))}
data3 = {x: randint(1, 4) for x in sample('abcdefg',randint(3, 6))}

print(data1, data2, data3)
```

利用 `set` 的交集 `&` 操作
```
from functools import reduce
m = map(dict.keys, [data1, data2, data3])
r = reduce(lambda a,b:a & b, m)
print(r)
```
1. 使用字典的 `keys` 方法可以得到字典 keys 的集合，使用 `map` 函数，得到所有字典的 keys 的集合
1. 使用 `functools` 模块的 `reduce` 函数，取所有字典的 keys 的集合的交集

### 2. partial
`partial(func, *args, **keywords)` 通过给定部分参数，将已有的函数变形成新的函数

由 `log` 函数创建 `server_log` 函数
```
from functools import *

def log(message, system):
    print('%s: %s' % (system, message))

server_log = partial(log, system='server')
server_log('Unable to open socket')
```

说明：
返回的是 `partial` 对象，- 与 `function` 对象的类似之处在于都是可调用、可弱引用的对象并可拥有属性；区别早会前者不会自动创建 `__name__` 和 `__doc__` 属性；而且，在类中定义的 `partial` 对象的行为类似于静态方法，并且不会在实例属性查找期间转换为绑定方法。

### 3. lru_cache
`lru_cache(maxsize=128, typed=False)` 一个为函数提供缓存功能的装饰器。
说明：
- LRU：最久未使用算法
- `lru_cache` 函数的参数
	- `maxsize` 设置为 `None` ，LRU功能将被禁用且缓存数量无上限。；`maxsize` 设置为2的幂时可获得最佳性能。
	- `typed` 设置为 `True`，不同类型的函数参数将被分别缓存。例如， `f(3)` 和 `f(3.0)` 会被缓存两次。
- 被装饰函数的参数
	- 由于使用了字典存储缓存，所以该函数的固定参数和关键字参数必须是可哈希的（即不可变数据类型）
	- 不同模式的参数会产生多个缓存项，例如, `f(a=1, b=2)` 和 f`(b=2, a=1)` 会被缓存两次。
- 装饰后函数的方法和属性
	- `cache_info()` 返回一个具名元组，包含命中次数 hits，未命中次数 misses ，最大缓存数量 maxsize 和 当前缓存大小 currsize。（在多线程环境中，命中数与未命中数是不完全准确的。）
	- `cache_clear()` 用于清理/使缓存失效的函数。
	- `__wrapped__` 属性可以访问原始的未经装饰的函数。它可以用于检查、绕过缓存，或使用不同的缓存再次装饰原始函数。

静态 Web 内容的 LRU 缓存示例:
```
import urllib.request, urllib.error
from functools import *

@lru_cache(maxsize=32)
def get_pep(num):
    """Retrieve text of a Python Enhancement Proposal"""
    resource = 'http://www.python.org/dev/peps/pep-%04d/' % num
    try:
        with urllib.request.urlopen(resource) as s:
            return s.read()
    except urllib.error.HTTPError:
        return 'Not Found'

for n in 8, 290, 308, 320, 8, 218, 320, 279, 289, 320, 9991:
    pep = get_pep(n)
    print(n, len(pep))

print(get_pep.cache_info())
```

使用缓存在递归函数中的应用，斐波那契数列：
```
from functools import *

@lru_cache(maxsize=None)
def fib(n):
    if n < 2:
        return n
	# if n % 2 == 0:
    #    fib.cache_clear()
    return fib(n-1) + fib(n-2)

print([fib(n) for n in range(16)])
print(fib.cache_info())
```

# 参考文档
1. 官网 [内置函数](https://docs.python.org/3.5/library/functions.html) all any enumerate filter map zip sorted | [排序指南](https://docs.python.org/3.5/howto/sorting.html#sortinghowto) | [itertools 模块](https://docs.python.org/3.5/library/itertools.html?highlight=itertools) | [functools 模块](https://docs.python.org/3.5/library/functools.html#module-functools) 