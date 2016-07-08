require("./1.css");
require("./mod_es5");

var tplF1 = require("./2.ejs");
var html1 = tplF1({a1:"world!"});
console.log( "template.ejs", html1 );
document.getElementById("j_ct1").innerHTML = html1;


var tplData = {a1:100,a2:200};
var html2 = (`es6的模板${tplData.a1}、${tplData.a2} \n "追加" 内容`);
console.log( "template.es6", html2 );
document.getElementById("j_ct2").innerHTML = html2;

