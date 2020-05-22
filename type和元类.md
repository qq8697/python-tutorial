# type 和 元类

## 使用 type 创建类
定义函数、类和全局变量，其实就是创建一个个“对象”， `globals()` 返回结果中会有一个对应的 `key`，即函数名、类名或全局变量名，指向这个对象的内存空间。

类也是对象，可以在运行时动态的创建，比如写在函数中，在函数执行时创建：
```
def gen_class():
    class T1():
        k1 = 1
        k2 = 2
    return T1

T1 = gen_class()
t = T1()
print(T1.k1)
```
ps. 这样写其实没有意义，仍需要自己编写整个类的代码

使用内置函数 `type(name, bases, dict)` 创建类：
```
T2 = type("Test", (), {"k1": 1, "k2": 2})
t = T2()
print(T2.k2)
```
1. `bases` 参数，是一个元组，其内部的值是父类的名字，而不是字符串
2. `dict` 参数，是一个字典，定义的是类属性。
1. 使用 `type` 创建类，字典中的键值对不一样可以返回不同的类，即可以通过 `type` 动态的创建类。
2. 通过 `type` 创建类和 `class 类名` 是一样的，因为 Python 解释器遇到 `class` 定义时，仅仅是扫描一下 `class` 定义的语法，然后调用 `type() `函数创建。

使用 `type` 创建类时继承以及添加实例方法、类方法、静态方法等与 `class 类名` 的方式相近：
```
P = type('Parent', (), {'bar': 'bar'})

def instance_method(self):
    print('instance method')

@staticmethod
def static_method():
    print('static_method')

@classmethod
def class_method(cls):
    print('class_method')

C = type('Child',(P, ), {'instance_method': instance_method, 'static_method': static_method, 'class_method': class_method})

child = C()
print(child.__class__.__dict__)
```

## 元类
还记的 `type` 函数的另一用法吗？ —— 查看对象的类型
```
class T1():
	pass

T2 = type("Test", (), {})

print(type(T1))
print(type(T2))
```

```
<class 'type'>
<class 'type'>
```
不论是使用 `class 类名` 还是 `type(name, bases, dict)` 创建的类，使用 `type()` 函数查这一类对象的类型时都是 `type`，这个值即这个类的元类。

**python 中的一切都是对象，可以使用 `__class__` 属性获取创建它的类，而内置函数 `type` 实质上是 python 用来创建所有类的元类。**
```
num = 35
print(num.__class__) # <class 'int'>
print(num.__class__.__class__) # <class 'type'>

def func():
    pass
print(func.__class__) # <class 'function'>
print(func.__class__.__class__) # <class 'type'>

class C():
    pass
print(C.__class__) # <class 'type'>

c = C()
print(c.__class__) # <class '__main__.C'>
print(C.__class__) # <class 'type'>

o = object()
print(o.__class__) # <class 'object'>
print(object.__class__) # <class 'type'>
```

**类用于创建实例对象；元类用于创建类（对象）**。
可以在创建类的时候使用 `metaclass` 参数指定元类，如果未指定，即使用**默认的元类 `type`** 创建类。（[`__metaclass__`](https://docs.python.org/3.5/library/2to3.html?highlight=__metaclass__) （python2 语法））

## 自定义元类
元类的用途：拦截类的创建 -> 修改类 -> 返回修改之后的类

假定有一个需求：模块里的所有的类的属性都应该是大写形式，可以在模块级别定义元类，所有类都通过这个元类来创建的方式实现。

实际上元类不需要是一个正式的类，以下使用函数实现元类：
```
def upper_attr(class_name, class_parents, class_attr):
    new_attr = {}
    # 遍历属性字典
    for name, value in class_attr.items():
        # 把不是__开头的属性名变为大写
        if not name.startswith("__"):
            new_attr[name.upper()] = value

    # 调用type来创建类
    return type(class_name, class_parents, new_attr)

class Foo(object, metaclass = upper_attr):
    bar = 'dosth'

f = Foo()
print(hasattr(f, 'bar'))
print(hasattr(f, 'BAR'))
```

使用类实现元类：
```
class UpperAttrMetaClass(type):

    def __new__(cls, class_name, class_parents, class_attr):
        # 遍历属性字典，把不是__开头的属性名字变为大写
        new_attr = {}
        for name, value in class_attr.items():
            if not name.startswith("__"):
                new_attr[name.upper()] = value

        # 方法1：通过'type'来做类对象的创建
        return type(class_name, class_parents, new_attr)

        # 方法2：复用type.__new__方法
        # 这就是基本的OOP编程，没什么魔法
        # return type.__new__(cls, class_name, class_parents, new_attr)

class Foo(object, metaclass = UpperAttrMetaClass):
    bar = 'dosth'

f = Foo()
print(hasattr(f, 'bar'))
print(hasattr(f, 'BAR'))
```
1. 自定义的元类需要继承 `type` 类，否则会报 `TypeError: metaclass conflict` 错误。
2. `__new__` 用来创建对象并返回，很少重写，除非希望能够控制对象的创建。`metaclass` 指示 Python 解释器在创建类（对象）时，要通过 `元类.__new__()` 来创建，所以这里需要重写。




# 参考文档
1. 官网 [type](https://docs.python.org/3.5/library/functions.html?highlight=globals#type) | [metaclass-example](https://docs.python.org/3.5/reference/datamodel.html?highlight=metaclass#metaclass-example)