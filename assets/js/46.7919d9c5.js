(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{409:function(s,a,n){"use strict";n.r(a);var t=n(25),e=Object(t.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"字符串数据处理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#字符串数据处理"}},[s._v("#")]),s._v(" 字符串数据处理")]),s._v(" "),n("h2",{attrs:{id:"拆分含有多种分隔符的字符串"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#拆分含有多种分隔符的字符串"}},[s._v("#")]),s._v(" 拆分含有多种分隔符的字符串")]),s._v(" "),n("p",[s._v("连续使用 "),n("code",[s._v("str")]),s._v("的 "),n("code",[s._v("split()")]),s._v(" 方法（不推荐）\n使用正则的 "),n("code",[s._v("re.split()")]),s._v(" 方法（推荐）")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("import re\ns = 'ab;cd|efg|hi,jkl|mn\\topq;rst,uvw\\txyz'\nr = re.split('[,;\\t|]+', s)\nprint(r)\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("h2",{attrs:{id:"将多个字符串拼接成一个长字符串"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#将多个字符串拼接成一个长字符串"}},[s._v("#")]),s._v(" 将多个字符串拼接成一个长字符串")]),s._v(" "),n("p",[s._v("迭代列表，连续使用 "),n("code",[s._v("+")]),s._v(" 操作符（不推荐）\n使用 "),n("code",[s._v("str")]),s._v(" 的 "),n("code",[s._v("join")]),s._v(" 方法 （推荐，不存在临时变量的创建与回收，更快）")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("r = ''.join((str(x) for x in ['123', 'abc', 45]))\nprint(r)\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("h2",{attrs:{id:"去掉字符串中不需要的字符"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#去掉字符串中不需要的字符"}},[s._v("#")]),s._v(" 去掉字符串中不需要的字符")]),s._v(" "),n("p",[s._v("需求如下：")]),s._v(" "),n("ul",[n("li",[s._v("过滤掉用户输入的空白字符")]),s._v(" "),n("li",[s._v("过滤文本中的 "),n("code",[s._v("\\r")])]),s._v(" "),n("li",[s._v("过滤掉文本中的 unicode 组合符合（音调）")])]),s._v(" "),n("ol",[n("li",[n("code",[s._v("str")]),s._v(" 的 "),n("code",[s._v("strip/lstrip/rstrip")]),s._v(" 去掉字符串两端的字符")]),s._v(" "),n("li",[s._v("切片加拼接删除固定位置的字符")]),s._v(" "),n("li",[n("code",[s._v("str")]),s._v(" 的 "),n("code",[s._v("replace")]),s._v(" 或 "),n("code",[s._v("re.sub")]),s._v(" 替换 任意位置字符")]),s._v(" "),n("li",[n("code",[s._v("str")]),s._v("的 "),n("code",[s._v("translate")]),s._v(" 或 "),n("code",[s._v("unicode")]),s._v(" 的 "),n("code",[s._v("translate")]),s._v(" 把一个字符“翻译”为另一个字符")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("table = str.maketrans('abc', 'xyz')\ns = 'abc1234'\nr = s.translate(table)\nprint(r)\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("h2",{attrs:{id:"判断字符串a是否以字符串b开头或结尾"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#判断字符串a是否以字符串b开头或结尾"}},[s._v("#")]),s._v(" 判断字符串a是否以字符串b开头或结尾")]),s._v(" "),n("p",[s._v("使用 "),n("code",[s._v("str")]),s._v(" 的 "),n("code",[s._v("endswith")]),s._v(" 和 "),n("code",[s._v("startstwith")]),s._v(" 方法（有多个匹配选项时使用元组），应用场景：给所有 "),n("code",[s._v(".sh")]),s._v(" 和 "),n("code",[s._v(".py")]),s._v(" 文件加用户可执行权限")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("import os\nfile = [name for name in os.listdir('.') if name.endswith(('.sh', '.py'))]\nfor f in file:\n\tos.chmod(f, os.stat(f).st_mode | os.stat.S_IXUSR)\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("h2",{attrs:{id:"调整字符串中文本的格式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#调整字符串中文本的格式"}},[s._v("#")]),s._v(" 调整字符串中文本的格式")]),s._v(" "),n("p",[s._v("正则表达式 "),n("code",[s._v("re.sub")]),s._v(" 方法配合捕获组替换，应用场景：修改日志文件的日期格式")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("import re\n\n# 2017-05-27 10:21:26,182 - t.py[line:10] - WARNING : this is warning msg\n# 2017-05-27 10:21:26,183 - t.py[line:11] - ERROR : this is error msg\n\nwith open('log.txt', 'r') as f:\n    for line in f.readlines():\n        print(re.sub('(\\d{4})-(\\d{2})-(\\d{2})', r'\\2/\\3/\\1',line))\n        # print(re.sub('(?P<year>\\d{4})-(?P<mon>\\d{2})-(?P<day>\\d{2})', r'\\g<mon>/\\g<day>/\\g<year>',line))\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("h1",{attrs:{id:"容器数据处理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#容器数据处理"}},[s._v("#")]),s._v(" 容器数据处理")]),s._v(" "),n("h2",{attrs:{id:"列表、字典、集合中筛选数据"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#列表、字典、集合中筛选数据"}},[s._v("#")]),s._v(" 列表、字典、集合中筛选数据")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("def is_even(x):\n    return x % 2 == 0\nr= [x for x in [1,2,3] if is_even(x)]\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("h2",{attrs:{id:"统计字典元素出现频度"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#统计字典元素出现频度"}},[s._v("#")]),s._v(" 统计字典元素出现频度")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("from random import randint\nfrom collections import Counter\n\ndata = [randint(0, 10) for _ in range(30)]\nprint(data)\n\nc = Counter(data)\nprint(c)\n\nr = c.most_common(3)\nprint(r)\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])]),n("h2",{attrs:{id:"对字典按某一属性排序"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#对字典按某一属性排序"}},[s._v("#")]),s._v(" 对字典按某一属性排序")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("from random import randint\n\nd = { x: randint(60, 100) for x in 'abcdef'}\nprint(d)\n\nr = sorted(d.items(), key=lambda x:x[1])\nprint(r)\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("h2",{attrs:{id:"找到多个字典中的公共键"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#找到多个字典中的公共键"}},[s._v("#")]),s._v(" 找到多个字典中的公共键")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("from random import randint, sample\nfrom functools import reduce\n\ndata1 = {x: randint(1, 4) for x in sample('abcdefg',randint(3, 6))}\ndata2 = {x: randint(1, 4) for x in sample('abcdefg',randint(3, 6))}\ndata3 = {x: randint(1, 4) for x in sample('abcdefg',randint(3, 6))}\nprint(data1, data2, data3)\n\nm = map(dict.keys, [data1, data2, data3])\nr = reduce(lambda a,b:a & b, m)\nprint(r)\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);