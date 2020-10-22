(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{375:function(s,t,a){"use strict";a.r(t);var n=a(25),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"异常处理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#异常处理"}},[s._v("#")]),s._v(" 异常处理")]),s._v(" "),a("h2",{attrs:{id:"错误和异常"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#错误和异常"}},[s._v("#")]),s._v(" 错误和异常")]),s._v(" "),a("p",[s._v("错误：语法错误；"),a("br"),s._v("\n异常：语句或表达式的在语法上是正确的，程序执行过程中并不是不会出错的，仍可能出现错误，这个程序运行期间检测到的错误被称为异常。")]),s._v(" "),a("p",[s._v("异常示例：")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ZeroDivisionError: division by zero")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" spam"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# NameError: name 'spam' is not defined")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'2'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# TypeError: Can't convert 'int' object to str implicitly")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("除如上的被除数为0，变量未定义等外，如抓取数据网络断了、写文件磁盘满了也会产生异常。")]),s._v(" "),a("h2",{attrs:{id:"捕获异常"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#捕获异常"}},[s._v("#")]),s._v(" 捕获异常")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("try")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 尝试执行的代码")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("pass")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("except")]),s._v(" 错误类型"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("pass")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("except")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("错误类型"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("错误类型"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("pass")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("except")]),s._v(" Exception "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 捕获未知错误")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("pass")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 没有异常才会执行的代码")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("pass")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("finally")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 无论是否有异常，都会执行的代码（若有异常如果没有被任何except截获，会在finally执行后抛出）")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("pass")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])]),a("h2",{attrs:{id:"异常传递"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#异常传递"}},[s._v("#")]),s._v(" 异常传递")]),s._v(" "),a("p",[s._v("当函数/方法执行出现异常，如果异常没有被捕获，程序不会立即终止，会将异常传递给调用的一方，如果一直未捕获，就会一直向上传递，如果传递到主程序仍未被捕获和处理，最后被 Python 解释器捕获，打印一个错误信息，程序才会终止。")]),s._v(" "),a("p",[s._v("异常传递示例：")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("this_fails")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    x "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("try")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        this_fails"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("except")]),s._v(" ZeroDivisionError "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" err"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Handling run-time error:'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" err"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nmain"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("h2",{attrs:{id:"抛出异常"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#抛出异常"}},[s._v("#")]),s._v(" 抛出异常")]),s._v(" "),a("p",[s._v("使用 "),a("code",[s._v("raise")]),s._v(" 关键字抛出异常：")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 抛出异常实例")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("raise")]),s._v(" Exception"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"desc info"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 抛出异常类 （会使用不带参数的构造函数隐式实例化该异常）")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("raise")]),s._v(" ValueError  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# shorthand for 'raise ValueError()'")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("捕获的异常可以不处理，然后使用 "),a("code",[s._v("raise")]),s._v(" 重新抛出该异常或其它异常：")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("try")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("raise")]),s._v(" NameError"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'HiThere'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("except")]),s._v(" NameError"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'An exception flew by!'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("raise")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h2",{attrs:{id:"番内：python-内置异常类型和层次结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#番内：python-内置异常类型和层次结构"}},[s._v("#")]),s._v(" 番内：Python 内置异常类型和层次结构")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://docs.python.org/3.5/library/exceptions.html#bltin-exceptions",target:"_blank",rel:"noopener noreferrer"}},[s._v("内置异常类型"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://docs.python.org/3.5/library/exceptions.html#exception-hierarchy",target:"_blank",rel:"noopener noreferrer"}},[s._v("层次结构"),a("OutboundLink")],1)])]),s._v(" "),a("h2",{attrs:{id:"番内：自定义异常"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#番内：自定义异常"}},[s._v("#")]),s._v(" 番内：自定义异常")]),s._v(" "),a("p",[s._v("自定义异常，一般用于报告自定义的功能中可能发生的错误。当创建一个模块有可能抛出多种不同的异常时，一种通常的做法是为这个包建立一个基础异常类，然后基于这个基础类为不同的错误情况创建不同的子类。")]),s._v(" "),a("p",[s._v("自定义异常示例：（了解"),a("a",{attrs:{href:"/%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/%E5%B0%81%E8%A3%85"}},[s._v("面向对象")]),s._v("的知识后服用）")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Error")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Exception"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[s._v('"""Base class for exceptions in this module."""')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("pass")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("InputError")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Error"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[s._v('"""Exception raised for errors in the input.\n\n    Attributes:\n        expression -- input expression in which the error occurred\n        message -- explanation of the error\n    """')]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("__init__")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" expression"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("expression "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" expression\n        self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("message "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" message\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("TransitionError")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Error"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[s._v('"""Raised when an operation attempts a state transition that\'s not\n    allowed.\n\n    Attributes:\n        previous -- state at beginning of transition\n        next -- attempted new state\n        message -- explanation of why the specific transition is not allowed\n    """')]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("__init__")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" previous"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("next")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("previous "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" previous\n        self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("next")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("next")]),s._v("\n        self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("message "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" message\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br")])]),a("h2",{attrs:{id:"参考文档"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考文档"}},[s._v("#")]),s._v(" 参考文档")]),s._v(" "),a("ol",[a("li",[s._v("官网： "),a("a",{attrs:{href:"https://docs.python.org/3.5/tutorial/errors.html#exceptions",target:"_blank",rel:"noopener noreferrer"}},[s._v("异常"),a("OutboundLink")],1),s._v(" | "),a("a",{attrs:{href:"https://docs.python.org/3.5/library/exceptions.html#bltin-exceptions",target:"_blank",rel:"noopener noreferrer"}},[s._v("内置异常类型"),a("OutboundLink")],1),s._v(" | "),a("a",{attrs:{href:"https://docs.python.org/3.5/reference/simple_stmts.html#raise",target:"_blank",rel:"noopener noreferrer"}},[s._v("raise 语句"),a("OutboundLink")],1),s._v(" | "),a("a",{attrs:{href:"https://docs.python.org/3.5/library/exceptions.html#exception-hierarchy",target:"_blank",rel:"noopener noreferrer"}},[s._v("异常层次结构"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=e.exports}}]);