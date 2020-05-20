# __slots__ 限制实例的属性
默认情况下，类的实例使用字典（ `__dict__` ）存储其自身的属性，如果实例的属性很少会浪费空间，当创建大量实例时，空间消耗会非常严重。
```
class Cat:

    def __init__(self, name):
        self.name = name
    def eat(self):
        print('%s is eating' % self.name)


tom = Cat("Tom")
tom.eat()
print(tom.__dict__)
print(Cat.__dict__)
```
ps. 实例属性属于实例对象，实例方法等属于类对象

可以在类中定义 `__slots__` 覆盖默认行为，使 `__dict__` 不再被创建。 **`__slots__` 中声明的变量会在每个实例中保留足够的空间来存储每个变量的值**，其值可以是 string, iterable, sequence of strings
```
class Cat:
    # __slots__ = 'name','age'
    # __slots__ = ['name', 'age']
    __slots__ = ('name', 'age')
    
    def __init__(self, name, age):
        self.name = name
        self.age = age

tom = Cat("Tom", 2)
# print(tom.__dict__) # AttributeError: 'Cat' object has no attribute '__dict__'
```

`__slots__` 可以用来限制该类的实例属性，不论是静态定义的还是动态添加的
```
class Cat:
    __slots__ = ('name', 'friend')

    def __init__(self, name):
        self.name = name
        # self.age = 2 # 'Cat' object has no attribute 'age'

tom = Cat('tom')

# 动态的为对象添加属性
tom.friend = 'tommy'
print(tom.friend)

# tom.age = 2 # 'Cat' object has no attribute 'age'
# print(tom.age)
```

## 番内：动态语言的特性 - 为实例动态的添加属性和方法
python 是一门动态语言，有其灵活性，其动态表现在在程序执行过程中，用类创建实例之后，可以给该实例绑定新的属性和方法。

定义一个空的类，并创建一个实例，之后为这个实例动态的添加属性和方法（借助 `types` 模块 `MethodType` 方法）
```
class Cat:
	pass

tom = Cat()

# 动态添加属性
tom.name = 'Tom'
print(tom.name)

# 动态添加方法
from types import MethodType
tom.set_age = MethodType(set_age, tom)
tom.set_age(3)
print(tom.age)

# 动态的给所有实例添加方法
# Cat.set_age = set_age
```
ps. 通常情况下，`Cat.set_age` 的 `set_age` 方法应该定义在类中，此处这么写只是为了演示在程序运行的过程中为实例动态添加方法。

# 参考文档
1. 官网 [__slots__](https://docs.python.org/3.5/reference/datamodel.html?highlight=__slots__#object.__slots__) | [types](https://docs.python.org/3.5/library/types.html)