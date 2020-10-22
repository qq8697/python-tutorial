(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{378:function(s,t,a){"use strict";a.r(t);var n=a(25),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"模块和包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模块和包"}},[s._v("#")]),s._v(" 模块和包")]),s._v(" "),a("h2",{attrs:{id:"模块的概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模块的概念"}},[s._v("#")]),s._v(" 模块的概念")]),s._v(" "),a("p",[s._v("一个 "),a("code",[s._v(".py")]),s._v(" 文件就是一个模块，模块名也是标识符需要符合"),a("RouterLink",{attrs:{to:"/Python基础/基本概念.html#标识符"}},[s._v("标识符")]),s._v("的命名规则，"),a("strong",[s._v("模块内的全局变量、函数和类可提供给外界使用")]),s._v("。")],1),s._v(" "),a("p",[s._v("说明：模块除了定义"),a("strong",[s._v("变量、函数和类")]),s._v("，还包括可执行的代码，这些代码"),a("strong",[s._v("只有在第一次被导入时才会执行")]),s._v("。")]),s._v(" "),a("p",[s._v("模块导入有以下方式：")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" 模块 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" 模块别名（大驼峰）"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" 模块 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" 方法"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("变量"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("类 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" 别名"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" 模块 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 导入除`_`开头的所有 方法/变量/类，不推荐使用")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("可以使用内置函数 "),a("code",[s._v("dir()")]),s._v(" 查看被导入的模块内定义的“名称”。（ "),a("code",[s._v("dir()")]),s._v(" 函数返回对象的所有属性和方法）")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" keyword\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("dir")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("keyword"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ['__all__', '__builtins__', '__cached__', '__doc__', ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# '__file__', '__loader__', '__name__', '__package__', ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# '__spec__', 'iskeyword', 'kwlist', 'main']")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("说明：导入机制会在加载期间会根据模块的规格说明填充模块对象的属性，并在加载器执行模块之前完成。（模块的属性，如上所示的 "),a("code",[s._v("__xx__")]),s._v("）")]),s._v(" "),a("h2",{attrs:{id:"if-name-main-与模块测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#if-name-main-与模块测试"}},[s._v("#")]),s._v(" "),a("code",[s._v('if __name__ == "__main__":')]),s._v(" 与模块测试")]),s._v(" "),a("p",[s._v("一个模块被另一个程序第一次引入时，其主程序将运行。如果我们想在模块被引入时，模块中的某一程序块不被执行，可以用模块的 "),a("code",[s._v("__name__")]),s._v(" 属性来使该程序块仅在该模块自身运行时执行。")]),s._v(" "),a("p",[a("code",[s._v("__name__")]),s._v(" 属性表示模块的名称：")]),s._v(" "),a("ol",[a("li",[s._v("如果是被其它文件导入的，其值是模块名；")]),s._v(" "),a("li",[s._v("如果是当前执行的程序，其值是 "),a("code",[s._v("__main__")]),s._v("。")])]),s._v(" "),a("p",[s._v("所以，一般模块的测试代码结构如下：")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" __name__ "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"__main__"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 测试代码")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"模块的搜索顺序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模块的搜索顺序"}},[s._v("#")]),s._v(" 模块的搜索顺序")]),s._v(" "),a("p",[s._v("当 "),a("code",[s._v("import")]),s._v(" 一个模块的时候，"),a("strong",[s._v("解释器首先搜索具有该名称的内置模块，如果找不到，解释器依次搜索由一系列目录组成的列表，这个列表存储在 "),a("code",[s._v("sys.path")]),s._v(" 中")]),s._v("，由输入脚本所在目录（未指定则为当前目录）、python PATH 环境变量等初始化。（注意，给 "),a("code",[s._v(".py")]),s._v(" 文件起名不要和系统的模块文件重名）")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" sys\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("sys"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/usr/lib/python3.5'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/usr/lib/python3.5/plat-x86_64-linux-gnu'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" \n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/usr/lib/python3.5/lib-dynload'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/usr/local/lib/python3.5/dist-packages'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" \n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/usr/lib/python3/dist-packages'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[a("code",[s._v("''")]),s._v(" 表示当前路径。")]),s._v(" "),a("p",[s._v("初始化后，程序执行期间可以动态的修改 "),a("code",[s._v("sys.path")]),s._v("，添加新的路径，运行结束时失效。")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" sys\nsys"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("append"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/home/xxx'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nsys"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("insert"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/home/xxx'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 可以确保先搜索这个路径")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("ps. 模块的 "),a("code",[s._v("__file__")]),s._v(" 属性可以查看模块的完整路径。")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" re\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("re"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("__file__"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"已编译-的-python-文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#已编译-的-python-文件"}},[s._v("#")]),s._v(" “已编译”的 Python 文件")]),s._v(" "),a("p",[s._v("为了"),a("strong",[s._v("加快模块的加载速度")]),s._v("，Python 将每个模块的编译版本缓存在"),a("code",[s._v("__pycache__")]),s._v(" 目录中，名称的格式为 "),a("code",[s._v("module.version.pyc")]),s._v(" 如"),a("code",[s._v("spam.CPython-35.pyc")]),s._v("，此命名约定允许来自不同版本和不同 Python 的编译文件可以共存。")]),s._v(" "),a("p",[s._v("Python 根据编译后的版本检查源代码的修改日期，看它是否过期，是否需要重新编译。这是一个完全自动化的过程。此外，编译后的模块与平台无关，因此同一个库可以在具有不同体系结构的系统之间共享。")]),s._v(" "),a("p",[s._v("Python 在两种情况下不会检查缓存：")]),s._v(" "),a("ol",[a("li",[s._v("总是重新编译并且不存储直接从命令行加载的模块的结果。")]),s._v(" "),a("li",[s._v("如果没有源模块，它不会检查缓存。要支持非源（仅编译）分发，编译的模块必须在源目录中，并且不能有源模块。")])]),s._v(" "),a("p",[s._v("注意，当程序从 .pyc 文件中读取时，其运行速度不会比从 .py 文件中读取时快多少，.pyc 文件唯一快的地方是加载速度。")]),s._v(" "),a("h2",{attrs:{id:"包的概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#包的概念"}},[s._v("#")]),s._v(" 包的概念")]),s._v(" "),a("p",[s._v("包是一个目录，包名也是标识符需要符合标识符的命名规则，包含多个模块，可以一次性导入多个模块，包有一个必须存在的特殊文件 "),a("strong",[a("code",[s._v("__init__.py")])]),s._v("，一个包的目录结构示例如下：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("sound/                        Top-level package\n  \t__init__.py               Initialize the sound package\n  \tformats/                  Subpackage for file format conversions\n    \t\t__init__.py\n    \t\twavread.py\n    \t\t...\n  \teffects/                  Subpackage for sound effects\n\t  \t\t__init__.py\n\t  \t\techo.py\n\t  \t\t...\n  \tfilters/                  Subpackage for filters\n    \t\t__init__.py\n    \t\tequalizer.py\n    \t\t...\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("p",[a("code",[s._v("__init__.py")]),s._v(" 文件可以只是一个空文件，也可以执行包的初始化代码或设置 "),a("code",[s._v("__all__")]),s._v(" 变量：")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" 模块名"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" 模块名"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("包的导入有以下方式：")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" 包名\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" 包名 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" 方法"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("变量"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("类"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("子包"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("模块\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" 包名 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 不推荐")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("说明：")]),s._v(" "),a("ol",[a("li",[a("code",[s._v("from package import item")]),s._v("， "),a("code",[s._v("item")]),s._v("可以是子包，也可以是模块，也可以是包内定义的变量、函数和类。"),a("code",[s._v("import")]),s._v(" 语句"),a("strong",[s._v("首先测试 "),a("code",[s._v("item")]),s._v(" 是否在包中定义，如果不存在则假定它是一个模块去加载（load）它")]),s._v("，如果找不到，则抛出 "),a("code",[s._v("ImportError")]),s._v(" 异常；")]),s._v(" "),a("li",[a("code",[s._v("import item.subitem.subsubitem")]),s._v("， 除最后一项外都必须是包，最后一项可以是模块或包，但，不能是在前一项中定义的变量、函数或类；")]),s._v(" "),a("li",[a("code",[s._v("from package import *")]),s._v("，导入 "),a("code",[s._v("__init__.py")]),s._v(" 中 "),a("code",[s._v("__all__")]),s._v(" 列表中包含的模块，如果未定义 "),a("code",[s._v("__all__")]),s._v(" ，并不会导入所有子模块，而是导入包内定义的变量、函数和类以及被 "),a("code",[s._v("import")]),s._v(" 进来的模块。")])]),s._v(" "),a("h2",{attrs:{id:"模块和包的作用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模块和包的作用"}},[s._v("#")]),s._v(" 模块和包的作用")]),s._v(" "),a("ul",[a("li",[s._v("模块，让你不用担心"),a("strong",[s._v("不同模块之间的全局变量相互影响")]),s._v("的问题；（注意：模块内的变量不要和内置函数重名，模块名不要和内置模块重名）")]),s._v(" "),a("li",[s._v("包，让你不用担心"),a("strong",[s._v("不同包之间的模块重名")]),s._v("问题。（注意：模块名不要和内置模块重名）")])]),s._v(" "),a("h2",{attrs:{id:"番内：发布模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#番内：发布模块"}},[s._v("#")]),s._v(" 番内：发布模块")]),s._v(" "),a("p",[s._v("自己开发的模块，分享给其他人/自己重复使用。")]),s._v(" "),a("ol",[a("li",[s._v("制作发布压缩包\n"),a("ol",[a("li",[s._v("创建 "),a("code",[s._v("setup.py")]),s._v(" （和包同级目录）"),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" distutils"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("core "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" setup\nsetup"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n\tname"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"包名"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\tdescription"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"描述信息"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\tlong_description"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"完整描述信息"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\tauthor"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"作者"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\tauthor_email"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"邮箱"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\turl"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"主页"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\tpy_modules"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"包名.模块名1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"包名.模块名2"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])])]),s._v(" "),a("li",[s._v("构建模块 "),a("code",[s._v("python3 setup.py build")])]),s._v(" "),a("li",[s._v("生成发布压缩包 "),a("code",[s._v("python3 setup.py sdist")]),s._v(" -> 生成 "),a("code",[s._v("包名-1.0.tar.gz")])])])]),s._v(" "),a("li",[s._v("安装模块压缩包\n"),a("ol",[a("li",[a("code",[s._v("tar -zxvf 包名-1.0.tar.gz")])]),s._v(" "),a("li",[a("code",[s._v("cd 包名-1.0")])]),s._v(" "),a("li",[a("code",[s._v("sudo python setup.py install")])])])]),s._v(" "),a("li",[s._v("卸载（直接从安装目录下删除已安装模块的目录即可）\n"),a("ol",[a("li",[a("code",[s._v("cd /usr/local/lib/python3.5/dist-packages/")])]),s._v(" "),a("li",[a("code",[s._v("sudo rm -r 包名")])])])])]),s._v(" "),a("h2",{attrs:{id:"参考文档"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考文档"}},[s._v("#")]),s._v(" 参考文档")]),s._v(" "),a("ol",[a("li",[s._v("官网 "),a("a",{attrs:{href:"https://docs.python.org/3.5/tutorial/modules.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("模块"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=e.exports}}]);