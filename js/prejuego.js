//grogus
var mycanvas = document.getElementById("div_izq");
var ctx = mycanvas.getContext("2d");
var mycanvas2 = document.getElementById("div_drch");
var ctx2 = mycanvas2.getContext("2d");


var Meteorito1 = new Image();
var Meteorito2 = new Image();


var metX_izq = 0;
var metY = 1400;
var dy = -2;

//ventana emergente
var btn_abrir_easy = document.getElementById("btn");
var overlay = document.getElementById("overlay");
var ventana_easy = document.getElementById("ventana_easy");
var btn_cerrar = document.getElementById("btn_cerrar");

//botones
const boton1= document.getElementById("boton1");
const boton2= document.getElementById("boton2");
const boton3= document.getElementById("boton3");
const boton4= document.getElementById("boton4");
const boton5= document.getElementById("boton5");
const boton6= document.getElementById("bajustes");
const boton8= document.getElementById("boton8");
const botonFacil = document.getElementById("botonFacil");
const botonMedio = document.getElementById("botonMedio");
const botonDificil = document.getElementById("botonDificil");
let sonido1 = new Audio();
let espera;
sonido1.src="../audio/click/39562__the-bizniss__mouse-click.wav";







//grogus
function pintar_cosa_izq() {
  Meteorito1.src = "../images/grogu.png";
  ctx.drawImage(Meteorito1, metX_izq, metY);
}
function pintar_cosa_drch() {
  Meteorito2.src = "../images/grogu.png";
  ctx2.drawImage(Meteorito2, metX_izq, metY);
}


function draw_izq() {
  ctx.clearRect(0, 0, div_izq.width, div_izq.height);
  pintar_cosa_izq();

  metY += dy;

  if (metY + 150 < 0) {
    metY = 1400;
  }
}
function draw_dcha() {
  ctx2.clearRect(0, 0, div_drch.width, div_drch.height);
  pintar_cosa_drch();

  metY += dy;

  if (metY + 150 < 0) {
    metY = 1400;
  }
}


//ventana emergente
btn_abrir_easy.addEventListener("click", function () {
  overlay.classList.add("active");
});

btn_cerrar.addEventListener("click", function () {
  overlay.classList.remove("active");
});



//botones
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
boton6.addEventListener('click',function seis(){
sonido1.play();
espera = setTimeout(redireccionar6, 400);
});
boton8.addEventListener('click',function ocho(){
sonido1.play();
espera = setTimeout(redireccionar8, 400);
});
botonFacil.addEventListener('click',function facil(){
sonido1.play();
espera = setTimeout(redireccionarFacil, 400);
});
botonMedio.addEventListener('click',function medio(){
sonido1.play();
espera = setTimeout(redireccionarMedio, 400);
});
botonDificil.addEventListener('click',function dificil(){
sonido1.play();
espera = setTimeout(redireccionarDificil, 400);
});



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
function redireccionar6(){
  location.replace("../html/ajustes.html")
}
function redireccionar8(){
  location.replace("../html/portada.html")
}
function redireccionarFacil(){
  location.replace("../html/juego.html")
  localStorage.setItem('dificultad', '1');
}
function redireccionarMedio(){
  location.replace("../html/juego.html")
  localStorage.setItem('dificultad', '2');
}
function redireccionarDificil(){
  location.replace("../html/juego.html")
  localStorage.setItem('dificultad', '3');
}

function sub(){
  var n = document.getElementById("nombreuser").value;
  localStorage.setItem('nombre' , n);
}



setInterval(draw_izq, 10);
setInterval(draw_dcha, 10);
