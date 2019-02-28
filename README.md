# lime-template-spa

本项目模板是基于 Vue+[lime](https://www.limejs.cn) 的 `前后端分离` 架构 SPA 应用项目模板。由于是异步渲染模板的，不利于 SEO，因此适用于开发 `内网管理端`，`MIS、控制台等外网后台系统` 等客户端富交互的应用。


## Info && Feature

* 基于vue cli 2 时期风格，所有配置暴露在项目中
* 升级为 babel7, webpack4
* 实现了开发模式的 自动模块热替换

## 何为 SFB 前后端分离

这里的前后端分离有两层含义:

1. 前端采用 MVVM 框架 Vue.js 进行浏览器端的模板渲染，页面数据通过 JSON 的方式从服务器端 API 异步获取
2. 前端采用 Node.js 技术完全接管 Web 的接入层和中间层。与后端在工作分工上做到完全分离。

本项目样板在理念和设计上，包含了以上两层含义。这样的框架或样板，也可以称之为 SFB 结构的框架 `Separation of Front and Back ends`。

如果你需要更快的首屏渲染时间和SEO，则可能需要使用 [lime-template-ssr](https://github.com/limejs/lime-template-ssr) 模板。该项目样板提供了服务端直出的能力。


## Usage

* 安装 lime-cli

```bash
npm i -g lime-cli
cnpm i -g lime-cli
tnpm i -g lime-cli (腾讯内部)
```

* 初始化 spa 项目样板

```bash
lime init myproject
```

根据提示进行交互，完成项目创建

* 运行项目

```bash
# 开发环境启动项目
npm run dev
# 编译前端
npm run build
# 生产模式启动
npm start
# 打印内核日志启动
DEBUG=lime:* npm run dev
```

## 说明

* 项目结构

```js
|- config.js // 本项目的全局配置
|- backend
  |- src // mvc模块和路由
  |- fe-dist // 前端编译目标文件
  |- plugin // lime 插件，node层如何热加载和渲染spa页面的逻辑在这里
  |- public // 公共资源目录，web请求首先会在该目录下寻找资源。例如放置 favicon.ico
|- frontend
  |- src // 源码
  |- index.html
  |- package.json
  |- webpack.config.js // webpack配置
```

项目采用 monoPackages(多包组织) 的结构。backend 和 frontend 分别拥有自己的 package.json

主目录下的配置文件解释如下:

* babel.config.js

babel7 的整体项目配置，会对整个项目生效。如有子 package 自定义 babel 的需求，请在子项目中创建 `.babelrc`

* .browsersrclist

autoprefix 基于此配置加载 css 前缀

babel 基于此配置创建 polyfill


* postcss.config.js

postcss 配置，默认加载了 autoprefix

## 项目配置

* 全局项目配置

根目录下的 config.js

```js
module.exports = {
  webpackConfigFile: resolve('./frontend/webpack.config.js'), // webpack编译配置
  feDist: resolve('./backend/fe-dist') // 前端编译目标地址
}
```

其中 backend 进行渲染时，会依据 feDist；前端编译时会依据 webpackConfigFile

* 后端 backend 配置

backend/config/site.js

配置详见 lime 文档

## TODO

* 开发 branch vuecli3, 基于 vue-cli 3 风格的项目样板