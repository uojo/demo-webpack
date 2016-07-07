# demo-webpack #

用途：模块管理工具

## 基本命令 ##
- npm install // 安装依赖模块
- webpack // 最基本的启动webpack方法
- webpack -w // 提供watch方法，实时进行打包更新
- webpack -p // 对打包后的文件进行压缩，提供production
- webpack -d // 提供source map，方便调试。

## 热加载 ##
- npm install webpack-dev-server -g
- node server.js 

## 页面索引 ##
- page1.html // 热加载自动刷新
- page2.html // inline自动刷新