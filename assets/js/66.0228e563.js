(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{433:function(s,t,a){"use strict";a.r(t);var n=a(25),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"再议继承"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#再议继承"}},[s._v("#")]),s._v(" 再议继承")]),s._v(" "),a("h2",{attrs:{id:"super-函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#super-函数"}},[s._v("#")]),s._v(" "),a("code",[s._v("super")]),s._v(" 函数")]),s._v(" "),a("p",[a("code",[s._v("super")]),s._v(" 函数的典型用例：")]),s._v(" "),a("ol",[a("li",[a("strong",[s._v("单一继承中引用父类而无需显式指定名称")]),s._v("，即 "),a("code",[s._v("super().方法名")]),s._v(" 和 "),a("code",[s._v("类名.方法名")]),s._v(" 在单继承上无区别，使代码更易维护。（这种用法与其他语言的 "),a("code",[s._v("super")]),s._v("  用法类似）")]),s._v(" "),a("li",[s._v("用于"),a("strong",[s._v("动态环境中支持多重继承")]),s._v("，多个基类实现了相同的方法（要求具有相同的调用签名），调用顺序是在运行时确定的，该顺序要适应类层次结构（是一个菱形图）的变化。（此用法 Python 独有，在静态编译语言或仅支持单继承的语言中是不存在的）")])]),s._v(" "),a("h2",{attrs:{id:"多继承与-super-和多继承与-mro"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#多继承与-super-和多继承与-mro"}},[s._v("#")]),s._v(" 多继承与 super 和多继承与 MRO")]),s._v(" "),a("p",[s._v("假设有如下的继承关系：GrandPa 为基类，Parent1 和 Parent2 继承自 Grandpa ，Son 多继承 Parent1 和 Parent2 ，"),a("code",[s._v("class Son(Parent1, Parent2)")]),s._v("，Son 重写 "),a("code",[s._v("__init__")]),s._v(" 方法有以下三种方式（其实是两种：写父类名字和使用 "),a("code",[s._v("super")]),s._v(" 方法）：")]),s._v(" "),a("ol",[a("li",[a("code",[s._v("Parent.__init__(self,name)")])]),s._v(" "),a("li",[a("code",[s._v("super().__init__(name)")])]),s._v(" "),a("li",[a("code",[s._v("super(Parent2,self).__init__(name)")])])]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Grandpa")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("object")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# def __init__(self, name):")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("__init__")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("**")]),s._v("kwargs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 为避免多继承报错，使用不定长参数接受参数")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Grandpa的init开始'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("name "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" name\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Grandpa的init结束'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Parent1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Grandpa"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# def __init__(self, name, age):")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("__init__")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" age"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("**")]),s._v("kwargs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 为避免多继承报错，使用不定长参数接受参数")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Parent1的init开始'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("age "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" age\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Grandpa.__init__(self, name)  # 单独直接调用")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("super")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("__init__"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("**")]),s._v("kwargs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Parent1的init结束'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Parent2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Grandpa"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# def __init__(self, name, gender):")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("__init__")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" gender"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("**")]),s._v("kwargs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 为避免多继承报错，使用不定长参数接受参数")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Parent2的init开始'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("gender "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" gender\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Grandpa.__init__(self, name)  # 单独直接调用")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("super")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("__init__"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("**")]),s._v("kwargs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Parent2的init结束'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Son")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Parent1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" Parent2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("__init__")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" age"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" gender"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Son的init开始'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Parent1.__init__(self, name, age)  # 单独调用父类的初始化方法")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Parent2.__init__(self, name, gender)")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("super")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("__init__"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" age"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" gender"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Son的init结束'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Son"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("__mro__"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 打印多继承MRO算法计算后的顺序")]),s._v("\n\ngs "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Son"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'tom'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'男'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'姓名：'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" gs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'年龄：'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" gs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("age"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'性别：'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" gs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("gender"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br")])]),a("ol",[a("li",[s._v("使用 "),a("code",[s._v("Parent.__init__(self,name)")]),s._v(" 方式会导致 GrandPa 的方法被多次调用；")]),s._v(" "),a("li",[s._v("使用 "),a("code",[s._v("super().__init__(name)")]),s._v(" ，"),a("code",[s._v("super")]),s._v(" 会自动决定调用哪个父类（Python 的 c3 算法），调用顺序由 "),a("code",[s._v("Son.__mro__")]),s._v(" 决定，它返回的是一个元组。"),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("(<class '__main__.Son'>, <class '__main__.Parent1'>, \n<class '__main__.Parent2'>, <class '__main__.Grandpa'>, <class 'object'>)\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),s._v("如上， Son 中的 "),a("code",[s._v("super()")]),s._v(" 会调用 Parent1 , "),a("strong",[s._v("Parent1 中的 super() 不会调用 Grandpa 而是 Parent2")]),s._v(" ，Parent2中的 super() 调用 GrandPa，每个类中的方法均只被调用一次；")]),s._v(" "),a("li",[s._v("使用 "),a("code",[s._v("super(Parent2,self).__init__(name)")]),s._v(" 依旧遵循 MRO 顺序，只是直接调用 Parent2。")])]),s._v(" "),a("p",[s._v("小结：多继承中会出现 "),a("code",[s._v("super()")]),s._v(" 调用不了“父类”的情况，如上 Parent1 中的 "),a("code",[s._v("super")]),s._v(" 调用的是 Parent2 的方法，因为 Python 使用"),a("strong",[s._v("C3算法")]),s._v("处理多继承调用的先后顺序，它会"),a("strong",[s._v("保证每个类只调一次")]),s._v("，它的体现是“子类”的 "),a("code",[s._v("__mro__")]),s._v(" 属性返回的元组，其中的类的先后顺序表示 "),a("code",[s._v("super")]),s._v(" 调用的顺序。")]),s._v(" "),a("h3",{attrs:{id:"多继承中参数传递问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#多继承中参数传递问题"}},[s._v("#")]),s._v(" 多继承中参数传递问题")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("类名.__init__")]),s._v("，要把每个父类全部写一遍；")]),s._v(" "),a("li",[a("strong",[a("code",[s._v("super")]),s._v(" 只需写一句话，便执行了全部父类的方法，为避免多继承报错，子类需传递全部参数，父类需使用不定长参数接受参数")]),s._v("。")])]),s._v(" "),a("h3",{attrs:{id:"小结：super-方法名-和-父类名-方法名"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#小结：super-方法名-和-父类名-方法名"}},[s._v("#")]),s._v(" 小结："),a("code",[s._v("super().方法名")]),s._v(" 和 "),a("code",[s._v("父类名.方法名")])]),s._v(" "),a("ol",[a("li",[s._v("在单继承上无差；")]),s._v(" "),a("li",[s._v("但在多继承上前者能保证每个父类的方法只会执行一次，而后者会导致多次执行。")]),s._v(" "),a("li",[a("strong",[s._v("多继承使用 "),a("code",[s._v("super")]),s._v(" 调用父类的方法必须传递全部参数")]),s._v("，否则会报错；")]),s._v(" "),a("li",[a("strong",[s._v("单继承则不能全部传递，只能传父类方法所需的参数")]),s._v("，否则会报错。")])]),s._v(" "),a("h2",{attrs:{id:"番内：-搜索顺序-小结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#番内：-搜索顺序-小结"}},[s._v("#")]),s._v(" 番内：“搜索顺序”小结")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("方法搜索顺序 MRO（method resolution order）。"),a("br"),s._v("\n应用场景： C 继承自 A 和 B 并且 AB 有同名方法，C 会调用哪个父类的方法呢？使用 "),a("code",[s._v("类名.__mro__")]),s._v("  查看方法的搜索顺序，该属性是动态的，在继承层级结构更新时改变。")])]),s._v(" "),a("li",[a("p",[s._v("属性查找，依赖继承关系。")])])]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("P")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("object")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    x "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("C1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("P"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("pass")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("C2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("P"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("pass")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("P"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" C1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" C2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 1 1 1")]),s._v("\nC1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("x "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("P"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" C1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" C2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 1 2 1")]),s._v("\nP"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("x "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("P"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" C1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" C2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 3 2 3")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("ol",{attrs:{start:"3"}},[a("li",[a("p",[s._v("变量查找顺序"),a("br"),s._v("\nLEGB，变量引用首先会查找本地符号表，然后查找闭包的符号表，然后查找全局符号表，最后查找内置符号表。")])]),s._v(" "),a("li",[a("p",[s._v("模块搜索顺序"),a("br"),s._v("\n模块导入时，解释器首先搜索具有该名称的内置模块，如果找不到，解释器依次搜索由一系列目录组成的列表，这个列表存储在 "),a("code",[s._v("sys.path")]),s._v(" 中，由输入脚本所在目录（未指定则为当前目录）、Python PATH 环境变量等初始化。")])])]),s._v(" "),a("h2",{attrs:{id:"参考文档"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考文档"}},[s._v("#")]),s._v(" 参考文档")]),s._v(" "),a("ol",[a("li",[s._v("官网 "),a("a",{attrs:{href:"https://docs.python.org/3.5/library/functions.html#super",target:"_blank",rel:"noopener noreferrer"}},[s._v("super"),a("OutboundLink")],1),s._v(" | "),a("a",{attrs:{href:"https://www.python.org/download/releases/2.3/mro/",target:"_blank",rel:"noopener noreferrer"}},[s._v("MRO"),a("OutboundLink")],1)]),s._v(" "),a("li",[s._v("官网推荐 "),a("a",{attrs:{href:"https://rhettinger.wordpress.com/2011/05/26/super-considered-super/",target:"_blank",rel:"noopener noreferrer"}},[s._v("spuer 指南"),a("OutboundLink")],1)]),s._v(" "),a("li",[s._v("菜鸟教程 "),a("a",{attrs:{href:"https://www.runoob.com/w3cnote/python-super-detail-intro.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("super详解"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=e.exports}}]);