(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{431:function(e,t,a){"use strict";a.r(t);var s=a(2),n=Object(s.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"title"}),t("p",[e._v("vuepress官网："),t("a",{attrs:{href:"https://vuepress.vuejs.org/zh/theme/default-theme-config.html#%E9%A6%96%E9%A1%B5",target:"_blank",rel:"noopener noreferrer"}},[e._v("VuePress (vuejs.org)"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("reco主题官网："),t("a",{attrs:{href:"https://vuepress-theme-reco.recoluan.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("vuepress-theme-reco (recoluan.com)"),t("OutboundLink")],1)])]),t("h2",{attrs:{id:"_1-创建vuepress项目"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-创建vuepress项目"}},[e._v("#")]),e._v(" 1.创建vuepress项目")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("注意：node.js >= 8.6\n")])])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('创建基本的项目\n1.mkdir vuepress-starter && cd vuepress-starter\n2.npm init\n3.npm install -D vuepress\n4.mkdir docs && echo \'# Hello VuePress\' > docs/README.md\n5.package.json添加\n    {\n      "scripts": {\n        "docs:dev": "vuepress dev docs",\n        "docs:build": "vuepress build docs"\n      }\n    }\n6.npm run docs:dev\n')])])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("创建自定义主题的项目\n这是主题地址：https://vuepress-theme-reco.recoluan.com/views/1.x/installUse.html\n1.安装\nnpm install vuepress-theme-reco --save-dev\n2.引用\nmodule.exports = {\n  theme: 'reco'\n}\n")])])]),t("h2",{attrs:{id:"_2-必备基础知识"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-必备基础知识"}},[e._v("#")]),e._v(" 2.必备基础知识")]),e._v(" "),t("h3",{attrs:{id:"_2-1目录结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-1目录结构"}},[e._v("#")]),e._v(" 2.1目录结构")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v(".\n├── docs\n│   ├── .vuepress (可选的)\n│   │   ├── components (可选的)\n│   │   ├── theme (可选的)\n│   │   │   └── Layout.vue\n│   │   ├── public (可选的)\n│   │   ├── styles (可选的)\n│   │   │   ├── index.styl\n│   │   │   └── palette.styl\n│   │   ├── templates (可选的, 谨慎配置)\n│   │   │   ├── dev.html\n│   │   │   └── ssr.html\n│   │   ├── config.js (可选的)\n│   │   └── enhanceApp.js (可选的)\n│   │ \n│   ├── README.md\n│   ├── guide\n│   │   └── README.md\n│   └── config.md\n│ \n└── package.json\n")])])]),t("h3",{attrs:{id:"_2-2默认的页面路由"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-2默认的页面路由"}},[e._v("#")]),e._v(" 2.2默认的页面路由")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("docs目录作为targetDir,所有的“文件的相对路径”都是相对于 docs 目录。\n")])])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('{\n  "scripts": {\n    "dev": "vuepress dev docs",\n    "build": "vuepress build docs"\n  }\n}\n\nvuepress dev docs 这里就是从docs开始的\n')])])]),t("table",[t("thead",[t("tr",[t("th",[e._v("文件的相对路径")]),e._v(" "),t("th",[e._v("页面路由地址")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[t("code",[e._v("/README.md")])]),e._v(" "),t("td",[t("code",[e._v("/")])])]),e._v(" "),t("tr",[t("td",[t("code",[e._v("/guide/README.md")])]),e._v(" "),t("td",[t("code",[e._v("/guide/")])])]),e._v(" "),t("tr",[t("td",[t("code",[e._v("/config.md")])]),e._v(" "),t("td",[t("code",[e._v("/config.html")])])])])]),e._v(" "),t("h3",{attrs:{id:"_2-3配置文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-3配置文件"}},[e._v("#")]),e._v(" 2.3配置文件")]),e._v(" "),t("p",[e._v("一个 VuePress 网站必要的配置文件 .vuepress/config.js")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("module.exports = {\n  title: 'Hello VuePress',\n  description: 'Just playing around'\n}\n")])])]),t("h2",{attrs:{id:"_3-原版基础配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-原版基础配置"}},[e._v("#")]),e._v(" 3.原版基础配置")]),e._v(" "),t("h2",{attrs:{id:"_4-自定义主题配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-自定义主题配置"}},[e._v("#")]),e._v(" 4.自定义主题配置")]),e._v(" "),t("h3",{attrs:{id:"_4-1分类和标签"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-1分类和标签"}},[e._v("#")]),e._v(" 4.1分类和标签")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("// .vuepress/config.js\n\nmodule.exports = {\n  theme: 'reco',\n  themeConfig: {\n     // 博客配置\n    blogConfig: {\n      category: {\n        location: 2,     // 在导航栏菜单中所占的位置，默认2\n        text: 'Category' // 默认文案 “分类”\n      },\n      tag: {\n        location: 3,     // 在导航栏菜单中所占的位置，默认3\n        text: 'Tag'      // 默认文案 “标签”\n      },\n      socialLinks: [     // 信息栏展示社交信息\n        { icon: 'reco-github', link: 'https://github.com/recoluan' },\n        { icon: 'reco-npm', link: 'https://www.npmjs.com/~reco_luan' }\n      ]\n    }\n  }\n}\n")])])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("写文章时添加分类和标签\n\n---\ntitle: 【vue】跨域解决方案之proxyTable\ndate: 2017-12-28\ncategories:\n - frontEnd\ntags:\n - vue\n---\n")])])]),t("p",[e._v("请注意， "),t("code",[e._v("categories")]),e._v(" 和 "),t("code",[e._v("tags")]),e._v(" 要以数组的方式填写。")]),e._v(" "),t("h3",{attrs:{id:"_4-2front-matter"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-2front-matter"}},[e._v("#")]),e._v(" 4.2Front Matter")]),e._v(" "),t("p",[e._v("一个完整的 "),t("code",[e._v("Front Matter")]),e._v(" 案例：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("---\ntitle: 烤鸭的做法\ndate: '2019-08-08 08:00:00'\nsidebar: 'auto'\ncategories:\n - 烹饪\n - 爱好\ntags:\n - 烤\n - 鸭子\nkeys:\n - '32位的 md5 加密密文'\npublish: false\n---\n")])])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("https://vuepress-theme-reco.recoluan.com/views/1.x/frontMatter.html#title\n")])])]),t("h3",{attrs:{id:"_4-3添加时间轴"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-3添加时间轴"}},[e._v("#")]),e._v(" 4.3添加时间轴")]),e._v(" "),t("p",[e._v("请注意，只有Front Matter中设置了 "),t("code",[e._v("categories")]),e._v(" 与 "),t("code",[e._v("title")]),e._v("，且没有设置 "),t("code",[e._v("publush === false")]),e._v(" 和 "),t("code",[e._v("home: true")]),e._v(" 的文章才会在时间轴中显示。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("添加导航按钮\nmodule.exports = {\n  theme: 'reco',\n  themeConfig: {\n    nav: [\n      { text: 'TimeLine', link: '/timeline/', icon: 'reco-date' }\n    ]\n  }\n}\n")])])]),t("p",[e._v("添加对应的文件和写文章时添加日期")]),e._v(" "),t("p",[e._v("日期是可以填写 "),t("code",[e._v("时分秒")]),e._v(" 的，格式为 "),t("code",[e._v("2019-10-20 00:00:00")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("---\nisTimeLine: true\nsidebar: false\nisComment: false\n\ntitle: 【vue】跨域解决方案之proxyTable\ndate: 2017-12-28\ncategories:\n- vue\n- webpack\n\n---\n")])])]),t("h3",{attrs:{id:"_4-4评论"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-4评论"}},[e._v("#")]),e._v(" 4.4评论")]),e._v(" "),t("p",[e._v("如果你想默认不加载评论，而只在某些页面显示评论功能，可以在 "),t("code",[e._v("valineConfig")]),e._v(" 或 "),t("code",[e._v("vssueConfig")]),e._v(" 中设置 "),t("code",[e._v("showComment: false")]),e._v("，并在需要展示评论的页面 设置 "),t("code",[e._v("isShowComments: true")])]),e._v(" "),t("p",[e._v("如果仅是某篇文章不想设置开启评论功能，可以在 "),t("code",[e._v("front-matter")]),e._v(" 设置 "),t("code",[e._v("isShowComments: false")])]),e._v(" "),t("p",[e._v("1.注册LeanCloud")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("https://www.leancloud.cn/\nhttps://valine.js.org/quickstart.html\n")])])]),t("p",[e._v("2.配置")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("module.exports = {\n  theme: 'reco',\n  themeConfig: {\n    valineConfig: {\n      appId: '...',// your appId\n      appKey: '...', // your appKey\n    }\n  }  \n}\n")])])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("https://valine.js.org/configuration.html\n")])])]),t("h3",{attrs:{id:"_4-5配置首页"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-5配置首页"}},[e._v("#")]),e._v(" 4.5配置首页")]),e._v(" "),t("p",[e._v("1.指定 "),t("code",[e._v("type: 'blog'")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("module.exports = {\n  theme: 'reco',\n  themeConfig: {\n    type: 'blog'\n  }\n}\n")])])]),t("p",[e._v("2.设置首页的背景图片")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("---\nhome: true\nbgImage: '/bg.png'\nbgImageStyle: {\n  height: '350px'\n}\n---\n")])])]),t("p",[e._v("3.设置首页右侧信息栏头像")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("module.exports = {\n  theme: 'reco',\n  themeConfig: {\n    authorAvatar: '/avatar.png'\n  }\n}\n")])])]),t("p",[e._v("4.添加友链")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("module.exports = {\n  theme: 'reco',\n  themeConfig: {\n    type: 'blog',\n    friendLink: [\n      {\n        title: 'vuepress-theme-reco',\n        desc: 'A simple and beautiful vuepress Blog & Doc theme.',\n        logo: \"https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png\",\n        link: 'https://vuepress-theme-reco.recoluan.com'\n      },\n      {\n        title: '午后南杂',\n        desc: 'Enjoy when you can, and endure when you must.',\n        email: 'recoluan@qq.com',\n        link: 'https://www.recoluan.com'\n      },\n      // ...\n    ]\n  }\n}\n")])])]),t("p",[e._v("5.logo")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("// .vuepress/config.js\nmodule.exports = {\n  themeConfig: {\n    logo: '/head.png'\n  }\n}\n")])])]),t("h3",{attrs:{id:"_4-6侧边栏"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-6侧边栏"}},[e._v("#")]),e._v(" 4.6侧边栏")]),e._v(" "),t("p",[e._v("主题已经将某篇文章的侧边栏抽离出来放在右边，被称为「子侧边栏」")]),e._v(" "),t("p",[e._v("左边的侧边栏的仅会在自定义侧边栏时显示，它所显示的知识文章的分类和目录，我们称它为「原侧边栏」")]),e._v(" "),t("ul",[t("li",[e._v("对于「原侧边栏」，只能通过自定义侧边栏实现，无法通过Front Matter中的"),t("code",[e._v("sidebar")]),e._v("与"),t("code",[e._v("subSidebar")]),e._v("配置显示与否。")]),e._v(" "),t("li",[e._v("对于「子侧边栏」，可通过配置"),t("code",[e._v("config.js")]),e._v("配置全局开启与关闭，也可以通过Front Matter中的"),t("code",[e._v("subSidebar")]),e._v("定义每篇文章中的开启与关闭。")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("子侧边栏是否打开\n// .vuepress/config.js\nmodule.exports = {\n  themeConfig: {\n    subSidebar: 'auto'//在所有页面中启用自动生成子侧边栏，原 sidebar 仍然兼容\n  }\n}\n\n---\nsubSidebar: false\n---\n")])])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("原侧边栏：自定义侧边栏\n\n\n")])])]),t("h3",{attrs:{id:"_4-7摘要1"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-7摘要1"}},[e._v("#")]),e._v(" 4.7摘要1")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://raw.githubusercontent.com/zhuchenghao1337/github-images/main/2022/20230307222228.png",alt:""}})]),e._v(" "),t("p",[e._v("效果：")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://raw.githubusercontent.com/zhuchenghao1337/github-images/main/2022/20230307222238.png",alt:""}})]),e._v(" "),t("h3",{attrs:{id:"_4-8摘要2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-8摘要2"}},[e._v("#")]),e._v(" 4.8摘要2")]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"title"}),t("p",[e._v("这个效果不好，不建议")])]),t("p",[e._v("文档中 "),t("code",[e._v("\x3c!-- more --\x3e")]),e._v(" 以上部分会被当作摘要。")]),e._v(" "),t("div",{staticClass:"language-md extra-class"},[t("pre",{pre:!0,attrs:{class:"language-md"}},[t("code",[t("span",{pre:!0,attrs:{class:"token front-matter-block"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("---")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token front-matter yaml language-yaml"}},[e._v("title: 摘要\ndate: 2019-11-01")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("---")])]),e._v("\n\n这里的内容会被显示成摘要。\n\n"),t("span",{pre:!0,attrs:{class:"token list punctuation"}},[e._v("1.")]),e._v(" 可以放置文案；\n"),t("span",{pre:!0,attrs:{class:"token list punctuation"}},[e._v("2.")]),e._v(" 可以放置图片作为文章封面。\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("\x3c!-- more --\x3e")]),e._v("\n\n这里是文章的正文。\n")])])]),t("p",[t("img",{attrs:{src:"https://raw.githubusercontent.com/zhuchenghao1337/github-images/main/2022/20230308145852.png",alt:""}})]),e._v(" "),t("h2",{attrs:{id:"_5-部署到gitee"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-部署到gitee"}},[e._v("#")]),e._v(" 5.部署到gitee")]),e._v(" "),t("p",[e._v("1.gitee创建仓库")])])}),[],!1,null,null,null);t.default=n.exports}}]);