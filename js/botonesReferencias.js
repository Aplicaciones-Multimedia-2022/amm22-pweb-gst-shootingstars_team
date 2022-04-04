const boton1= document.getElementById("boton1");
const boton2= document.getElementById("boton2");
const boton3= document.getElementById("boton3");
const boton4= document.getElementById("boton4");
const boton6= document.getElementById("bajustes");
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
    boton3.addEventListener('click',function tres(){
      sonido1.play();
      espera = setTimeout(redireccionar3, 400);
    }); 
    boton4.addEventListener('click',function cuatro(){
      sonido1.play();
      espera = setTimeout(redireccionar4, 400);
    }); 
    boton6.addEventListener('click',function seis(){
      sonido1.play();
      espera = setTimeout(redireccionar6, 400);
    }); 
    boton7.addEventListener('click',function siete(){
      sonido1.play();
      espera = setTimeout(redireccionar7, 400);
    });
    boton8.addEventListener('click',function ocho(){
      sonido1.play();
      espera = setTimeout(redireccionar8, 400);
    });

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
function redireccionar6(){
  location.replace("../html/ajustes.html")
}
function redireccionar7(){
  location.replace("../html/juego.html")
}
function redireccionar8(){
  location.replace("../html/portada.html")
}
