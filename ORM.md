# 使用元类实现 ORM 框架

## ORM
ORM（Object Relational Mapping）对象-关系映射，把关系数据库的一行映射为一个对象，一个类对应一个表，其意义在于能够以 `obj.xx = yy` or `obj.zz()` 等操作对象的方式操作数据库。

一般使用形式如下：
```
# 类名对应表名
class User(Model):
    uid = ('uid', "int unsigned")
    name = ('username', "varchar(30)")
    email = ('email', "varchar(30)")
    password = ('password', "varchar(30)")

# 实例对应记录
u = User(uid=1001, name='admin', email='test@163.com', password='123456')
u.save()
```

`u.save()` 内部会执行如下 sql 语句：
```
insert into User (username, email, password, uid) values('admin', 'test@163.com', '123456', 1001)
```

## 通过元类实现如上的 ORM insert（忽略 int unsigned 等约束）
定义元类 `ModelMetaclass` ，继承 `type` 类，重写 `__new__` 方法，将字段和表名分别保存在 `__mappings__` 和 `__table__`  属性中。
```
class ModelMetaclass(type):
    def __new__(cls, name, bases, attrs):
        mappings = dict()
        # 判断是否需要保存
        for k, v in attrs.items():
            # 判断是否是指定的 StringField 或者 IntegerField 的实例对象
            if isinstance(v, tuple):
                print('Found mapping: %s ==> %s' % (k, v))
                mappings[k] = v

        # 删除这些已经在字典中存储的属性
        for k in mappings.keys():
            attrs.pop(k)

        attrs['__mappings__'] = mappings  # 保存属性和列的映射关系
        attrs['__table__'] = name  # 假设表名和类名一致
        return type.__new__(cls, name, bases, attrs)
```

定义 `User` 类，其元类为 `ModelMetaclass`，定义与数据库表字段对应的类属性，`__init__` 方法将传入的关键字参数设置为实例属性，`save` 方法实现数据库插入操作。
```
class User(metaclass = ModelMetaclass):
    uid = ('uid', "int unsigned")
    name = ('username', "varchar(30)")
    email = ('email', "varchar(30)")
    password = ('password', "varchar(30)")

    def __init__(self, **kwargs):
        for name, value in kwargs.items():
            setattr(self, name, value)

    def save(self):
        fields = []
        args = []
        for k, v in self.__mappings__.items():
            fields.append(v[0])
            args.append(getattr(self, k, None))

        sql = 'insert into %s (%s) values (%s)' % (self.__table__, ','.join(fields), ','.join([str(i) for i in args]))
        print('SQL: %s' % sql)
```

当指定元类之后，以上的类属性将不在类中，而是在 `__mappings__` 属性指定的字典中存储，以上 `User` 类中实际有如下类属性（原有的在元类中被删除）：
```
__mappings__ = {
    "uid": ('uid', "int unsigned")
    "name": ('username', "varchar(30)")
    "email": ('email', "varchar(30)")
    "password": ('password', "varchar(30)")
}
__table__ = "User"
```

实例化一条记录，并调用 `save` 方法插入数据库：
```
u = User(uid=1001, name='admin', email='test@163.com', password='123456')
u.save()
```

输出结果如下：
```
Found mapping: password ==> ('password', 'varchar(30)')
Found mapping: uid ==> ('uid', 'int unsigned')
Found mapping: email ==> ('email', 'varchar(30)')
Found mapping: name ==> ('username', 'varchar(30)')
SQL: insert into User (email,password,username,uid) values (1001,123456,admin,test@163.com)
```

可以看到插入的数据格式是有错误的，应该是如下的形式：
```
(1001,'123456','admin','test@163.com')
```

在 `User` 类的 `save` 方法中修复数据格式的问题：
```
class User(metaclass = ModelMetaclass):
    uid = ('uid', "int unsigned")
    name = ('username', "varchar(30)")
    email = ('email', "varchar(30)")
    password = ('password', "varchar(30)")

    def __init__(self, **kwargs):
        for name, value in kwargs.items():
            setattr(self, name, value)

    def save(self):
        fields = []
        args = []
        for k, v in self.__mappings__.items():
            fields.append(v[0])
            args.append(getattr(self, k, None))

        args_temp = list()
        for temp in args:
            # 判断入如果是数字类型
            if isinstance(temp, int):
                args_temp.append(str(temp))
            elif isinstance(temp, str):
                args_temp.append("'%s'" % temp)

        # sql = 'insert into %s (%s) values (%s)' % (self.__table__, ','.join(fields), ','.join([str(i) for i in args]))
        sql = 'insert into %s (%s) values (%s)' % (self.__table__, ','.join(fields), ','.join(args_temp))
        print('SQL: %s' % sql)

u = User(uid=1001, name='admin', email='test@163.com', password='123456')
u.save()
```

本质是一个字符串拼接的问题：
```
l1 = [1001,'123456','admin','test@163.com']
l2 = ['1001',"'123456'","'admin'","'test@163.com'"]
print(','.join([str(i) for i in l1]))
print(','.join([str(i) for i in l2]))
```

优化：将 `User` 类中与表字段无关的代码抽取到基类 `Model` 中（`Model` 元类为 `ModelMetaclass` ，`User` 继承 `Model`）：
```
class Model(object, metaclass = ModelMetaclass):
    def __init__(self, **kwargs):
        for name, value in kwargs.items():
            setattr(self, name, value)

    def save(self):
        fields = []
        args = []
        for k, v in self.__mappings__.items():
            fields.append(v[0])
            args.append(getattr(self, k, None))

        args_temp = list()
        for temp in args:
            # 判断入如果是数字类型
            if isinstance(temp, int):
                args_temp.append(str(temp))
            elif isinstance(temp, str):
                args_temp.append("'%s'" % temp)
        sql = 'insert into %s (%s) values (%s)' % (self.__table__, ','.join(fields), ','.join(args_temp))
        print('SQL: %s' % sql)


class User(Model):
    uid = ('uid', "int unsigned")
    name = ('username', "varchar(30)")
    email = ('email', "varchar(30)")
    password = ('password', "varchar(30)")
```