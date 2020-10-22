(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{414:function(t,s,a){"use strict";a.r(s);var n=a(25),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"datetime-模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#datetime-模块"}},[t._v("#")]),t._v(" datetime 模块")]),t._v(" "),a("p",[t._v("datetime 模块用于处理日期和时间数据类型，支持日期和时间的数学运算。")]),t._v(" "),a("h2",{attrs:{id:"日期和时间对象的类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#日期和时间对象的类型"}},[t._v("#")]),t._v(" 日期和时间对象的类型")]),t._v(" "),a("ul",[a("li",[t._v("感知型：有着用足以支持一些应用层面算法和国家层面时间调整的信息，例如"),a("strong",[t._v("时区")]),t._v("和夏令时。")]),t._v(" "),a("li",[t._v("简单型：没包含足够多的信息来明确定位与之相关的 date/time 对象，其所代表的是世界标准时间(UTC)、当地时间或者是其它时区的时间由程序决定。")])]),t._v(" "),a("h2",{attrs:{id:"datetime-模块内类的关系"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#datetime-模块内类的关系"}},[t._v("#")]),t._v(" datetime 模块内类的关系")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("object\n    timedelta 两个 date 、time 或 datetime 对象之间的时间间隔\n    tzinfo 描述时区信息的抽象基类\n        timezone 实现了 tzinfo 抽象基类的子类，用于表示相对于 世界标准时间（UTC）的偏移量\n    time 时间\n    date 简单型日期\n        datetime 日期和时间\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("h2",{attrs:{id:"examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),a("h3",{attrs:{id:"_1-获取当前（或指定）的日期和时间"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-获取当前（或指定）的日期和时间"}},[t._v("#")]),t._v(" 1. 获取当前（或指定）的日期和时间")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" datetime "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" datetime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" date"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" time\n\ntoday "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" datetime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("today"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("today"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nnow "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" datetime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("now"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("now"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nutcnow "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" datetime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("utcnow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("utcnow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\ndt "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" datetime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2017")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("23")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("59")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nd "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" date"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2017")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nt "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("23")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("59")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ndt2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" datetime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("combine"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("d "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dt2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br")])]),a("ol",[a("li",[a("code",[t._v("datetime(year, month, day, hour=0, minute=0, second=0, microsecond=0, tzinfo=None)")]),t._v(" 。")]),t._v(" "),a("li",[a("code",[t._v("dt.today()")]),t._v("/ "),a("code",[t._v("dt.now()")]),t._v(" 返回当前的日期和时间。")]),t._v(" "),a("li",[a("code",[t._v("dt.utcnow()")]),t._v(" 返回当前 UTC 标准时区的日期和时间。")])]),t._v(" "),a("h3",{attrs:{id:"_2-datetime-与-timestamp-转换"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-datetime-与-timestamp-转换"}},[t._v("#")]),t._v(" 2. datetime 与 timestamp 转换")]),t._v(" "),a("p",[a("strong",[t._v("timestamp")]),t._v("，相对于 1970 年 1 月 1 日 00:00:00 UTC+00:00 的秒数（Python 是秒数，JavaScript 和 Java 是毫秒数），其值和时区无关系，任何地点的计算机在同一时刻 "),a("code",[t._v("timestamp")]),t._v(" 值都是相同的。")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" datetime "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" datetime\n\ndt "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" datetime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2017")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("23")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("59")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nts "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" dt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("timestamp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ts"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nts2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1483286340.0")]),t._v("\ndt2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" datetime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fromtimestamp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ts2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 本地的日期和时间")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dt2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ndt3 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" datetime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("utcfromtimestamp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ts2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# UTC标准时区的日期和时间")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dt3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br")])]),a("p",[a("code",[t._v("timestamp")]),t._v(" 和时区无关系，但 "),a("strong",[a("code",[t._v("datetime")]),t._v(" 和时区是有关系的")]),t._v("：")]),t._v(" "),a("ol",[a("li",[a("code",[t._v("fromtimestamp")]),t._v(" 方法转换的结果是本地日期和时间，以北京为例是东八区（UTC+8:00 时区）的本地日期和时间；")]),t._v(" "),a("li",[t._v("使用 "),a("code",[t._v("utcfromtimestamp")]),t._v(" 可以获取UTC标准时区的日期和时间。")])]),t._v(" "),a("h3",{attrs:{id:"_3-datetime-与-str-转换"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-datetime-与-str-转换"}},[t._v("#")]),t._v(" 3. datetime 与 str 转换")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" datetime "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" datetime\n\ndt1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" datetime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("strptime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2017-1-1 23:59:59'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'%Y-%m-%d %H:%M:%S'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ndt2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" datetime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("strptime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"31/12/16"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%d/%m/%y"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dt1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dt2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nnow "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" datetime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("now"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nstr1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" now"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("strftime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'%a, %b %d %H:%M'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nstr2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" now"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("strftime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%A, %d. %B %I:%M%p"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nstr3 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'The {1} is {0:%d}, {0:%A}, the {2} is {0:%B}, the {3} is {0:%I:%M%p}.'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("format")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("now"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"day"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"month"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"time"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br")])]),a("ol",[a("li",[a("a",{attrs:{href:"https://docs.python.org/3.5/library/datetime.html#strftime-strptime-behavior",target:"_blank",rel:"noopener noreferrer"}},[t._v("strftime() 和 strptime() 的行为"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://docs.python.org/3.5/library/stdtypes.html#str.format",target:"_blank",rel:"noopener noreferrer"}},[t._v("str.format"),a("OutboundLink")],1)])]),t._v(" "),a("h3",{attrs:{id:"_4-日期时间的加减"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-日期时间的加减"}},[t._v("#")]),t._v(" 4. 日期时间的加减")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" datetime "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" datetime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" timedelta\n\nnow "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" datetime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("now"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("now"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\na_week "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" timedelta"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("weeks"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("now "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" a_week"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nthirty_days "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" timedelta"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("weeks"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" days"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" hours"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("46")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("minutes"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("120")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 3 * 7 + 7 + (46 + 120/60)/24")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("now "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" thirty_days"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br")])]),a("ol",[a("li",[a("code",[t._v("timedelta(days=0, seconds=0, microseconds=0, milliseconds=0, minutes=0, hours=0, weeks=0)")])])]),t._v(" "),a("h3",{attrs:{id:"_5-时区转换"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-时区转换"}},[t._v("#")]),t._v(" 5. 时区转换")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" datetime "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" datetime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" timedelta"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" timezone\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置时区为UTC+0:00，拿到标准UTC时区的datetime")]),t._v("\nutc_dt "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" datetime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("utcnow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("replace"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tzinfo"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("timezone"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("utc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("utc_dt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 转换为北京时区")]),t._v("\nbj_dt "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" utc_dt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("astimezone"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("timezone"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("timedelta"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("hours"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("bj_dt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 转换为东京时区")]),t._v("\ntokyo_dt "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" bj_dt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("astimezone"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("timezone"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("timedelta"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("hours"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tokyo_dt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br")])]),a("ol",[a("li",[t._v("带时区的 datetime 对象的 "),a("code",[t._v("astimezone")]),t._v(" 方法，返回一个具有新的 "),a("code",[t._v("tzinfo")]),t._v(" 属性的 datetime 对象")])]),t._v(" "),a("h3",{attrs:{id:"_6-为-datetime-增加时区属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-为-datetime-增加时区属性"}},[t._v("#")]),t._v(" 6. 为 datetime 增加时区属性")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" datetime "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" datetime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" timedelta"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" timezone\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 创建时区 UTC+8:00")]),t._v("\ntz_utc_8 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" timezone"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("timedelta"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("hours"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 附加时区对象")]),t._v("\ndt "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" datetime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("now"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ndt "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" dt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("replace"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tzinfo"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("tz_utc_8"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br")])]),a("ol",[a("li",[a("code",[t._v("timezone(offset, name=None)")]),t._v(" 创建时区对象。")]),t._v(" "),a("li",[a("code",[t._v("dt.replace(tzinfo=tz)")]),t._v(" 附加一个时区对象给一个 "),a("code",[t._v("datetime")]),t._v(" 对象，而不调整日期和时间数据。")])]),t._v(" "),a("h2",{attrs:{id:"小结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[t._v("#")]),t._v(" 小结")]),t._v(" "),a("ol",[a("li",[a("strong",[t._v("需要时区信息 datetime 才能表示特定的日期和时间，否则只能视为本地日期和时间")]),t._v("。")]),t._v(" "),a("li",[a("strong",[t._v("存储日期和时间信息，建议存 timestamp，因为其与时区无关")]),t._v("。")])]),t._v(" "),a("h2",{attrs:{id:"参考文档"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考文档"}},[t._v("#")]),t._v(" 参考文档")]),t._v(" "),a("ol",[a("li",[t._v("官网 "),a("a",{attrs:{href:"https://docs.python.org/3.5/library/datetime.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("datetime"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=e.exports}}]);