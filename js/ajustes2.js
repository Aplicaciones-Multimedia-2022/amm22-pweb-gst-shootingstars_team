var canvas2 = document.getElementById("personalizacion");
var ctx2 = canvas2.getContext("2d");

const nave1= document.getElementById("nave1");
const nave2= document.getElementById("nave2");
const nave3= document.getElementById("nave3");
const nave4= document.getElementById("nave4");

window.onload=init;

function init(){ 
    nave1.addEventListener("click",function(){
        var nave1 = document.getElementById("imagen5"); 
	    ctx2.drawImage(nave1, 40, 20, 200, 150); 

    }); 

}
