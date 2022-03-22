var canvas1 = document.getElementById("ajustes_audio"); //invocar a mi canvas
var canvas2 = document.getElementById("personalizacion");
var ctx1 = canvas1.getContext("2d");
var ctx2 = canvas2.getContext("2d");
var pressed= true;

window.onload=init;

var icono_volumen = new Image();



function init(){     
   
}

function pintarIconos(){
    icono_volumen.src="/images/pixil-frame-0.png";
    ctx1.drawImage(icono_volumen,200,100);
}


function aumentarVolumen(){

}

function elegirNave(){

}
