# lime-template-spa
vue+lime 单页应用项目模板


## Info

* 基于vue cli 2 时期风格，所有配置暴露在项目中
* 升级为 babel7, webpack4
* koa-webpack 实现 devServer 和 热替换


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