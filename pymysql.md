# pymysql

## 创建数据表
```
import pymysql

# 连接数据库，创建 connection 对象
connection = pymysql.connect(
    host='192.168.127.128',
    user='root',
    password='mysql',
    db='example',
    charset='utf8mb4')

try:
    # 创建 cursor 对象
    with connection.cursor() as cursor:
        # 执行 sql 语句
        # 创建表
        create_table_sql = '''CREATE TABLE stocks (
            id INT(10) unsigned NOT NULL auto_increment PRIMARY KEY,
            short VARCHAR(6) NOT NULL,
            chg VARCHAR(10) NOT NULL,
            turnover VARCHAR(10) NOT NULL,
            price DECIMAL(10,2) NOT NULL,
            highs DECIMAL(10,2) NOT NULL,
            time date DEFAULT NULL);
        '''
        cursor.execute(create_table_sql)

finally:
    # 关闭连接
    connection.close()
```
1. `connect` 的参数
	1. `host`：连接的 mysql 主机，若本机值为 `localhost`
	2. `port`：连接的 mysql 主机的端口，默认是 3306
	3. `user`：连接的用户名
	5. `password`：连接的密码
	3. `database`：数据库的名称
	4. `db`：也表示数据库的名称，用于兼容 MySQLdb（较底层的连接 mysql 的模块）
	6. `charset`：通信采用的编码方式，utf8mb4 和 utf8 完全兼容，但它支持最新的 Unicode 标准，可以显示 emoji 字符。
	7. ...

1. `Connection` 对象方法和属性
	1. `cursor(cursor=None)` 创建游标
	2. `close()` 关闭连接
	3. `begin()` 开启事务
	3. `commit()` 提交更改
	4. `rollback()` 回滚事务
	5. ...

1. `Cursor` 对象方法和属性
	2. `execute(query, args=None)` 执行 sql，返回受影响的行数
	3. `executemany(query, args)`
	6. `fetchone()` 获取查询结果集的一行
	7. `fetchmany(size=None)` 获取查询结果集的多行
	8. `fetchall()` 获取查询结果集的所有（剩余）行
	1. `close()` 关闭光标 （会“耗尽”剩余数据）
	2. ...

## 插入数据（更新数据&删除数据（略））
```
import pymysql

# 连接数据库，创建 connection 对象
connection = pymysql.connect(
    host='192.168.127.128',
    user='root',
    password='mysql',
    db='example',
    charset='utf8')

try:
    # 创建 cursor 对象
    with connection.cursor() as cursor:
        # 执行 sql 语句
        # 插入单条数据
        cursor.execute("INSERT INTO stocks VALUES (0, '皇庭国际','0.39%', '0.65%', 12.96,12.91,'2017-07-20')")

        value = (0, '中集集团', '1.35%', '1.78%', 18.07, 18.06, '2017-06-28')
        insert_row_sql = "INSERT INTO stocks VALUES (%s, %s, %s, %s, %s, %s, %s)"
        cursor.execute(insert_row_sql, value)

        # 插入多条数据
        values = [(0, '全新好', '10.01%', '4.40%', 16.05, 14.60, '2017-07-13'),
                  (0, '华联控股', '10.04%', '10.80%', 11.29, 10.26, '2017-07-20'),
                  ]
        inser_row_sql = "INSERT INTO stocks VALUES (%s, %s, %s, %s, %s, %s, %s)"
        cursor.executemany(inser_row_sql, values)

    # connection is not autocommit by default. So you must commit to save your changes.
    connection.commit()

finally:
    # 关闭连接
    connection.close()
```

## 查询数据
```
import pymysql

# 连接数据库，创建 connection 对象
connection = pymysql.connect(
    host='192.168.127.128',
    user='root',
    password='mysql',
    db='example',
    charset='utf8')

try:
    # 创建 cursor 对象
    with connection.cursor() as cursor:
        # 执行 sql 语句
        # 查询数据

        # short_name = "中集集团"
        # short_name = "' or 1=1 or '1"
        # cursor.execute("SELECT * FROM stocks WHERE short = '%s'" % short_name)
        # for stock in cursor.fetchall():
        #     print(stock)

        query_sql = "SELECT * FROM stocks WHERE short = %s"
        short_name = ("中集集团",)
        # short_name = ("' or 1=1 or '1",)
        cursor.execute(query_sql, short_name)
        for stock in cursor.fetchall():
            print(stock)

finally:
    # 关闭连接
    connection.close()
```
1. **不应该使用 Python 的字符串操作来创建查询语句，会使程序容易受到 SQL 注入攻击**，sql注入：
	1. 原理 => 由自行拼接sql语句造成
		```
		sql = "select * from tb_name where field = '%s';" % param
		// 注入 "' or 1=1 or '1" => select * from tb_name where field = '' or 1=1 or '1';
		```
			
	3.  解决方案 => ** 使用 `s%` 占位符来代替值，然后把对应的值组成的元组做为 `execute()` 或 `executemany()` 方法的第二个参数， 由 execute 自行解决 sql语句的拼接**
		```
		sql = "select * from tb_name where field = %s;"
		params = (param1, )
		cursor.execute(sql, params)
		```

# 参考文档
1. [pymysql](https://pymysql.readthedocs.io/en/latest/)
2. [DB-API 2.0 规范](https://www.python.org/dev/peps/pep-0249/) （需科学上网）