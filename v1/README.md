# demo-webpack #

Express + webpack-dev-middleware 自动刷新

## 安装 ##
- npm install // 安装依赖模块
- npm install webpack -g // 全局安装

## 开始 ##
### cli
```
npm run s1
```
访问：`127.0.0.1/normal.html`，参数：`--inline`

```
npm run s2
```
访问：`127.0.0.1/hot-inline.html`，参数：`--inline --hot`

### node
```
npm run s3
```
访问：`127.0.0.1/dist/index.html`，使用插件如下：
- `HtmlWebpackPlugin`
- `webpack/hot/only-dev-server`
- `webpack-dev-server/client` 热更新必备，提供 HMR 功能
- `webpack.HotModuleReplacementPlugin` 热更新必备，将接口挂在module.hot 上

```
npm run s4
```
访问：`127.0.0.1/dist/index.html`，使用插件如下：
- `webpack-dev-middleware`
- `webpack-hot-middleware`热更新必备，提供 HMR 功能
- `HtmlWebpackPlugin`
- `webpack.optimize.OccurenceOrderPlugin`
- `webpack.HotModuleReplacementPlugin` 热更新必备，将接口挂在module.hot 上
- `webpack.NoErrorsPlugin`

> 是否能支持热更新，关键取决于 `loader` 或 具体业务代码中如何执行 `module.hot`
