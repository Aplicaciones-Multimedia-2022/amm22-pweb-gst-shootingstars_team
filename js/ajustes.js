var canvas1 = document.getElementById("ajustes_audio"); //invocar a mi canvas
var canvas2 = document.getElementById("personalizacion");
var ctx1 = canvas1.getContext("2d");
var ctx2 = canvas2.getContext("2d");
var pressed= true;
const boton= document.getElementById("boton");
let sonido1 = new Audio();
sonido1.src="../audio/click/39562__the-bizniss__mouse-click.wav";



window.onload=init;

var icono_volumen = new Image();




function init(){  
    boton.addEventListener('click',function(){
        sonido1.play();
    });   
   pintarIconos();
   playMp3();
   pauseMp3();
}

function pintarIconos(){
    icono_volumen.src="../images/shot1_2.png";
    ctx1.drawImage(icono_volumen,canvas1.height,canvas1.width + 50);
}


function aumentarVolumen(){

}

function elegirNave(){

}

const audioContainer = document.getElementById("audioContainer"); 

function playMp3() { 
  audioContainer.play(); 
} 

function pauseMp3() { 
  audioContainer.pause(); 
}