# collections 
`collections` 模块提供的容器数据类型，用于替代 `list`、`tuple` 、 `dict` 和 `set`

## 双端队列 deque
相比与 `list`，插入和删除元素的效率高，实现了在两端快速添加（`append`）和弹出（`pop`），两个方向的大概开销都是 `O(1)` 复杂度

deque 对象的方法
1. `append(x)`
2. `appendleft(x)`
3. `extend(iterable)`
4. `extendleft(iterable)`
5. `insert(i, x)`
6. `pop()`
7. `popleft()`
8. `clear()`
9. `remove(value)` 移除找到的第一个value
10. `index(x[,start [,stop]])`
10. `reverse()`
11. `count(x)`
12. `copy()`
13. `rotate(n=1)` 向右循环移动 n 步。 如果 n 是负数，就向左循环

例，使用 `deque` 实现求移动平均值
```
from collections import deque
from itertools import islice

def moving_avg(it, n = 3):
    # moving_avg([40, 30, 50, 46, 39, 44]) --> 40.0 42.0 45.0 43.0
    it = iter(it)
    d = deque(islice(it, n - 1))
    d.appendleft(0)
    s = sum(d)
    for i in it:
        s += i - d.popleft()
        d.append(i)
        yield s / n

for r in moving_avg([40, 30, 50, 46, 39, 44]):
    print(r)
```


## 命名元组 namedtuple()
一个工厂函数，用于创建*命名元组*的子类

`namedtuple(typename, field_names, *, rename=False, defaults=None, module=None)`
1. `field_names` 
	1. 可以是列表，如 `['x', 'y']`，
	2. 也可以是纯字符串（空白或逗号分隔），如 `'x y'`，`'x, y'`
1. `defaults` 会应用到最右边的参数。如 `field_names` 为 `['x', 'y', 'z']`，`defaults` 为 `(1, 2)` ，那么 `y` 默认值 `1` ， `z` 默认值 `2` 。

命名元组的方法和属性：
1. 类方法 `somenamedtuple._make(iterable)`
2. 实例方法和属性 
	1. `nt._asdict()`
	1. `nt._replace(**kwargs)`
	2. `nt._fields`
	3. `nt._field_defaults`

例，为元组中元素命名
方法一，定义枚举类型或者常量代替索引
```
NAME,AGE,SEX = range(3)
cat = ('tommy', 2, 'female')
print(cat[NAME])
```

方法二，使用 `namedtuple` 代替 `tuple`
```
from collections import namedtuple

Cat = namedtuple('Cat', ['name', 'age', 'sex'])
cat = Cat('ta', 2, 'female')
print(cat.name)
```

## Counter
dict 的子类，提供了可哈希对象的计数功能

例，统计列表中元素出现频度
```
from random import randint
from collections import Counter

data = [randint(0, 10) for _ in range(30)]
print(data)

c = Counter(data)
# 等价于
# c = Counter()
# for v in data:
#     c[v] += 1
print(c)

r = c.most_common(3)
print(r)
```
1. 使用 `most_common(n)` 方法返回频度最高的 n 个元素的列表

## 有序字典 OrderedDict
`dict` 的子类，保存了他们被添加的顺序（ps. 在  3.7 中内置的 dict 类获得了记住插入顺序的能力）

与 `dict` 的不同：
1. `dict` 被设计为擅长映射操作，跟踪插入顺序是次要的。`OrderedDict` 擅长重新排序操作，空间效率、迭代速度和更新操作的性能是次要的。
1. 算法上，`OrderedDict` 可以比 `dict` 更好地处理频繁的重新排序操作。 这使其适用于跟踪最近的访问（例如在 LRU cache 中）。

`OrderedDict` 对象的方法：
1. `popitem(last=True)`
2. `move_to_end(key, last=True)` 将现有 key 移动到有序字典的任一端

例，让字典有序，可以使用 `OrderedDict` 代替 `dict` 后依次录入
```
from collections import OrderedDict

d1 = dict()
d1['A'] = (2, 15)
d1['B'] = (1, 12)
d1['C'] = (3, 16)
for k in d1: print(k) 

d2 = OrderedDict()
d2['A'] = (2, 15)
d2['B'] = (1, 12)
d2['C'] = (3, 16)
for k in d2: print(k)
```

## defaultdict
使用 `dict` 时，如果引用的 `key` 不存在，就会抛出 `KeyError`。如果希望 `key` 不存在时，返回一个默认值，就可以用 `defaultdict`
```
from collections import defaultdict

d = defaultdict(lambda : 'N/A')
d.update(name = 'tommy', age = 2,)
print('the cat name is %(name)s, age is %(age)s, sex is %(sex)s' % d)
```

## ChainMap
`ChainMap` 可以把一组 `dict` 串起来并组成一个逻辑上的 `dict`（类似于数据库的视图）。`ChainMap` 本身也是一个 `dict`，但是查找的时候，会按照顺序在内部的 `dict` 依次查找。

用 `ChainMap` 实现参数的优先级查找，即先查命令行参数，如果没有传入，再查环境变量，如果没有，就使用默认参数。
```
from collections import ChainMap
import os, argparse

# for env in os.environ:
#     print(env)

# 构造缺省参数:
defaults = { 'SOMEPARAM': 'params', 'USERNAME': 'guest'}

# 构造命令行参数:
parser = argparse.ArgumentParser()
parser.add_argument('-u', '--USERNAME')
parser.add_argument('-s', '--SOMEPARAM')
namespace = parser.parse_args()
command_line_args = {k: v for k, v in vars(namespace).items() if v is not None}

# 组合成ChainMap:
combined = ChainMap(command_line_args, os.environ, defaults)


# 打印参数:
print(combined['SOMEPARAM'])
print(combined['USERNAME'])
```

测试传入命令行参数
```
python t.py -u alice
```

## UserDict UserList UserString ...

# 参考文档
1. 官网 [collections](https://docs.python.org/3.5/library/collections.html)