var canvas1 = document.getElementById("ajustes_audio"); //invocar a mi canvas
var canvas2 = document.getElementById("personalizacion");
var ctx1 = canvas1.getContext("2d");

var ctx2 = canvas2.getContext("2d");
var pressed= true;
const boton1= document.getElementById("boton1");
const boton2= document.getElementById("boton2");
let sonido1 = new Audio();
sonido1.src="../audio/click/39562__the-bizniss__mouse-click.wav";



window.onload=init;





function init(){  
    boton1.addEventListener('click',function(){
        sonido1.play();
    }); 
    boton2.addEventListener('click',function(){
      sonido1.play();
   }); 

   //draw();
   draw2();

}

/*
function draw() {
  var img = new Image();
  img.src = '../images/pixil-frame-0.png';
  img.onload = function() {
    ctx1.drawImage(img, 10, 10,100,100);
  };
}*/

function draw2() {
  var img = document.getElementById("imagen"); 
	ctx1.drawImage(img, 10, 20, 100, 100); 

}




function aumentarVolumen(){

}

function elegirNave(){

}

 

