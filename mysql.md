# MySQL

## （常用）数据类型
整数：
- `smallint`： 字节大小 2，有符号范围 -32768 ~ 32767，无符号范围 0 ~ 65535。
- `int`： 字节大小 4，有符号范围 -2147483648 ~2147483647，无符号范围 0 ~ 4294967295。

小数：
- `decimal`： `decimal(5,2)` 表示共 5 位数，小数占 2 位。

字符串：
- `varchar`：可变长度的字符串 `varchar(3)` 输入 `'ab'`，实际存储为`'ab'`, 输入`'abcd'`，实际存储为`'abc'`
- `char`：固定长度的字符串 `char(3)` 输入 `'ab'`，实际存储为`'ab '`，输入`'abcd'` 实际存储为 `'abc'`
- `text`：长文本

日期时间: 
- `date`： 字节大小 4 `'2020-01-01'`
- `time`： 字节大小 3 `'12:29:59'`
- `datetime`： 字节大小 8 `'2020-01-01 12:29:59'`
- `timestamp`： 字节大小 4 `'1970-01-01 00:00:01' UTC ~ '2016-01-01 00:00:01' UTC`

枚举类型(enum)

## 约束
- `primary key`：主键，物理上存储的顺序
- `not null`：非空，此字段不允许填写空值
- `unique`：唯一，此字段的值不允许重复
- `default`：默认，当不填写此值时会使用默认值，如果填写时以填写为准
- `foreign key`：外键，对关系字段进行约束，当为关系字段填写值时，会到关联的表中查询此值是否存在，如果存在则填写成功，如果不存在则填写失败并抛出异常

## MYSQL 命令行脚本
### 1. 对数据库的常用操作（连接、退出、创建、查看、删除、备份、恢复、导入）
```
-- 连接数据库
mysql -uroot -p
-- 退出数据库
exit
quit

-- 创建数据库
create database db_name charset=utf8;

-- 查看创建数据库的语句
show create database db_name;

-- 查看所有数据库
show databases;

-- 使用数据库
use db_name;

-- 查看当前使用的数据库
select database();

-- 删除数据库
drop database db_name;

-- 备份数据库（终端下）
mysqldump -uroot -p db_name > xx.sql

-- 恢复数据库（终端下）
mysql -uroot -p new_db_name < xx.sql

-- 导入数据（MYSQL内）
source xx.sql;
```

### 2. 对数据表的常用操作（查看、创建、修改、删除）
```
-- 查看所有数据表
show tables;

-- 创建表
-- auto_increment
-- not null
-- primary key
-- default
-- create table tb_name (field type constraint[, field type constraint]);
-- if not exists
-- foreign key references（尽量少用外键，如果有外键完整性约束，需由程序控制）
create table if not exists classes (
	id int, 
	name varchar(20)
);
create table students (
	id int unsigned not null primary key auto_increment,
	name varchar(20),
	age tinyint unsigned,
	high decimal(5,2),
	gender enum("男","女","保密") default "保密",
	cls_id int unsigned,
	foreign key(cls_id) references classes(id),
);

insert into students values(0, "whb", 18 ,180.15, "男", 0);
select * from students;

-- 查看表的创建语句
show create table tb_name;

-- 查看表结构
desc tb_name;

-- 修改表-添加filed
alter table tb_name add col_name type;

-- 修改表-修改filed：不重命名版
alter table tb_name modify col_name type constraint;

-- 修改表-修改filed：重命名版
alter table tb_name change o_name n_name type constraint;

-- 修改表-删除字段
alter table tb_name drop col_name;

-- 修改表-删除外键
alter table tb_name drop foreign key foreignkey_name;

-- 删除表
drop table tb_name;
```

### 3. 数据的增删改查
```
-- 增加
	-- 全列插入 主键可以使用 0 null default占位（枚举下标从1开始）
	-- 部分插入
	insert into tb_name (f1, f2) values (v1, v2);
	-- 多行插入
	insert into tb_name (f1, f2) values (v1, v2), (v3, v4);
	-- 插入查询数据无需 values
	insert into tb_name (f1) select f1 from tb_name2 group by f1;

-- 修改
	update tb_name set col1=v1, col2=v2 where condition;

-- 删除
	-- 物理删除
	delete from tb_name where condition;
	-- 逻辑删除 用一个字段如is_delete bit类型
	alter table tb_name add is_delete bit default 0;
	update tb_name set is_delete=1 where condition;

-- 查询
	-- 查询所有字段
	-- 指定条件查询 where
	-- 查询指定字段 select col1, col2
	-- 指定别名 as
		-- 字段别名 field as f_alias_name
		-- 表别名 tb_name as tb_alias_name
		-- tb_alias_name.f_alias_name
	select col1 as 列1, col2 as 列2 from tb_name where condition;
	-- 消除重复行 distinct	
	select distinct field from tb_name;
```

### 4. 数据查询（进阶）
```
-- 条件查询 where
	-- 比较运算符 > < >= <= = != <>
	-- 逻辑运算符 and or not （优先级 not > and > or）
	select * from tb_name where not field1 <= v1 and field2 = v2;

-- 模糊查询 like 
	-- % 替换0或多个 _替换1个 rlike 正则
	select * from tb_name where field like '小%';
	select * from tb_name where field rlike '^小.*$';

-- 范围查询 in between and 
select * from tb_name where field in (v1, v2);
select * from tb_name where field between v1 and v2;

-- 空判断 is (not) null
select * from tb_name where field is null;

-- 排序
	-- order by field asc | desc （升序|降序）
	select * from tb_name where condition order by field1 asc, field2 desc;

-- 聚合函数
	-- 总数 count
	select count(*) from tb_name where condition;
	-- 最大值 max()
	-- 最小值 min()
	-- 求和 sum()
	-- 平均值 avg()
	-- 近似值 round()

-- 分组
	-- group by
	-- + group_concat(field)
	-- + 聚合函数
	-- + having 对分组（结果集）进行条件判断|where 对原表进行判断
	select field, group_concat(field1) from tb_name where condition group by field having avg(field2) > v3;
	-- + with rollup
	select field,count(*) from tb_name where condition group by field with rollup;
	
-- 分 页
	-- limit start, count
	-- 第N页 =>limit (n-1)*每页个数, 每页个数
	select * from tb_name limit 0 ,5;

-- 连接查询
	-- 内连接 交集 inner join ...on
	select * from tb_name1 inner join tb_name2 on tb_name1.field = tb_name2.field;
	-- 左外连接 左表全部显示，右表显示符合条件 left join ...on
	select * from tb_name1 left join tb_name2 on tb_name1.field = tb_name2.field;
	-- 右外连接 right join

-- 自关联 一列用到另一列的值
	select city.* from areas as city
	inner join areas as province on city.pid = province.aid
	where province.atitle = '山西省';

-- 子查询（嵌入另一个查询）
	-- 标量子查询 返回单个（一行一列）数据
	select * from tb_name1 where field1 = (select max(field2) from tb_name2);
	-- 列级子查询 返回一列多行数据
	select * from tb_name1 where field1 in (select field2 from tb_name2);
	-- 行级子查询 返回一行多列数据（将多个字段合成一个行元素）
	select * from tb_name1 where (field1,field2) > (select avg(field1),avg(field2) from tb_name2);
```

### 小结：完整的 select 格式
```
select distinct *
from 表名
where ....
group by ... having ...
order by ...
limit start,count
```
执行顺序为：
1. from 表名
2. where ....
3. group by ...
4. select distinct *
5. having ...
6. order by ...
7. limit start,count

## MYSQL 进阶
1. **视图** `select` 语句执行后返回的结果集，是对若干张基本表的引用，一张虚表
	```
	-- 定义视图 
	create view vw_name as select语句;
	
	-- 查看表（视图也是表） 
	show tables;

	-- 查看视图描述
	desc vw_name;
	
	-- 使用视图 
	select * from vw_name;
	
	-- 删除视图 
	drop view vw_name;
	```
	1. 视图作用：
		1. 提高重用性
		1. 重构数据库，却不影响已有程序的运行
		1. 提高安全性，对不同的用户提供不同视图
		1. 数据更清晰

2. **事务** 一个操作序列 要么都执行 要么都不执行
	```
	-- 开启事务（或者 `begin`）
	start transaction;

	-- 数据变更（变更会维护到本地缓存中，而不是物理表）
	select balance from checking where id = 1;
	update checking set balance = balance - 200 where id = 1;
	update checking set balance = balance + 200 where id = 2;

	-- 提交事务（将缓存中的数据变更更新到物理表）
	commit;

	-- 回滚事务（放弃缓存中的数据变更）
	rollback;
	```
	1. 四大特性（ACID）
		1. 原子性（atomicity）一个事物为不可分割的最小工作单元
		2. 一致性（consistency）从一个一致性状态转换到另一个一致性状态
		3. 隔离性（isolation）一个事物提交前，对其它事物不可见
		4. 持久性（durability）
	1. 表的引擎必须是 innodb 类型才可以使用事务。（mysql 表默认使用 innodb）（`show create table tb_name;` 可以查看表的引擎）
	2. 修改数据的命令会自动的触发事务，包括 `insert`、`update`、`delete`；手动开启事务的原因是：一次进行多个数据的修改，要么一起成功，要么一起失败。

3. **索引** 提高查询效率（会影响插入和更新的速度，因为插入和更新时需要更新每个索引文件）
	```
	-- 创建索引 
	create index idx_name on tb_name(field(long));

	-- 查看索引 
	show index from tb_name;

	-- 删除索引 
	drop index idx_name on tb_name;
	```
	1. 开启运行时间监测 `set profiling = 1;` 
	2. 查看执行用时 `show profilies`
	

## the more for MYSQL  
4. // 账户管理
	1. 账户体系
		1. 服务实例级账号 
		2. 数据库级别账号 对特定的数据库执行增删改查
		3. 数据表级别账号
		4. 字段级别的权限
		1. 存储过程级别的账号
	1. 账户操作：查看用户、创建账户、删除账户、修改密码、授权等

5. // 主从
	1. 同步机制 基于二进制日志机制，主服务器使用二进制日志记录数据库的变动情况，从服务器通过读取和执行该文件来保持和主服务器的数据一致。



# 参考文档
1. [mysql](http://www.mysql.com/) 官网