## python内置的高阶函数

## 内置函数
### map
`map(function, iterable)` 接收两个参数，一个是函数，一个是 `iterable`，`map` 将传入的函数依次作用到 `iterable` 中每一项，并把结果作为 `Iterator` 返回。

将函数 f(x)=x*x 作用在列表 `[1,2,3]` 的每一个元素上
```
def f(x):
    return x * x

it = map(f, [1,2,3])
print(list(it))
```
Iterator 是惰性序列，可以通过 `list()` 函数让它把整个序列都计算出来并返回一个 `list`
使用列表推导式 `[f(x) for x in [1,2,3]]` 能达到同样的效果

### filter
`filter(function, iterable)` 把传入的函数依次作用于 `iterable` 中每一项，然后根据返回值是 `True` 还是 `False` 决定是否保留，把保留元素的集合作为 `Iterator` 返回

保留列表中的偶数
```
def is_even(x):
    return x % 2 == 0

it = filter(is_even, [1,2,3])
print(list(it))
```
使用列表推导式 `[x for x in [1,2,3] if is_even(x)]` 能达到同样的效果

### sorted
`sorted(iterable, key=None, reverse=False)` 返回排序后的列表，可以接收一个关键字参数 `key` 实现自定义的排序，`key` 指定的函数（带有单个参数）将作用于 `iterable` 的每一个元素上，并根据其返回的结果进行排序

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

### enumerate
`enumerate(iterable, start=0)` ，计数 `iterable` 中的每一个元素，返回包含每个计数（从 start 开始）和元素构成的元组组成的集合，这个集合是一个枚举对象，也是迭代器对象。

```
seasons = ['Spring', 'Summer', 'Fall', 'Winter']
it = enumerate(seasons)
print(list(it))
```

```
[(0, 'Spring'), (1, 'Summer'), (2, 'Fall'), (3, 'Winter')]
```

### zip
`zip(iterableA, iterableB, ...) ` 创建一个聚合了来自每个可迭代对象中的元素的迭代器。

```
seasons = ['Spring', 'Summer', 'Fall', 'Winter', 'more?']
indexs = [0, 1, 2, 3]
it = zip(indexs, seasons)
print(list(it))
```
所输入可迭代对象中最短的一个被耗尽时，迭代器将停止迭代。 

### any all
`any(iterable)` 和 `all(iterable)` 会查看一个 iterable 对象内容的逻辑值。any() 在 iterable 中任意一个元素为真时返回 True，而 all() 在所有元素为真时返回 True


## itertools 模块 包含很多常用的迭代器以及用来组合迭代器的函数

## functools 模块 包含了一些高阶函数（接受一个或多个函数作为输入，返回新的函数）
### reduce
`functools.reduce(function, iterable[, initializer])` 把一个函数作用在一个 iterable 上，这个函数必须接收两个参数，reduce 把结果继续和 iterable 的下一个元素做累积计算，其效果就是 reduce(f, [x1, x2, x3, x4]) = f(f(f(x1, x2), x3), x4)

使用 reduce 累加求和
```
from functools import reduce
def add(x, y):
    return x + y
r = reduce(add, [1,2,3])
print(r)
```

### partial
`functools.partial(func, *args, **keywords)`

## operator 模块 包含一系列对应于 Python 操作符的函数



# 参考文档
1. 官网 [内置函数](https://docs.python.org/3.5/library/functions.html) all any enumerate filter map zip | [排序指南](https://docs.python.org/3.5/howto/sorting.html#sortinghowto) |[functools.reduce](https://docs.python.org/zh-cn/3.7/library/functools.html#functools.reduce) 