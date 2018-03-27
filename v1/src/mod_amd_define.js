// 使用AMD模块机制
define(['./mod_cjs.js'], function(sum){
  return console.log("1 + 2 = " + sum(1, 2));
})