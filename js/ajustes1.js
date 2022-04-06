var canvas1 = document.getElementById("ajustes_audio"); //invocar a mi canvas
var ctx1 = canvas1.getContext("2d");
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

/*var imagen2 = new Image();
imagen2.src = "../images/vol1.png";*/

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
      borrar();
    }); 
    botonmas.addEventListener('click',function(){
      sonido1.play();
      draw2();
    });
    
    draw1();

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

function draw1() {
  var imagen1 = document.getElementById("imagen1"); 
	ctx1.drawImage(imagen1, 20, 30, 100, 100); 

}





/*problema:como saber en cual estas para saber cual añadir y cual borrar de
vulumen
posibles solucione: usar arrays para poner cada uno en una posicion*/ 
function draw2(){
  //para dibujar las lineas del volumen
  var imagen2 = document.getElementById("imagen2");
  var imagen3 = document.getElementById("imagen3");
  var imagen4 = document.getElementById("imagen4");
  ctx1.drawImage(imagen2, 130, 27, 25, 100);

  botonmas.addEventListener('click',function(){
    sonido1.play();
    ctx1.drawImage(imagen3, 180, 27, 25, 100);
    botonmas.addEventListener('click',function(){
      sonido1.play();
      ctx1.drawImage(imagen4, 230, 27, 25, 100);
      
    });
  });
}

function borrar(){
  //para borrar las lineas de voulmen
  ctx1.clearRect(130, 27, 25, 100);
}
