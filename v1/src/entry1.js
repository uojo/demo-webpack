require("./1.css");
let Da0 = require("./mod_es5");

let Da1 = require("./mod_es6");

var tplF1 = require("./2.ejs");
var html1 = tplF1({a1:"world ~ "});
console.log( `template.ejs > ${html1}` );
document.getElementById("main").innerHTML = html1;

// 注册子节点
var sub = require('./sub');
var wrap_sub = document.getElementById("sub");
wrap_sub.innerHTML = sub();

document.getElementById("j_btn1").onclick  = function(){
	console.log(Da1);
	// alert( Da1 );
	
	Da0.fn1(6);
};


var tplData = {a1:100,a2:200};
var html2 = (`es6的模板${tplData.a1}、
${tplData.a2} \n "追加" 内容`);
console.log( "template.es6", html2 );

// 热更新
if(module.hot){
	console.log("module.hot",module.hot);
	
	// 包括入口文件，所有改动均使用热更新
	module.hot.accept()

	// 当指定某个模块实现热更新，其它的均刷新浏览器
	/* module.hot.accept('./sub.js',()=>{
		console.log('accept.sub.callback',arguments);
		var newSub = require('./sub.js');
		console.log('new.sub()', newSub());
		wrap_sub.innerHTML = newSub();
	}); */



}