# sqllite
sqllite 轻量级的基于磁盘的数据库，不需要独立的服务器进程，使用一种非标准的 SQL 查询语言来访问

## SQLite 与 Python 类型
SQLite 原生支持如下的类型： `NULL`，`INTEGER`，`REAL`，`TEXT`，`BLOB`。 对应 python 的 `None`， `int`， `float`， `str`， `bytes`。

sqlite3 模块的类型系统的扩展：
1. [使用适配器将额外的 Python 类型保存在 SQLite 数据库中](https://docs.python.org/3.5/library/sqlite3.html#using-adapters-to-store-additional-python-types-in-sqlite-databases)
2. [将 SQLite 值转换为自定义Python 类型](https://docs.python.org/3.5/library/sqlite3.html#converting-sqlite-values-to-custom-python-types)

## 创建数据表
```
import sqlite3

# 创建 connection 对象
conn = sqlite3.connect('example.db')
# 创建 cursor 对象
cursor = conn.cursor()

# 执行 sql 语句
# 创建表
create_table_sql = '''CREATE TABLE stocks (
	short text,
	chg text,
	turnover text,
	price real,
	highs real,
	time text)
'''
cursor.execute(create_table_sql)

# 关闭连接
conn.close()
```
1. `sqlite3.connect(database[, timeout, detect_types, isolation_level, check_same_thread, factory, cached_statements, uri])`，连接SQLite 数据库，默认返回数据库连接对象 `connection`，除非使用了自定义的 `factory` 参数
	1. `timeout` 指定了这个连接等待锁释放的超时时间（默认是 5.0（5秒）。（一个数据库被多个连接访问，如果其中一个进程修改这个数据库，在这个**事务提交之前，这个数据库将会被一直锁定**）
	2. `check_same_thread` 默认为 `True`，只有当前线程可以使用该连接，如果设为 `False`，则多个线程可以共享返回的连接。 （当**多个线程使用同一个连接的时候，用户应该把写操作进行序列化**，以避免数据损坏）
	3. `cached_statements` 设置当前连接可以缓存的语句数，默认100条。（sqlite3 模块在内部**使用语句缓存来避免 SQL 解析开销**）
	4. ...

1. `Connection` 对象方法和属性
	1. `isolation_level` 获取或设置当前默认的**隔离级别**
	2. `cursor(factory=Cursor)` 返回游标对象 `cursor`
	3. `commit()` 提交当前事物，**如果没有调用这个方法，那么从上一次提交 commit() 以来所有的变化在其他数据库连接上都是不可见的**。**如果你往数据库里写了数据，但是又查询不到，请检查是否忘记了调用这个方法**。
	4. `rollback()` 回滚从上一次调用 commit() 以来所有数据库的改变
	5. `close()` 关闭数据库连接。注意，它不会自动调用 commit() 方法。**如果在关闭数据库连接之前没有调用 commit()，那么你的修改将会丢失！**
	6. ...

1. `Cursor` 对象方法和属性
	1. `execute(sql[, parameters])` 执行SQL语句。 可以是参数化 SQL 语句（即，在 SQL 语句中使用占位符）
	2. `executemany(sql, seq_of_parameters)`
	3. `executescript(sql_script)` 一次执行多条 SQL 语句，会首先执行一条 COMMIT 语句，再执行以形参方式获取的 SQL 脚本。
	4. `fetchone()` 获取查询结果集的一行，返回一个单独序列，或是在没有更多可用数据时返回 None
	5. `fetchmany(size=cursor.arraysize)` 获取查询结果集的多行，返回一个列表，当没有更多可用行时将返回一个空列表。
	6. `fetchall()` 获取查询结果集的所有（剩余）行，返回一个列表，当没有可用行时将返回一个空列表。
	7. `arraysize`，控制 fetchmany() 返回行数的可读取/写入属性，默认值为 1。

## 插入数据（更新数据&删除数据（略））
```
import sqlite3

# 创建 connection 对象
conn = sqlite3.connect('example.db')
# 创建 cursor 对象
cursor = conn.cursor()

# 执行 sql 语句
# 插入单条数据
cursor.execute("INSERT INTO stocks VALUES ('皇庭国际','0.39%', '0.65%', '12.96','12.91','2017-07-20')")

value = ('中集集团','1.35%', '1.78%', '18.07','18.06','2017-06-28')
insert_row_sql = "INSERT INTO stocks VALUES (?,?,?,?,?,?)"
cursor.execute(insert_row_sql, value)

# 插入多条数据
values = [('全新好','10.01%', '4.40%', '16.05','14.60','2017-07-13'),
          ('华联控股', '10.04%', '10.80%', '11.29', '10.26', '2017-07-20'),
          ]
inser_row_sql = "INSERT INTO stocks VALUES (?,?,?,?,?,?)"
cursor.executemany(inser_row_sql, values)

# 提交数据
conn.commit()

# 关闭连接
conn.close()
```

## 查询数据
```
import sqlite3

# 创建 connection 对象
conn = sqlite3.connect('example.db')
# 创建 cursor 对象
cursor = conn.cursor()

# 执行 sql 语句
# 查询数据

# short_name = "中集集团"
# short_name = "' or 1=1 or '1"
# cursor.execute("SELECT * FROM stocks WHERE short = '%s'" % short_name)
# for stock in cursor.fetchall():
#    print(stock)

query_sql = "SELECT * FROM stocks WHERE short=?"
short_name = ("中集集团",)
short_name = ("' or 1=1 or '1",)
cursor.execute(query_sql, short_name)
for stock in cursor.fetchall():
    print(stock)

# 或者使用以下写法
# for stock in cursor.execute(query_sql):
#     print(stock)

# 关闭连接
conn.close()
```
1. **不应该使用 Python 的字符串操作来创建查询语句，会使程序容易受到 SQL 注入攻击 --> 使用 `?` 占位符来代替值，然后把对应的值组成的元组做为 `execute()` 或 `executemany()` 方法的第二个参数**。

## 事务管理
sqlite3 模块的隐式事务管理：
1. sqlite3 模块在数据修改语言（DML）语句（即 `INSERT`/`UPDATE`/`DELETE`/`REPLACE`）之前隐式开启事务（执行 `BEGIN` 语句 ）；
1. 在非DML、非查询语句（上述语句之外的任何语句，如 `CREATE TABLE`、`SELECT` ）之前隐式提交事务。

`Connection` 对象的 `isolation_level` 参数可以控制 sqlite3 隐式执行的 `BEGIN` 语句的种类
1. `None` 禁用 sqlite3 模块的隐式事务管理，使用 `autocommit` 模式，在代码中显式地使用 `BEGIN`, `ROLLBACK`, `SAVEPOINT` 和 `RELEASE` 语句来完全控制事务状态。
2. `DEFERRED` 默认值，使用 sqlite3 模块的隐式事务管理
4. `IMMEDIATE`
5. `EXCLUSIVE`

# 参考文档
1. 官网 [sqlite3](https://docs.python.org/3.5/library/sqlite3.html) 模块
2. [pysqlite](https://github.com/ghaering/pysqlite) （sqlite3 在外部使用 “pysqlite” 名字）
3. [SQLite](https://www.sqlite.org) 官网，其文档描述了它所支持的 SQL 语法和可用的数据类型。
4. [DB-API 2.0 规范](https://www.python.org/dev/peps/pep-0249/) （需科学上网）