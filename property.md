## property属性
**定义像实例方法，调用像实例属性的特殊属性**。（其实际意义是内部进行一系列计算，并返回计算结果。）

## 创建 property 属性的第一种方法：装饰器
添加 `@property` 装饰

```
class Pager(object):
	def __init__(self, crt_page):
		self.crt_page = crt_page
		self.per_items = 10

	@property
	def start(self):
		return (self.crt_page - 1) * self.per_items

	@property
	def end(self):
		return self.crt_page* self.per_items

p = Pager(1)
p.start
p.end
```

## property 与 getter、setter、deleter
旧式类的属性只有一种访问方式，仅对应`@property` 装饰的方法；
新式类的**属性**有三种**访问方式**：`getter`、`setter`、`deleter`，分别对应 `@property`、 `@方法名.setter`、 `@方法名.deleter` 装饰的方法

```
class Goods(object):
	def __init__(self):
		# 原价
		self.ori_price = 100
		# 折扣
		self.discount = 0.8	

	@property
	def price(self):
		return self.ori_price * self.discount

	@price.setter
	def price(self,value)
		self.ori_price = value

	@price.deleter
	def price(self)
		del self.ori_price

g = Goods()
g.price
g.price = 200
del g.price
```

## 创建 property 属性的第二种方法：在类中定义值为 property 对象的类属性
使用此方法创建 property 属性时，旧式类与新式类无区别

`class property(fget=None, fset=None, fdel=None, doc=None)`
fget，执行 `对象.属性` 时自动触发的方法
fset，执行 `对象.属性 = value` 时自动触发的方法
fdel，执行 `del 对象.属性` 时自动触发的方法
doc，执行 `对象.属性.__doc__` 获取属性的描述信息

```
class Goods(object):

    def __init__(self):
        # 原价
        self.original_price = 100
        # 折扣
        self.discount = 0.8

    def get_price(self):
        new_price = self.original_price * self.discount
        return new_price

    def set_price(self, value):
        self.original_price = value

    def del_price(self):
        del self.original_price

    price = property(get_price, set_price, del_price, '价格属性描述...')

g = Goods()
g.price
g.price = 200
del g.price
```

## 应用场景
为私有属性 `_xx` 添加 getter 和 setter 方法，如 Django `WSGIRequest` 的实现
```
class WSGIRequest(http.HttpRequest):
    def __init__(self, environ):
        ...

    def _get_post(self):
        if not hasattr(self, '_post'):
            self._load_post_and_files()
        return self._post

    def _set_post(self, post):
        self._post = post

    POST = property(_get_post, _set_post)
```

# 参考文档
1. 官网 内置函数 [property](https://docs.python.org/3.5/library/functions.html?highlight=property#property)