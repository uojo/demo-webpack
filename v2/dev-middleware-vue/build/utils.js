var chalk = require('chalk')
var path = require('path')

const log = function(){
	console.log.apply(undefined, arguments);
}

const elog = function(){
	// log(process.env.LOG_LEVEL)
	if(!process.env.LOG_LEVEL)return;
	let ops = arguments[0], data=Array.prototype.slice.call( arguments, 1 )
	if( typeof ops==='string'){
		ops = {color:ops}
	}else if (typeof ops==='object' && !ops.color){
		ops.color = 'gray'
	}else{
		ops = {color:'white'}
	}

	let val = chalk[ops.color]
	.apply(undefined, data.map(el=>{
		return typeof el==="object"?JSON.stringify(el):el;
	}))
	log.call(undefined, val);
}

module.exports = {
	log,
	elog,
	resolveRootPath(epath){
		return path.resolve(__dirname,'../',epath);
	}
}