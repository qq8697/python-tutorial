# enum
枚举是一组枚举成员的集合，枚举成员应该是唯一的、不可变的。

定义枚举类
```
from enum import Enum

class Color(Enum):
    RED = 1
    GREEN = 2
    BLUE = 3
```
以 1 而非 0 作为起始数值的原因在于 0 的布尔值为 False，但**所有枚举成员都应被求值为 True**。


类似于 `namedtuple` 的 api，也可以实现同样的定义。
```
Color =  Enum('Color', 'RED GREEN BLUE')
```


对枚举成员进行迭代（按定义的顺序）（不会迭代别名成员）
```
for c in Color:
    print(c)
```
使用特殊属性 `__members__` 进行迭代（会迭代别名成员）
```
for name, member in Color.__members__.items():
    print(member)
```

访问枚举成员和成员属性
```
print(Color.RED)
print(Color(1))
print(Color['RED'])

print(Color.RED.name, Color.RED.value)
```

# 应用示例
## 1. 确保唯一的枚举值
**默认情况下，枚举允许有多个名称作为某个相同值的别名**，如下 `ALIAS_FOR_SQUARE` 为 `SQUARE` 的别名
```
from enum import Enum
class Shape(Enum):
    SQUARE = 2
    DIAMOND = 1
    CIRCLE = 3
    ALIAS_FOR_SQUARE = 2

print(Shape.SQUARE == Shape.ALIAS_FOR_SQUARE)
```

如果不想要这样的行为，可以使用 `@unique` 装饰器来确保每个值在枚举中只被使用一次:
```
from enum import Enum,unique
@unique
class Shape(Enum):
    SQUARE = 2
    DIAMOND = 1
    CIRCLE = 3
```

## 2. 省略值的枚举
不关心枚举的值时可以省略值，在添加、移除或重排序成员时不必改变其余成员的值
此外需要提供一个 `repr()` 同样隐藏不关心的值
```
from enum import Enum

class NoValue(Enum):
    def __repr__(self):
        return '<%s.%s>' % (self.__class__.__name__, self.name)

class Color(NoValue):
    # 3.6 后可以使用 Enum.auto
    # RED = auto()
    # BLUE = auto()
    # GREEN = auto()

    RED = object()
    BLUE = object()
    GREEN = object()

for c in Color:
    print(repr(c))
```

## 3. 有顺序（可比较）的枚举
```
class OrderedEnum(Enum):
    def __ge__(self, other):
        if self.__class__ is other.__class__:
            return self.value >= other.value
        return NotImplemented
    def __gt__(self, other):
        if self.__class__ is other.__class__:
            return self.value > other.value
        return NotImplemented
    def __le__(self, other):
        if self.__class__ is other.__class__:
            return self.value <= other.value
        return NotImplemented
    def __lt__(self, other):
        if self.__class__ is other.__class__:
            return self.value < other.value
        return NotImplemented

class Grade(OrderedEnum):
    A = 5
    B = 4
    C = 3
    D = 2
    F = 1

Grade.C < Grade.A
```

## 4. 为枚举成员添加属性和方法
```
from enum import Enum

class Color(Enum):
    RED = ('红色', '#f00')
    GREEN = ('绿色', '#0f0')
    BLUE = ('蓝色', '#00f')

    def __init__(self,c_name,code):
        self.c_name = c_name
        self.code = code

	@property
    def info(self):
        return '%s 的中文名称是 %s 颜色编号是 %s' %(self.name, self.c_name,self.code)

print(Color.RED.info)
print(Color.RED.__dict__)
```


# 参考文档
1. 官网 [enum](https://docs.python.org/3.5/library/enum.html)