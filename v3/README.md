# demo-webpack #


## usage ##
### cli ###
使用 webpack-dev-server 实现热更新。
```
npm start
```
涉及：
- 支持 HMR 功能，实现热更新
- 通过获取默认 `webpack.config.js` 为配置
- 配置文件中设置 `devServer` 字段，插件：`HotModuleReplacementPlugin`
- 获取指定目录下的多入口文件
- 页面中手动引入编译文件

### node ###
监听指定目录或文件变动时执行编译。
```
npm run watch
```

执行编译
```
npm run build
``` 

编译成指定类型的文件，例如：jsonp、window、global、var、this、commonjs……
```
node index.js -lab "global"
```
