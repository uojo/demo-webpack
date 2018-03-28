// 入口文件 app.js

import {init} from './app/page1';

init();

console.info("module.hot",module.hot)
if (module.hot) {
    // 知会 webpack 该模块接受 HMR update
    module.hot.accept();
}