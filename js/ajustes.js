//var canvas1 = document.getElementById("ajustes_audio"); //invocar a mi canvas
var canvas2 = document.getElementById("personalizacion");
//var ctx1 = canvas1.getContext("2d");
var ctx2 = canvas2.getContext("2d");
var pressed= true;





window.onload=init;



function init(){     
   
        var nave1=new Image();
        nave1.src="/images/Ship1.png";
        nave1.onload=function(){
            ctx2.drawImage(nave1,0, 0);
        }
    
}


function aumentarVolumen(){

}

function elegirNave(){

}
