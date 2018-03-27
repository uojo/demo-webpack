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
- `webpack-dev-server/client`
- `webpack/hot/only-dev-server`
- `webpack.HotModuleReplacementPlugin`

```
npm run s4
```
访问：`127.0.0.1/dist/index.html`，使用插件如下：
- `webpack-dev-middleware`
- `webpack-hot-middleware`
- `webpack-dev-server/client`
- `HtmlWebpackPlugin`
- `webpack.optimize.OccurenceOrderPlugin`
- `webpack.HotModuleReplacementPlugin`
- `webpack.NoErrorsPlugin`


