console.log("es5 > Hello Webpack!");

window.onload = function(){
    var j_btn1 = document.getElementById("j_btn1");
    console.log("j_btn1", j_btn1)
    /* j_btn1.onclick  = function(){
        console.log( 123 );
    }; */
}


exports.fn1 = function(val) {
    console.info( val + 260 );
};
