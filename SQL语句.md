## SQL 演练
### 1. 创建数据库 jd 创建商品表 goods
```
-- 创建 jd 数据库
create database jd charset=utf8;

-- 使用 jd 数据库
use jd;

-- 创建商品表 goods
create table goods(
    id int unsigned primary key auto_increment not null,
    name varchar(150) not null,
    cate_name varchar(40) not null,
    brand_name varchar(40) not null,
    price decimal(10,3) not null default 0,
    is_show bit not null default 1,
    is_saleoff bit not null default 0
);
```

### 2. 向 goods 插入数据
```
-- 向goods表中插入数据

insert into goods values(0,'r510vc 15.6英寸笔记本','笔记本','华硕','3399',default,default); 
insert into goods values(0,'y400n 14.0英寸笔记本电脑','笔记本','联想','4999',default,default);
insert into goods values(0,'g150th 15.6英寸游戏本','游戏本','雷神','8499',default,default); 
insert into goods values(0,'x550cc 15.6英寸笔记本','笔记本','华硕','2799',default,default); 
insert into goods values(0,'x240 超极本','超级本','联想','4880',default,default); 
insert into goods values(0,'u330p 13.3英寸超极本','超级本','联想','4299',default,default); 
insert into goods values(0,'svp13226scb 触控超极本','超级本','索尼','7999',default,default); 
insert into goods values(0,'ipad mini 7.9英寸平板电脑','平板电脑','苹果','1998',default,default);
insert into goods values(0,'ipad air 9.7英寸平板电脑','平板电脑','苹果','3388',default,default); 
insert into goods values(0,'ipad mini 配备 retina 显示屏','平板电脑','苹果','2788',default,default); 
insert into goods values(0,'ideacentre c340 20英寸一体电脑 ','台式机','联想','3499',default,default); 
insert into goods values(0,'vostro 3800-r1206 台式电脑','台式机','戴尔','2899',default,default); 
insert into goods values(0,'imac me086ch/a 21.5英寸一体电脑','台式机','苹果','9188',default,default); 
insert into goods values(0,'at7-7414lp 台式电脑 linux ）','台式机','宏碁','3699',default,default); 
insert into goods values(0,'z220sff f4f06pa工作站','服务器/工作站','惠普','4288',default,default); 
insert into goods values(0,'poweredge ii服务器','服务器/工作站','戴尔','5388',default,default); 
insert into goods values(0,'mac pro专业级台式电脑','服务器/工作站','苹果','28888',default,default); 
insert into goods values(0,'hmz-t3w 头戴显示设备','笔记本配件','索尼','6999',default,default); 
insert into goods values(0,'商务双肩背包','笔记本配件','索尼','99',default,default); 
insert into goods values(0,'x3250 m4机架式服务器','服务器/工作站','ibm','6888',default,default); 
insert into goods values(0,'商务双肩背包','笔记本配件','索尼','99',default,default);
```

### 3. 查询综合练习
```
-- 查询 cate_name 为 '超极本' 的商品名称、价格
select name,price from goods where cate_name = '超级本';

-- 显示商品的种类
select cate_name from goods group by cate_name;

-- 求所有电脑产品的平均价格,并且保留两位小数
select round(avg(price),2) as avg_price from goods;

-- 显示每种商品的平均价格
select cate_name,avg(price) from goods group by cate_name;

-- 查询每种类型的商品中 最贵、最便宜、平均价、数量
select cate_name,max(price),min(price),avg(price),count(*) from goods group by cate_name;

-- 查询所有价格大于平均价格的商品，并且按价格降序排序
select id,name,price from goods 
where price > (select round(avg(price),2) as avg_price from goods) 
order by price desc;

-- 查询每种类型中最贵的电脑信息
select * from goods
inner join 
    (
        select cate_name, max(price) as max_price
		from goods group by cate_name
    ) as goods_new_info 
on goods.cate_name = goods_new_info.cate_name and goods.price = goods_new_info.max_price;
```

### 4. 创建商品分类表 goods_cates 并插入数据
```
-- 创建商品分类表 goods_cates
create table if not exists goods_cates(
    id int unsigned primary key auto_increment,
    name varchar(40) not null
);

-- 将商品的种类写入到 goods_cates
insert into goods_cates (name) select cate_name from goods group by cate_name;
```

### 5. 将 goods_cates 商品分类 id 更新到 goods 
```
-- 将 goods_cates 商品分类 id 更新到 goods
update goods as g inner join goods_cates as c on g.cate_name = c.name set g.cate_name = c.id;
```

### 6. 创建商品品牌表 goods_brands 并插入数据
```
-- 在创建数据表的时候一起插入数据
-- 注意: 需要对 brand_name 用 as 起别名，否则 name 字段就没有值
create table goods_brands (
    id int unsigned primary key auto_increment,
    name varchar(40) not null) select brand_name as name from goods group by brand_name;
```

### 7. 将 goods_brands 品牌 id 更新到 goods
```
-- 将 goods_brands 品牌 id 更新到 goods
update goods as g inner join goods_brands as b on g.brand_name = b.name set g.brand_name = b.id;
```

### 8. 修改 goods 表结构
```
-- 查看 goods 的表结构，cate_name 和 brand_name 对应的类型为 varchar 但实际存储的都是数字
desc goods;

-- 通过 alter table 修改 goods 表结构
alter table goods  
change cate_name cate_id int unsigned not null,
change brand_name brand_id int unsigned not null;
```

### 9. 设置外键
可以使用外键对数据的有效性进行验证，防止无效信息的插入，会在数据插入前判断外键的值是否存在
```
-- 给 goods 表 brand_id 和 cate_id 字段添加外键约束
alter table goods add foreign key (brand_id) references goods_brands(id);
alter table goods add foreign key (cate_id) references goods_cates(id);

-- 在创建数据表的时候就设置外键约束
create table goods(
    id int primary key auto_increment not null,
    name varchar(40) default '',
    price decimal(5,2),
    cate_id int unsigned,
    brand_id int unsigned,
    is_show bit default 1,
    is_saleoff bit default 0,
    foreign key(cate_id) references goods_cates(id),
    foreign key(brand_id) references goods_brands(id)
);
```

### 10. 取消外键
**在实际开发中，很少会使用到外键约束，会极大的降低表更新的效率**
```
-- 需要先获取外键约束名称，该名称系统会自动生成，可以通过查看表创建语句来获取名称
show create table goods;

-- 获取名称之后就可以根据名称来删除外键约束
alter table goods drop foreign key 外键名称;
```

### 11. 创建视图
```
-- 创建查询三张表的视图
create view v_goods_info as
select g.*, c.name as cate_name, b.name as brand_name 
from goods as g 
left join goods_cates as c on g.cate_id = c.id 
left join goods_brands as b on g.brand_id = b.id

-- 使用视图
select * from v_goods_info;
```
