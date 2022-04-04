var canvas1 = document.getElementById("ajustes_audio"); //invocar a mi canvas
var canvas2 = document.getElementById("personalizacion");
var ctx1 = canvas1.getContext("2d");
var ctx2 = canvas2.getContext("2d");
var pressed= true;
const botonmenos= document.getElementById("botonmenos");
const botonmas= document.getElementById("botonmas");

const boton1= document.getElementById("boton1");
const boton2= document.getElementById("boton2");
const boton3= document.getElementById("boton3");
const boton4= document.getElementById("boton4");
const boton5= document.getElementById("boton5");
const boton7= document.getElementById("bjuego");
const boton8= document.getElementById("boton8");

let sonido1 = new Audio();
let espera;
sonido1.src="../audio/click/39562__the-bizniss__mouse-click.wav";

window.onload=init;

function init(){  
    boton1.addEventListener("click",function uno(){
        sonido1.play();
        espera = setTimeout(redireccionar1, 400);
    }); 
    boton2.addEventListener("click",function dos(){
      sonido1.play();
      espera = setTimeout(redireccionar2, 400);
    }); 
    boton3.addEventListener('click',function tres(){
      sonido1.play();
      espera = setTimeout(redireccionar3, 400);
    }); 
    boton4.addEventListener('click',function cuatro(){
      sonido1.play();
      espera = setTimeout(redireccionar4, 400);
    }); 
    boton5.addEventListener('click',function cinco(){
      sonido1.play();
      espera = setTimeout(redireccionar5, 400);
    });
    boton8.addEventListener('click',function ocho(){
      sonido1.play();
      espera = setTimeout(redireccionar8, 400);
    });
    boton7.addEventListener('click',function siete(){
      sonido1.play();
      espera = setTimeout(redireccionar7, 400);
    });
    botonmenos.addEventListener('click',function(){
      sonido1.play();
    }); 
    botonmas.addEventListener('click',function(){
    sonido1.play();
    });
    
    draw2();

}


function redireccionar1(){
  location.replace("../html/ComoJugar.html")
}
function redireccionar2(){
  location.replace("../html/autores.html")
}
function redireccionar3(){
  location.replace("../html/multimedia.html")
}
function redireccionar4(){
  location.replace("../html/desarrollo.html")
}
function redireccionar5(){
  location.replace("../html/referencias.html")
}
function redireccionar8(){
  location.replace("../html/portada.html")
}
function redireccionar7(){
  location.replace("../html/juego.html")
}

function draw2() {
  var img = document.getElementById("imagen"); 
	ctx1.drawImage(img, 10, 20, 100, 100); 

}

