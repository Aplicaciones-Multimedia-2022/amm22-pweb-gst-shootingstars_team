
const boton1= document.getElementById("boton1");
const boton2= document.getElementById("boton2");
const boton3= document.getElementById("boton3");
const boton5= document.getElementById("boton5");
const boton6= document.getElementById("bajustes");
const boton8= document.getElementById("boton8");
const boton9= document.getElementById("bprejuego");
let sonido1 = new Audio();
let espera;
sonido1.src="../audio/click/39562__the-bizniss__mouse-click.wav";

window.onload=init;



window.onscroll = function() {myFunction()};

var navbar = document.getElementById("menu");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

function init(){ 
  boton1.addEventListener('click',function uno(){
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
   boton5.addEventListener('click',function cinco(){
     sonido1.play();
     espera = setTimeout(redireccionar5, 400);
   });
   boton6.addEventListener('click',function seis(){
     sonido1.play();
     espera = setTimeout(redireccionar6, 400);
   });
   boton8.addEventListener('click',function ocho(){
     sonido1.play();
     espera = setTimeout(redireccionar8, 400);
   });
   boton9.addEventListener('click',function nueve(){
     sonido1.play();
     espera = setTimeout(redireccionar9, 400);
   });

}



function redireccionar2(){
 location.replace("../html/autores.html")
}
function redireccionar3(){
 location.replace("../html/multimedia.html")
}
function redireccionar1(){
 location.replace("../html/ComoJugar.html")
}
function redireccionar5(){
 location.replace("../html/referencias.html")
}
function redireccionar6(){
 location.replace("../html/ajustes.html")
}
function redireccionar8(){
 location.replace("../html/portada.html")
}
function redireccionar9(){
 location.replace("../html/prejuego.html")
}
